// src/App.jsx
import RegistrationForm from "./components/RegistrationForm.js";
import FormikForm from "./components/FormikForm.jsx";
import PostsComponent from "./components/PostsComponent.jsx"; // ✅ React Query demo
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Divider() {
  return (
    <hr
      style={{ margin: "24px 0", border: "none", borderTop: "1px solid #eee" }}
    />
  );
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 24, fontFamily: "system-ui, Arial, sans-serif" }}>
        <h1>Form Handling & React Query Demo</h1>

        <section>
          <h2>Step 2: Controlled Components</h2>
          <RegistrationForm />
        </section>

        <Divider />

        <section>
          <h2>Step 3: Formik + Yup</h2>
          <FormikForm />
        </section>

        <Divider />

        <section>
          <h2>Step 4: React Query Example</h2>
          <PostsComponent />
        </section>
      </div>
