const AdminLayout = ({ children }) => {
  return (
    <>
      <h1 className="text-center font-xl font-bold text-red-600">
        Admin panel
      </h1>
      {children}
    </>
  );
};

export default AdminLayout;
