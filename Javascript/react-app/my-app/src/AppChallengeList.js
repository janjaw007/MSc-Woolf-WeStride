import React from "react";
import "./styles.css";
import ExpenseItem from "./components/ExpenseItem";

const expenseList = [
  { id: 1, amount: 4000, description: "Breakfast at cafe" },
  { id: 2, amount: 2300, description: "Fitness bill" },
  { id: 3, amount: 1800, description: "Electricity bill" },
  { id: 4, amount: 12000, description: "Flight to Bangkok" },
];

function App() {
  const addExpense = () => {
    console.log("Expense Added");
  };

  const renderedExpenseItems = expenseList.map((expenseItem, key) => {
    return (
      <ExpenseItem
        description={expenseItem.description}
        amount={expenseItem.amount}
        key={expenseItem.id}
      />
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
      </header>
      <div className="expense-form">
        <input type="number" placeholder="Amount" />
        <input type="text" placeholder="Description" />
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <div className="expense-list">
        <h2>Expenses</h2>
        {renderedExpenseItems}
      </div>
    </div>
  );
}

export default App;
