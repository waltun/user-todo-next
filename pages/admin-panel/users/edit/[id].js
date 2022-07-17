import AdminLayout from "../../../../components/layout/admin";
import EditUser from "../../../../components/admin/users/edit";

const Edit = ({ user }) => {
  return (
    <>
      <EditUser data={user.data} />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  let res = await fetch(
    `https://6283d9436b6c317d5ba74d17.endapi.io/users/${params.id}`
  );

  let user = await res.json();

  return {
    props: {
      user,
    },
  };
};

Edit.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Edit;
