import UserLayout from "../../../components/layout/user";

const UserInfo = () => {
  return (
    <div className="flex justify-center">
      <p className="text-2xl font-bold">Edit User Info</p>
    </div>
  );
};

UserInfo.getLayout = (page) => {
  return <UserLayout>{page}</UserLayout>;
};

export default UserInfo;
