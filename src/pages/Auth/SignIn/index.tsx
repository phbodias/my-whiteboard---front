import { useNavigate } from "react-router-dom";
import { Content } from "../style";
import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";

const SignInPage = () => {
  const navigate = useNavigate();

  function signIn() {
    navigate("/home");
  }

  return (
    <Content>
      <div className="container">
        <div className="auth">
          <p>Faça seu login</p>
          <div className="oauth">
            <AiFillFacebook />
            <AiOutlineGoogle />
          </div>
        </div>
        <form>
          <div className="label-float">
            <input type="email" placeholder=" " required />
            <label>email</label>
          </div>
          <div className="label-float">
            <input type="text" placeholder=" " required />
            <label>password</label>
          </div>
          <button onClick={signIn}>Entrar</button>
        </form>
        <div className="register">
          <p>Primeira vez?</p>
          <p onClick={() => navigate("/home")}>Crie sua conta</p>
        </div>
      </div>
    </Content>
  );
};

export default SignInPage;
