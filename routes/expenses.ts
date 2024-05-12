import { Router } from "express";
import {
  getExpenses,
  createExpense,
  getExpenseById,
} from "../controllers/expenses";

const expensesRoutes = Router();

expensesRoutes.get("/", getExpenses);

expensesRoutes.post("/", createExpense);

expensesRoutes.get("/:id", getExpenseById);

export default expensesRoutes;
