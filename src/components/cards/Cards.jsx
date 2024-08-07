import React from "react";
import './cards.scss'
const Cards =({balance,income,expenses})=>{
    return(
        <div className="cards">
      <div className="card">
        <h3>Your Balance</h3>
        <p>Rs {balance}</p>
      </div>
      <div className="card">
        <h3>Your Income</h3>
        <p>Rs {income}</p>
      </div>
      <div className="card">
        <h3>Your Expenses</h3>
        <p>Rs {expenses}</p>
      </div>
    </div>
    )
}
export default Cards;