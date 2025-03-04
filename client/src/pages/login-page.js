import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../lib/authentication";

const LoginPage = ({ setLoggedUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = await login(email, password);

    console.log(user);

    if (user) {
      setError(false);
      setLoggedUser(user);
      navigate("/");
    } else {
      setError(true);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="label">Имэйл</div>
          <div className="control">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              type="email"
              required
              placeholder="email"
              value={email}
            />
          </div>
        </div>

        <div className="field">
          <div className="label">Нууц үг</div>
          <div className="control">
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              type="password"
              required
              placeholder="password"
              value={password}
            />
          </div>
        </div>

        {error && (
          <div className="message is-danger">
            <div className="message-body">Логин амжилтгүй боллоо</div>
          </div>
        )}

        <div className="field">
          <div className="control">
            <button type="submit" className="button is-link">
              Нэвтрэх
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
