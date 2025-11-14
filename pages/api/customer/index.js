import Customer from "@/models/Customer";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "failed", message: "Internal server error" });
    return;
  }
  if (req.method === "POST") {
    const { data } = req.body;
    if (!data.name || !data.lastName || !data.email) {
      return res.status(400).json({
        status: "failed",
        message: "Name, lastName and email are required",
      });
    }
    try {
      const customer = await Customer.create(data);
      return res.status(201).json({
        status: "success",
        message: "Customer created successfully",
        data: customer,
      });
    } catch (error) {
      console.log({ error });
      if (error.code === 11000) {
        return res.status(400).json({
          status: "failed",
          message: "Email already exists",
        });
      }
      return res.status(500).json({
        status: "failed",
        message: "Error in storing data in database",
      });
    }
  }
  if (req.method === "GET") {
    try {
      const customers = await Customer.find();
      return res.status(200).json({
        status: "success",
        message: "Customers fetched successfully",
        data: customers,
      });
    } catch (error) {
      console.log({ error });
      return res.status(500).json({
        status: "failed",
        message: "Error in fetching customers from database",
      });
    }
  }
}
