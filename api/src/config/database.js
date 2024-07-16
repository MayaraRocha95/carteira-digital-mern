import mongoose from "mongoose";
import "dotenv/config";

export async function connectDb() {

  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Conectado ao banco de dados");
  } catch (err) {
    console.log("Erro ao conectar ao banco de dados");
  }
}

export async function disconnectDb() {
  await mongoose.connection.disconnectDb();
}
