import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://sa-nc-news.herokuapp.com/api/",
});

export const getArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getArticles = () => {
  return newsApi.get(`/articles`).then(({ data }) => {
    return data;
  });
};
