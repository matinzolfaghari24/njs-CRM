import mongoose from "mongoose";

// Serverless-friendly mongoose connection helper.
// Reuses a cached connection across lambda invocations to avoid
// exhausting connections when functions are invoked frequently.

const globalAny = global;

if (!globalAny._mongoose) {
  globalAny._mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in environment variables");
  }

  if (globalAny._mongoose.conn) {
    // already connected
    return globalAny._mongoose.conn;
  }

  if (!globalAny._mongoose.promise) {
    const opts = {
      // recommended options; mongoose v7+ sets sensible defaults but keep these safe
      // useNewUrlParser and useUnifiedTopology are defaults in recent versions
      bufferCommands: false,
      // you can add other options here if needed
    };

    globalAny._mongoose.promise = mongoose
      .connect(process.env.MONGO_URI, opts)
      .then((m) => m.connection)
      .catch((err) => {
        // clear cached promise so next invocation can retry
        globalAny._mongoose.promise = null;
        throw err;
      });
  }

  globalAny._mongoose.conn = await globalAny._mongoose.promise;
  console.log("Connected to MongoDB", {
    host: globalAny._mongoose.conn?.host,
    name: globalAny._mongoose.conn?.name,
  });
  return globalAny._mongoose.conn;
}

export default connectDB;
