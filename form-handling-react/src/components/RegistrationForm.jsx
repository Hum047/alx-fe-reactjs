// src/components/RegistrationForm.jsx
import { useState } from "react";

const initialValues = { username: "", email: "", password: "" };

export default function RegistrationForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "", loading: false });

  const validate = (v) => {
    const e = {};
    if (!v.username.trim()) e.username = "Username is required";
    if (!v.email.trim()) e.email = "Email is required";
    if (!v.password.trim()) e.password = "Password is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eobj = validate(values);
    setErrors(eobj);
    if (Object.keys(eobj).length) return;

    try {
      setStatus({ type: "", message: "", loading: true });
      // Mock API: JSONPlaceholder (always succeeds with 201)
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();

      setStatus({ type: "success", message: `Registered! Mock id: ${data.id}`, loading: false });
      setValues(initialValues);
      setErrors({});
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Something went wrong", loading: false });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.field}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={values.username}
          onChange={handleChange}
          placeholder="johndoe"
        />
        {errors.username && <span style={styles.error}>{errors.username}</span>}
      </div>

      <div style={styles.field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="john@example.com"
          type="email"
        />
        {errors.email && <span style={styles.error}>{errors.email}</span>}
      </div>

      <div style={styles.field}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="••••••••"
          type="password"
        />
        {errors.password && <span style={styles.error}>{errors.password}</span>}
      </div>

      <button type="submit" disabled={status.loading} style={styles.button}>
        {status.loading ? "Submitting..." : "Register"}
      </button>

      {status.message && (
        <p style={status.type === "success" ? styles.success : styles.errorBlock}>
          {status.message}
        </p>
      )}
    </form>
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
