import React, { useState, useEffect } from 'react';
import Cards from './components/cards/Cards';
import AddTransaction from './components/add-transaction/AddTransaction';
import TransactionHistory from './components/history/History';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedTransactions = localStorage.getItem('transactions');
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="App">
      <h1>Hello Aditya</h1>
      <h3>Welcome back in Money Manager</h3>
      <Cards balance={balance} income={totalIncome} expenses={totalExpenses} />
      <AddTransaction addTransaction={addTransaction} />
      <TransactionHistory
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
    </div>
  );
}

export default App;
