import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Content } from "../style";
import { signIn } from "../../../services/signin";

const SignInPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn({
        email: data.email,
        password: data.password,
      });
      toast.success("Login realizado com sucesso!");
      navigate("/home");
    } catch (error: any) {
      toast.error(`Não foi possível logar: \n${error.response.data}`);
      setLoading(false);
    }
  }

  return (
    <Content>
      <ToastContainer />
      <div className="container">
        <div className="auth">
          <p>Faça seu login</p>
        </div>
        <form onSubmit={submit}>
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
            {data.password.length > 0 &&
              !loading &&
              (showPass ? (
                <AiOutlineEyeInvisible
                  onClick={() => setShowPass(!showPass)}
                  className="password"
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setShowPass(!showPass)}
                  className="password"
                />
              ))}
          </div>
          <button type="submit">
            {loading ? (
              <ThreeDots
                color="#FFF"
                height={30}
                width={"100%"}
                radius="10px"
              />
            ) : (
              <p>Entrar</p>
            )}
          </button>
        </form>
        <div className="redirect">
          <p>Primeira vez?</p>
          <p onClick={() => navigate("/signup")}>Crie sua conta</p>
        </div>
      </div>
    </Content>
  );
};

export default SignInPage;
