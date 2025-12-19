import React from "react";
import "./styles.css";

const expenseList = [
  { id: 1, amount: 4000, description: "Breakfast at cafe" },
  { id: 2, amount: 2300, description: "Fitness bill" },
  { id: 3, amount: 1800, description: "Electricity bill" },
  { id: 4, amount: 12000, description: "Flight to Bangkok" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expense Tracker</h1>
      </header>
      <div className="expense-form">
        <input type="number" placeholder="Amount" />
        <input type="text" placeholder="Description" />
        <button>Add Expense</button>
      </div>
      <div className="expense-list">
        <h2>Expenses</h2>
        {expenseList.map((expenseItem) => {
          return (
            <ExpenseItem
              key={expenseItem.id}
              description={expenseItem.description}
              amount={expenseItem.amount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

function ExpenseItem({ description, amount }) {
  return (
    <ul>
      <div className="expense-item">
        <div className="expense-details">
          <div className="expense-description">{description}</div>
        </div>
        <div className="expense-amount">${amount}</div>
      </div>
    </ul>
  );
}
