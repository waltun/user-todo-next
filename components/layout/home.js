import Navbar from "../home-page/navbar";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}
    </>
  );
};

export default HomeLayout;
