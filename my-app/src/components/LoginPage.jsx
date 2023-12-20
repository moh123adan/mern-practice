import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input
          type="text"
          placeholder="Enter your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>password</label>
        <input
          type="text"
          placeholder="Enter your password.."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
