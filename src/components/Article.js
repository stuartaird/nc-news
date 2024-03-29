import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle, getComments, changeVotes } from "../utils/api.js";
import "../css/index.css";
import "../css/article.css";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticle(article_id).then((response) => {
      setArticle(response);
    });
  }, [article_id, article]);

  useEffect(() => {
    getComments(article_id).then((response) => {
      setComments(response);
    });
  }, [article_id]);

  return (
    <>
      <div className="article-title" key="title">
        {article.title}
      </div>
      <div className="article-author" key="author-details">
        <p>Author: {article.author}</p>
        <p>Published: {article.created_at}</p>
      </div>
      <div className="article-body first-color" key="body">
        {article.body}
      </div>
      <div className="voting-buttons" key="voting">
        <button onClick={(e) => changeVotes(article_id, 1)}>Upvote</button>
        <p>{article.votes}</p>
        <button onClick={(e) => changeVotes(article_id, -1)}>Downvote</button>
      </div>
      <div className="comments-array" key="comments-array">
        {comments.map((c) => {
          return (
            <div className="comment-card second-color" key={`${c.comment_id}`}>
              <p>
                <b>User: </b>
                {c.author}
              </p>
              <p>{c.body}</p>
              <p style={{ textAlign: "right" }}>
                <b>Date: </b>
                {c.created_at.slice(0, 10)}
              </p>
              <p style={{ textAlign: "right" }}>
                <b>Votes: </b>
                {c.votes}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Article;
