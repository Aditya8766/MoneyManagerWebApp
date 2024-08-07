import React from 'react';
import './history.scss';

function TransactionHistory({ transactions, deleteTransaction }) {
  return (
    <div className="transaction-history">
        <h1>Transaction History</h1>
    <ul>
      {transactions.map((transaction, index) => (
        <li key={index} className="transaction-item">
          <span className="transaction-date">{transaction.date}</span>
          <span className="transaction-title">{transaction.title}</span>
          <span className="transaction-amount">Rs {transaction.amount}</span>
          <span className={`transaction-type ${transaction.type}`}>
            {transaction.type}
          </span>
          <button
            className="delete-button"
            onClick={() => deleteTransaction(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default TransactionHistory;
