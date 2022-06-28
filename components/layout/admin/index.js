import Header from "./header";
import Sidebar from "./sidebar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col md:pr-64 font-IRANSans">
        <Header />
        <main>
          <div className="p-4">{children}</div>
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
