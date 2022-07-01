import ArticleSingle from "../../components/home-page/articles/single";
import HomeLayout from "../../components/layout/home";

const SingleArticle = () => {
  return <ArticleSingle />;
};

SingleArticle.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default SingleArticle;
