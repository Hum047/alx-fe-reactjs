// src/components/formikForm.js
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().required("Username is required").min(3, "Min 3 characters"),
  email: Yup.string().required("Email is required").email("Invalid email address"),
  password: Yup.string().required("Password is required").min(6, "Min 6 characters"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
        setStatus(undefined);
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          });
          if (!res.ok) throw new Error("Request failed");
          const data = await res.json();
          setStatus({ type: "success", message: `Registered! Mock id: ${data.id}` });
          resetForm();
        } catch (err) {
          setStatus({ type: "error", message: err.message || "Something went wrong" });
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status }) => (
        <Form style={styles.form}>
          <div style={styles.field}>
            <label htmlFor="username">Username</label>
            <Field id="username" name="username" placeholder="johndoe" />
            <ErrorMessage name="username" component="span" style={styles.error} />
          </div>

          <div style={styles.field}>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" placeholder="john@example.com" />
            <ErrorMessage name="email" component="span" style={styles.error} />
          </div>

          <div style={styles.field}>
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" placeholder="••••••••" />
            <ErrorMessage name="password" component="span" style={styles.error} />
          </div>

          <button type="submit" disabled={isSubmitting} style={styles.button}>
            {isSubmitting ? "Submitting..." : "Register"}
          </button>

          {status?.message && (
            <p style={status.type === "success" ? styles.success : styles.errorBlock}>
              {status.message}
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
}

const styles = {
  form: { maxWidth: 420, display: "grid", gap: 12, padding: 16, border: "1px solid #eee", borderRadius: 12 },
  field: { display: "grid", gap: 6 },
  error: { color: "#c62828", fontSize: 12 },
  errorBlock: { color: "#c62828", background: "#ffebee", padding: 8, borderRadius: 8 },
  success: { color: "#1b5e20", background: "#e8f5e9", padding: 8, borderRadius: 8 },
  button: { padding: "10px 14px", borderRadius: 10, border: "1px solid #ddd", cursor: "pointer" },
};
