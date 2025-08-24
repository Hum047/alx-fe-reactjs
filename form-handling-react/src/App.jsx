// src/App.jsx
import RegistrationForm from "./components/RegistrationForm.jsx";
import FormikForm from "./components/FormikForm.jsx"; // ✅ Fix case

function Divider() {
  return <hr style={{ margin: "24px 0", border: "none", borderTop: "1px solid #eee" }} />;
}

function App() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui, Arial, sans-serif" }}>
      <h1>Form Handling in React</h1>

      <section>
        <h2>Step 2: Controlled Components</h2>
        <RegistrationForm />
      </section>

      <Divider />

      <section>
        <h2>Step 3: Formik + Yup</h2>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;
