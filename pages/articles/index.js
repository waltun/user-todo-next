import Articles from "../../components/homePage/articles";
import HomeLayout from "../../components/layout/home";

const PageArticles = () => {
  return <Articles />;
};

PageArticles.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default PageArticles;
