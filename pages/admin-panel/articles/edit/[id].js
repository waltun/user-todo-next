import AdminLayout from "../../../../components/layout/admin";
import EditArticle from "../../../../components/admin/articles/edit";
import { useRouter } from "next/router";

const Edit = ({ article }) => {
  return (
    <>
      <EditArticle data={article.data} />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  let res = await fetch(
    `https://6283d9436b6c317d5ba74d17.endapi.io/articles/${params.id}`
  );

  let article = await res.json();

  return {
    props: {
      article,
    },
  };
};

Edit.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Edit;
