import HomeLayout from "../../components/layout/home";

const Contact = () => {
  return (
    <>
      <div className="mt-4 flex justify-center">
        <p className="text-xl font-bold text-gray-600">Contact Page</p>
      </div>
    </>
  );
};

Contact.getLayout = (page) => {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Contact;
