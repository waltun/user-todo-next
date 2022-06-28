import AdminLayout from "../../components/layout/admin";

const Admin = () => {
  return (
    <div className="flex justify-center">
      <p className="text-2xl font-bold">Admin Panel</p>
    </div>
  );
};

Admin.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default Admin;
