const mongoose = require("mongoose");

const ConnectDb = async () => {
  const connectionString = process.env.CONNECTION_STRING;
  try {
    const connect = await mongoose.connect(connectionString);
    if (connect) {
      console.log("Database connection established Successfully");
    } else {
      console.log("Error connecting to database");
    }
  } catch (error) {
    console.log("Error connecting to database", error);
  }
};

module.exports = ConnectDb
