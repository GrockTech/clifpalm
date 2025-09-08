import { useState } from "react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin =  async (e) => {
    e.preventDefault();
  //   // Here you would call backend API for auth
  //   if (username === process.env.EMAIL && password === process.env.PASSWORD) {
  //   // redirect to another page after login
  //   } else {
  //     alert("Invalid credentials");
  //   }
  // };
  if (
      username === process.env.REACT_APP_ADMIN_USER &&
      password === process.env.REACT_APP_ADMIN_PASS
    ) {
      // Redirect after login
      window.location.href = "/dashboard";
    } else {
      alert("Invalid credentials");
    }
  };

 

  return (
    <div className="container mt-8">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
