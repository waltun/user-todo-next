import UserLayout from "../../components/layout/user";

const User = () => {
  return (
    <div className="flex justify-center">
      <p className="text-2xl font-bold">User Panel</p>
    </div>
  );
};

User.getLayout = (page) => {
  return <UserLayout>{page}</UserLayout>;
};

export default User;
