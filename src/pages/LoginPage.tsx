import { useState, SubmitEvent } from "react"; 
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  // 1. These are the state declarations to keep!
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false); 

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    return <div>Error: AuthContext is missing.</div>;
  }

  const { login, signup, loginWithGoogle } = authContext;

  // 2. Updated with the modern React 19 SubmitEvent typing
  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setError("");

    try {
      if (isSigningUp) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      navigate("/dashboard"); 
    } catch (err: any) {
      setError(err.message || "Authentication failed. Please check your credentials.");
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    try {
      await loginWithGoogle();
      navigate("/dashboard"); 
    } catch (err: any) {
      setError(err.message || "Google Sign-In failed.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h1>{isSigningUp ? "Create an Account" : "Welcome Back"}</h1>
      <p>{isSigningUp ? "Register below to get started." : "Please log in to access your account."}</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        <button type="submit" style={{ width: "100%", padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          {isSigningUp ? "Sign Up" : "Sign In"}
        </button>
      </form>

      <hr style={{ margin: "20px 0" }} />

      <button 
        onClick={handleGoogleSignIn} 
        style={{ width: "100%", padding: "10px", background: "#db4437", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginBottom: "15px" }}
      >
        Sign In with Google
      </button>

      <p style={{ textAlign: "center" }}>
        {isSigningUp ? "Already have an account?" : "Don't have an account yet?"}{" "}
        <button 
          onClick={() => setIsSigningUp(!isSigningUp)} 
          style={{ background: "none", border: "none", color: "#007bff", textDecoration: "underline", cursor: "pointer", padding: 0 }}
        >
          {isSigningUp ? "Sign In here" : "Sign Up here"}
        </button>
      </p>
    </div>
  );
}

export default Login;