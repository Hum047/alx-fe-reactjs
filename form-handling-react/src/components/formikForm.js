// form-handling-react/src/components/formikForm.js
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        alert("Form submitted: " + JSON.stringify(values, null, 2));
        resetForm();
      }}
    >
      {() => (
        <Form>
          <div>
            <label>Username:</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="span" style={{ color: "red" }} />
          </div>

          <div>
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" style={{ color: "red" }} />
          </div>

          <div>
            <label>Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="span" style={{ color: "red" }} />
          </div>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}
