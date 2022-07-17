import Sidebar from "../user-panel/sidebar";

const UserLayout = ({ children }) => {
  return (
    <div className="px-32 mt-10 font-IRANSans">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9">{children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
