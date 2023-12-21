import mongoose from "mongoose"

const connectToDatabase = async () => {
  try {
    // TODO use env
    const connection = await mongoose.connect(
      process.env.MONGO_URI
    )
    if (connection) {
      console.log("Connection to database established")
    }
  } catch (error) {
    console.log("error in connectToDatabase", error)
    throw error
  }
}

export default connectToDatabase
