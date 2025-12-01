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
  if (req.method === "DELETE") {
    const id = req.query.customerId;
    try {
      await Customer.deleteOne({ _id: id });
      console.log(id)
      res.status(200).json({
        status: "success",
        message: "Customer deleted successfully",
      });

    } catch (error) {
      console.log({ error });
      return res.status(500).json({
        status: "failed",
        message: "Error in deleting customers from database",
      });
    }
  }
}
