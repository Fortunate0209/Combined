import { useFormik } from "formik";
import * as Yup from 'yup';

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      email: "",
      lastname: "",
      password: "",
    },

    validationSchema: Yup.object({
        firstname: Yup.string()
          .max(10, 'Must be 10 characters or less')
          .required('FirstName is Required'),
        lastname: Yup.string()
          .max(10, 'Must be 10 characters or less')
          .required('Lastname is Required'),
        email: Yup.string().email('Invalid email address').required('Email is Required'),
        password:Yup.string()
        .required('Password is required')
        .matches(/^(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/, "Password must be at least 8 characters long and include at least one letter and one number")
      }),
    onSubmit: (values, {resetForm}) =>{
        console.log(values);
        resetForm();
    }
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        action=""
        className=" mx-auto w-50 d-block shadow p-5"
        >
          <h1 className="text-center text-success text-decoration-underline">FORMIK FORM</h1>
        <div className="mx-auto">
          <label className=" fw-bold" htmlFor="">First Name</label>
          <input
            name="firstname"
            onChange={formik.handleChange}
            value={formik.values.firstname}
            onBlur={formik.handleBlur}
            className="w-100 d-block rounded p-1 mt-1 outline-none my-2 border-none"
            type="text"
            placeholder="Enter your first Name"
          />
            <div className="text-danger fw-bold">
         {formik.touched.firstname && formik.errors.firstname}
         </div>
        </div>

        <div className=" mx-auto">
          <label htmlFor=""  className=" fw-bold" >Last Name</label>
          <input
            name="lastname"
            onChange={formik.handleChange}
            value={formik.values.lastname}
            onBlur={formik.handleBlur}
            className="w-100 d-block rounded p-1 mt-1 outline-none my-2"
            type="text"
            placeholder="Enter your Last Name"
          />
         <div className="text-danger fw-bold">
         {formik.touched.lastname && formik.errors.lastname}
         </div>
        </div>

        <div className="">
          <label htmlFor=""  className=" fw-bold" >Email</label>
          <input
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="text"
            onBlur={formik.handleBlur}
            className="w-100 d-block rounded p-1 mt-1 outline-none my-2"
            placeholder="Enter your Email"
          />
            <div className="text-danger fw-bold">
         {formik.touched.email && formik.errors.email}
         </div>
        </div>

        <div className="">
          <label htmlFor=""  className=" fw-bold" >Password</label>
          <input
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            type="text"
            className="w-100 d-block rounded p-1 mt-1 outline-none my-2"
            placeholder="Enter Your Password"
          />
            <div className="text-danger fw-bold">
         {formik.touched.password && formik.errors.password}
         </div>
        </div>

        <div>
        <button type="submit" className="w-75 fw-bold mt-4 d-block mx-auto text-white btn btn-success">Submit Here</button>
        </div>
      </form>
      </div>
    );
    };

export default Formik;
