import mongoose from "mongoose";

class Database {
  constructor(uri) {
    this.uri = uri;
    this.connection = null;
  }

  async connect() {
    if (!this.connection) {
      try {
        this.connection = await mongoose.connect(this.uri);
        console.log("✅ MongoDB Connected Successfully");
      } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1);
      }
    }
    return this.connection;
  }

  async disconnect() {
    try {
      await mongoose.disconnect();
      this.connection = null;
      console.log(" MongoDB Disconnected");
    } catch (error) {
      console.error(" Error Disconnecting MongoDB:", error.message);
    }
  }
}

export default Database;
