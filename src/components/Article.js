import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  let queryString = `https://sa-nc-news.herokuapp.com/api/articles/${article_id}`;

  useEffect(() => {
    fetch(queryString)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setArticle(response.article);
      });
  }, [queryString]);

  console.log(article);
  return (
    <div>
      <block>{article.body}</block>
    </div>
  );
};

export default Article;
