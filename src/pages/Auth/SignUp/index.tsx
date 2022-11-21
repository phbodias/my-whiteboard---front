import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Content } from "../style";
import { signUp } from "../../../services/signup";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    if (data.password !== data.confirmPassword) {
      toast.warning("As senhas devem ser iguais!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setData({ ...data, confirmPassword: "" });
      setLoading(false);
    } else {
      try {
        await signUp({
          name: data.name,
          email: data.email,
          password: data.password,
        });
        toast.success("Inscrito com sucesso! Por favor, faça login.");
        navigate("/sign-in");
      } catch (error: any) {
        toast.error(`Não foi possível cadastrar: \n${error.response.data}`);
        setLoading(false);
      }
    }
  }

  return (
    <Content>
      <ToastContainer />
      <div className="container">
        <div className="auth">
          <p>Faça seu cadastro</p>
        </div>
        <form onSubmit={submit}>
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
          <div className="label-float">
            <input
              type={showConfirmPass ? "text" : "password"}
              name="confirmPassword"
              minLength={6}
              maxLength={30}
              placeholder=" "
              className="passwordInput"
              disabled={loading}
              value={data.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <label>
              <p>confirme a senha</p>
            </label>
            {data.confirmPassword.length > 0 &&
              !loading &&
              (showConfirmPass ? (
                <AiOutlineEyeInvisible
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="password"
                />
              ) : (
                <AiOutlineEye
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  className="password"
                />
              ))}
          </div>
          <button type="submit" disabled={loading}>
            {loading ? (
              <ThreeDots
                color="#FFF"
                height={30}
                width={"100%"}
                radius="10px"
              />
            ) : (
              <p>Cadastrar</p>
            )}
          </button>
        </form>
        <div className="redirect">
          <p>Já possui uma conta?</p>
          <p onClick={() => navigate("/")}>Faça login</p>
        </div>
      </div>
    </Content>
  );
};

export default SignUpPage;
