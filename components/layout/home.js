import Navbar from "../homePage/navbar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
};

export default HomeLayout;
