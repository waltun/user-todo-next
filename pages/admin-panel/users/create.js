import AdminLayout from "../../../components/layout/admin";
import CreateUser from "../../../components/admin/users/create";

const Create = () => {
  return (
    <>
      <CreateUser />
    </>
  );
};

Create.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Create;
