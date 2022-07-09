import AdminLayout from "../../../../components/layout/admin";
import EditArticle from "../../../../components/admin/articles/edit";

const Edit = () => {
  return (
    <>
      <EditArticle />
    </>
  );
};

Edit.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Edit;
