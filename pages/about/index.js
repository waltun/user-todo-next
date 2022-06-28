import HomeLayout from '../../components/layout/home'

const About = () => {
  return (
    <>
      <div className="mt-4 flex justify-center">
        <p className="text-xl font-bold text-gray-600">About Page</p>
      </div>
    </>
  );
};

About.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>
}

export default About;
