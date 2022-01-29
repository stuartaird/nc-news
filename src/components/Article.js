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
      <block>{article.body}</block>
    </div>
  );
};

export default Article;
