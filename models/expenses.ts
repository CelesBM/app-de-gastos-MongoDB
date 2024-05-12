import { Model, Schema, model } from "mongoose";

export interface IExpense {
  descripcion: string;
  monto: number;
}

const ExpenseSchema = new Schema<IExpense>({
  descripcion: {
    type: String,
    required: true,
  },
  monto: {
    type: Number,
    required: true,
  },
});

const Expense: Model<IExpense> = model<IExpense>("Expense", ExpenseSchema);

export default Expense;
