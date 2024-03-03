import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  Name: Yup.string().required("Name is required"),
  Title: Yup.string().required("Title is required"),
  Investment: Yup.string().required("Investment Goals is required"),
  Email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  ConfirmPassword: Yup.string().required("Confirm Password is required"),
});

const CustomerForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <Formik
      initialValues={{
        Name: "",
        Title: "",
        Investment: "",
        Email: "",
        password: "",
        ConfirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        setIsSubmitted(true);
        console.log(values);
        actions.setSubmitting(false);
        alert("Form is submitted");
      }}
    >
      {({ resetForm }) => (
        <Form>
          <div className="w-[400px] h-auto">
            <div className="flex flex-col">
              <div className="rounded-sm shadow-default">
                <h1 className="font-bold text-5xl text-white pb-5">
                  Edit Profile
                </h1>
              </div>

              <div className="text-white">
                <div className="w-full mb-4.5">
                  <label className="mb-2 block">Name</label>
                  <Field
                    type="text"
                    placeholder="John Smith"
                    name="Name"
                    className="w-full rounded-md border-[1.5px] border-stroke bg-white py-2 px-5 font-medium outline-none text-black transition border-black "
                  />
                  <ErrorMessage
                    name="Name"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div className="w-full mb-4.5">
                  <label className="mb-2 block">Title</label>
                  <Field
                    type="text"
                    name="Title"
                    placeholder="Stock Investor"
                    className="w-full rounded-md border-[1.5px] border-stroke text-black bg-white py-2 px-5 font-medium outline-none transition border-black "
                  />
                  <ErrorMessage
                    name="Title"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                <div className="mb-2">
                  <label className="mb-2 block">Investment Goals</label>
                  <Field
                    type="text"
                    name="Investment"
                    placeholder="Enter your Investment goals"
                    className="w-full rounded-md border-[1.5px] text-black border-stroke bg-white py-2 px-5 font-medium outline-none transition border-black "
                  />
                  <ErrorMessage
                    name="Investment"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                <div className="mb-2">
                  <label className="mb-2 block  ">Change Email</label>
                  <Field
                    type="email"
                    name="Email"
                    placeholder="Johnsmith@gmail.com"
                    className="w-full rounded-md border-[1.5px] text-black border-stroke bg-white py-2 px-5 font-medium outline-none transition border-black "
                  />
                  <ErrorMessage
                    name="Email"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                <div className="w-full mb-2">
                  <label className="mb-2 block">password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full rounded-md border-[1.5px] text-black border-stroke bg-white py-2 px-5 font-medium outline-none transition border-black "
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600"
                  />
                </div>

                <div className="mb-2">
                  <label className="mb-2 block">Confirm Password</label>
                  <Field
                    type="password"
                    name="ConfirmPassword"
                    placeholder="Confirm Password"
                    className="w-full rounded-md border-[1.5px] text-black border-stroke bg-white py-2 px-5 font-medium outline-none transition border-black "
                  ></Field>
                  <ErrorMessage
                    name="ConfirmPassword"
                    component="div"
                    className="text-red-600"
                  />
                </div>
                <div className="flex gap-5 mt-5">
                  <button
                    type="submit"
                    className="  bg-[#7752FE] rounded-full font-bold py-1 px-8 text-white flex items-center gap-1"
                  >
                    Save changes
                  </button>
                  <button
                    onClick={() => resetForm()}
                    className=" bg-[#7752FE] rounded-full font-bold py-1 px-8 text-white flex items-center gap-1"
                  >
                    Reset changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CustomerForm;
