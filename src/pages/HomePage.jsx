import React from "react";
import Post from "../components/Post";
import "../Homepage.css";
import Suggestions from "../components/Suggestions";

export default function HomePage({ posts }) {
  const accounts = [];
  posts.forEach((element) => {
    accounts.push(element.name);
  });
  console.log(accounts);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="Homepage-posts col-md-7 ">
          {posts.map((post, index) => {
            return <Post post={post} key={index} />;
          })}
        </div>
        <div className="Homepage-suggestions col-md-3">
          <Suggestions accounts={accounts} />
        </div>
      </div>
    </div>
  );
}
