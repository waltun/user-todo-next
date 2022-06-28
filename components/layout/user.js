const UserLayout = ({ children }) => {
  return (
    <>
      <h1 className="text-center font-xl font-bold text-red-600">User panel</h1>
      {children}
    </>
  );
};

export default UserLayout;
