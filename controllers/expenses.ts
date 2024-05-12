import { Request, Response } from "express";
import Expense, { IExpense } from "../models/expenses";

export const getExpenses = async ({}, res: Response) => {
  const expenses = await Expense.find();
  res.json({ expenses });
};

export const createExpense = async (req: Request, res: Response) => {
  const expenseData: IExpense = req.body;
  const expense = new Expense(expenseData);
  await expense.save();
  res.json({
    msg: "Gasto ingresado correctamente",
    expense,
  });
};

export const getExpenseById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const expense: IExpense | null = await Expense.findOne({ _id: id });
  res.json({ expense });
};
