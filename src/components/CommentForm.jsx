import React, { useState } from "react";
import "../CommentForm.css";

export default function CommentForm({ addComment }) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handlePostClick(e) {
    addComment(value);
    setValue("");
    e.preventDefault();
  }

  return (
    <form className="CommentForm">
      <input
        onChange={handleChange}
        className="col-10"
        placeholder="Add a comment"
        type="text"
        value={value}
      />
      <button onClick={handlePostClick} type="submit" className="btn col-2">
        <strong>post</strong>
      </button>
    </form>
  );
}
