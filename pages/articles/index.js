import Articles from "../../components/home-page/articles";
import HomeLayout from "../../components/layout/home";

const PageArticles = ({ articles }) => {
  return <Articles articles={articles} />;
};

export const getServerSideProps = async () => {
  let res = await fetch("https://6283d9436b6c317d5ba74d17.endapi.io/articles");

  let articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

PageArticles.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default PageArticles;
