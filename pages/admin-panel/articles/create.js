import AdminLayout from "../../../components/layout/admin";
import CreateArticle from "../../../components/admin/articles/create";

const Create = () => {
  return (
    <>
      <CreateArticle />
    </>
  );
};

Create.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Create;
