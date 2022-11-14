import { AiFillHome } from "react-icons/ai";
import PageTitle from "../../styles/PageTitles/style";
import Content from "./style";

const HomePage = () => {
  return (
    <Content>
      <PageTitle>
        <div className="title">
          <AiFillHome className="icons" />
          <p>Home</p>
        </div>
      </PageTitle>
    </Content>
  );
};

export default HomePage;
