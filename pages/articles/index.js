import Articles from "../../components/home-page/articles";
import HomeLayout from "../../components/layout/home";

const PageArticles = () => {
  return <Articles />;
};

PageArticles.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default PageArticles;
