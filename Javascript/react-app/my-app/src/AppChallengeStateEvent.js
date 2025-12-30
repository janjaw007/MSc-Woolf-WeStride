import React, { useState } from "react";
import "./styles.css";

// const expenseList = [
//   { id: 1, amount: 4000, description: "Breakfast at cafe" },
//   { id: 2, amount: 2300, description: "Fitness bill" },
//   { id: 3, amount: 1800, description: "Electricity bill" },
//   { id: 4, amount: 12000, description: "Flight to Bangkok" },
// ];
const expenseDescription = [
  "Electricity bill",
  "Lunch",
  "Breakfast",
  "Rent",
  "Water bill",
  "Internet service",
  "Car maintenance",
  "Gasoline",
  "Mobile phone bill",
  "Dinner",
  "Beverages",
  "Shopping",
  "Gym membership",
  "Life insurance",
  "Health insurance",
  "Car insurance",
  "Groceries",
  "Public transportation",
  "Clothing",
  "Haircuts",
  "Entertainment",
  "Streaming services",
  "Home repairs",
  "Childcare",
  "Pet care",
  "Subscriptions",
  "Education fees",
  "Books",
  "Vacation",
  "Gifts",
  "Charity donations",
  "Laundry services",
  "Dining out",
  "Parking fees",
  "Office supplies",
  "Medical bills",
  "Fitness classes",
  "Household items",
  "Personal care products",
  "Home security",
];

function App() {
  const [expenseList, setExpenseList] = useState([]);

  const randomDescription = () => {
    const randomIdx = Math.round(Math.random() * expenseDescription.length);
    return expenseDescription[randomIdx];
  };

  const addExpense = () => {
    console.log("Expense Added");

    const newExpense = {
      id: Math.random(),
      amount: Math.round(Math.random() * 25000),
      description: randomDescription(),
    };

    console.log(newExpense);

    // เพิ่ม Expense ใหม่ใน Function นี้ได้เลย
    setExpenseList([...expenseList, newExpense]);
  };

  const renderedExpenseItems = expenseList.map((expenseItem) => {
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
