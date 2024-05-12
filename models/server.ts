import express, { Express } from "express";

import expensesRoutes from "../routes/expenses";
import { connectDB } from "../dbconfig";

export class Server {
  app: Express;

  constructor() {
    this.app = express();
    this.DBconnection();
    this.middlewares();
    this.routes();
  }

  async DBconnection(): Promise<void> {
    await connectDB();
  }

  middlewares(): void {
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use("/expenses", expensesRoutes);
  }

  listen(): void {
    this.app.listen(8080, () => {
      console.log("server inicializado en puerto 8080");
    });
  }
}
