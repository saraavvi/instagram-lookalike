import React, { useState } from "react";
import CommentForm from "./CommentForm";

//gör add a comment till en riktig input och gör en form komponent
export default function Post({ post }) {
  const initialComments = [];
  const [comments, setComments] = useState(initialComments);

  function addComment(comment) {
    const newComment = comment;

    const newComments = comments.concat(newComment);

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
          <p>
            <strong>{post.likes} likes</strong>
          </p>

          <h6>{post.title}</h6>
          <p>{post.description}</p>
          <div>
            <strong>comments:</strong>
            {comments.map((comment) => {
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
