import { useNavigate } from "react-router-dom";
import { Content } from "../style";
import { ThreeDots } from "react-loader-spinner";
import {
  AiFillFacebook,
  AiOutlineGoogle,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import React, { useState } from "react";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    navigate("/");
  }

  return (
    <Content>
      <div className="container">
        <div className="auth">
          <p>Faça seu cadastro</p>
          <div className="oauth">
            <AiFillFacebook />
            <AiOutlineGoogle />
          </div>
        </div>
        <form onSubmit={handleRegister}>
          <div className="label-float">
            <input
              type="text"
              name="name"
              minLength={2}
              maxLength={30}
              placeholder=" "
              disabled={loading}
              required
              value={data.name}
              onChange={handleInputChange}
            />
            <label>nome</label>
          </div>
          <div className="label-float">
            <input
              type="email"
              name="email"
              placeholder=" "
              disabled={loading}
              required
              value={data.email}
              onChange={handleInputChange}
            />
            <label>email</label>
          </div>
          <div className="label-float">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              minLength={6}
              maxLength={30}
              placeholder=" "
              className="passwordInput"
              disabled={loading}
              value={data.password}
              onChange={handleInputChange}
              required
            />
            <label>
              <p>senha</p>
            </label>
            {data.password.length > 0 && !loading ? (
              showPass ? (
                <AiOutlineEyeInvisible
                  onClick={() => setShowPass(!showPass)}
                  className="password"
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setShowPass(!showPass)}
                  className="password"
                />
              )
            ) : (
              ""
            )}
          </div>
          <button type="submit">
            {loading ? (
              <ThreeDots color="#FFF" height={30} width={250} radius="10px" />
            ) : (
              <p>Cadastrar</p>
            )}
          </button>
        </form>
        <div className="register">
          <p>Já possui uma conta?</p>
          <p onClick={() => navigate("/")}>Faça login</p>
        </div>
      </div>
    </Content>
  );
};

export default SignUpPage;
