import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/articles.css";
import "../css/index.css";
import { getArticles } from "../utils/api.js";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((response) => {
      setArticles(response.articles);
    });
  }, []);

  return (
    <div className="flex-parent articles">
      <section id="topics" className="flex-child articles_topics">
        <p> topics filter</p>
      </section>
      <section id="sort_options" className="flex-child articles_sort">
        <p>sort options</p>
      </section>
      {articles.map((article) => {
        return (
          <section
            id={article.id}
            key={article.id}
            className="flex-child flex-articles"
          >
            <br />
            <Link
              to={`/articles/${article.article_id}`}
              className="articles-title"
            >
              {article.title}
            </Link>
            <p className="articles-excerpt">{article.body.slice(0, 120)}...</p>
            <p className="articles-info">
              Created: {article.created_at.slice(0, 10)} <br />
              Comments: {article.totalcomments}
            </p>
          </section>
        );
      })}
    </div>
  );
};

export default Articles;
