import React from "react";

export default function Suggestions({ accounts }) {
  console.log(accounts);
  return (
    <div className="Suggestions mt-5">
      <strong>Suggestions for you</strong>
      {accounts.map((account, index) => {
        return <p className="mb-0">{account}</p>;
      })}
    </div>
  );
}
