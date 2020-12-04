import React, { useState } from "react";
import CommentForm from "./CommentForm";

//gör add a comment till en riktig input och gör en form komponent
export default function Post({ post }) {
  const initialComments = [];
  const [comments, setComments] = useState(initialComments);

  const [count, setCount] = useState(post.likes);

  function handleOnClick() {
    setCount(count + 1);
  }

  function addComment(comment) {
    const newComment = comment;
    const newComments = [newComment, ...comments];
    setComments(newComments);
  }

  return (
    <div className="Post">
      <div className="card mt-5">
        <div className="card-header bg-white">
          <strong>{post.name}</strong>
        </div>
        <img className="card-img" src={post.imageURL} />
        <div className="card-body">
          <p onDoubleClick={handleOnClick}> 🖤</p>
          <p>
            <strong>{count} likes</strong>
          </p>

          <h6>{post.title}</h6>
          <p>{post.description}</p>
          <div>
            <strong>View all {comments.length} comments</strong>
            {comments.slice(0, 3).map((comment) => {
              return <p className="mb-0">{comment}</p>;
            })}
          </div>
        </div>
        <div className="card-footer bg-white">
          <CommentForm addComment={addComment} />
        </div>
      </div>
    </div>
  );
}
