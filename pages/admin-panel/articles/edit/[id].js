import AdminLayout from "../../../../components/layout/admin";
import EditArticle from "../../../../components/admin/articles/edit";
import { useRouter } from "next/router";

const Edit = ({ id }) => {
  return (
    <>
      <EditArticle id={id} />
    </>
  );
};

Edit.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};


export async function getServerSideProps(context) {
  const { id } = context.query;

  return { props: { id } };
}

export default Edit;
