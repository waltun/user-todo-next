import HomeLayout from "../components/layout/home";

const Home = () => {
  return (
    <>
      <div className="mt-4 flex justify-center">
        <p className="text-xl font-bold text-gray-600">Home Page</p>
      </div>
    </>
  );
};

Home.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
