import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(
      "mongodb+srv://celesbmontero:5V73Qom4VIfO2bcl@celestedev.rugdj6u.mongodb.net/"
    );
    console.log("Base de datos online");
  } catch (error) {
    console.log(error);
    throw new Error("Error en la inicialización de dbconfig.ts");
  }
};
