import AdminLayout from "../../../../components/layout/admin";
import EditArticle from "../../../../components/admin/articles/edit";
import { useRouter } from "next/router";

const Edit = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <EditArticle id={id} />
    </>
  );
};

Edit.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Edit;
