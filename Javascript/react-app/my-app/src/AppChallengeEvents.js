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
  function handleAddExpense() {
    console.log("Add Expense");
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
      </header>
      <div className="expense-form">
        <input type="number" placeholder="Amount" />
        <input type="text" placeholder="Description" />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
      <div className="expense-list">
        <h2>Expenses</h2>
        <ExpenseItem
          description={expenseList[0].description}
          amount={expenseList[0].amount}
        />
        <ExpenseItem
          description={expenseList[1].description}
          amount={expenseList[1].amount}
        />
        <ExpenseItem
          description={expenseList[2].description}
          amount={expenseList[2].amount}
        />
        <ExpenseItem
          description={expenseList[3].description}
          amount={expenseList[3].amount}
        />
      </div>
    </div>
  );
}

export default App;
