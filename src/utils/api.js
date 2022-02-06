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

export const getComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const changeVotes = (article_id, votes) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes: votes });
};
