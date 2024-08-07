import React, { useState } from 'react';
import './add-transaction.scss';

function AddTransaction({ addTransaction }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    const newTransaction = {
      title,
      amount: parseFloat(amount),
      type,
      date,
    };

    addTransaction(newTransaction);

    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <div>
    <h1>Add Transaction</h1>
        <form className="add-transaction" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
        </select>
        <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
        </form>
    </div>
  );
}

export default AddTransaction;
