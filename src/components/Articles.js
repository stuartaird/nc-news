import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  let queryString = "https://sa-nc-news.herokuapp.com/api/articles";

  useEffect(() => {
    fetch(queryString)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setArticles(response.articles);
      });
  }, [queryString]);

  // console.log(articles);

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
          <section id={article.id} key={article.id} className="flex-child flex-articles">
            <br />
            <Link to={`/articles/${article.article_id}`} className="article-title">
              {article.title}
            </Link>
            <p className="article-excerpt">{article.body.slice(0, 120)}...</p>
            <p className="article-info">
              Created: {article.created_at} <br />
              Comments: {article.totalcomments}
            </p>
          </section>
        );
      })}
    </div>
  );
};

export default Articles;
