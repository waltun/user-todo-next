import ArticleSingle from "../../components/home-page/articles/single";
import HomeLayout from "../../components/layout/home";

const SingleArticle = ({ article }) => {
  return <ArticleSingle article={article} />;
};

export const getServerSideProps = async ({ params }) => {
  let res = await fetch(
    "https://6283d9436b6c317d5ba74d17.endapi.io/articles/" + params.id
  );

  let article = await res.json();

  return {
    props: {
      article,
    },
  };
};

SingleArticle.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default SingleArticle;
