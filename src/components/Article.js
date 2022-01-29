import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../utils/api.js";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticle(article_id).then((response) => {
      setArticle(response);
    });
  }, [article_id]);

  return (
    <div>
      <div class="article-title">{article.title}</div>
      <div class="article-author">
        Author: {article.author}
        <br />
        Published: {article.created_at}
      </div>
      <div class="article-body">{article.body}</div>
      <div class="voting-buttons">
        <button>Upvote</button>
        <button>Downvote</button>
      </div>
    </div>
  );
};

export default Article;
