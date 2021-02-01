import Title from "./Title";
import Baseline from "./Baseline";

const Header = (props) => {
  return (
    <div className="container">
      <div className="header">
        <Title name="Web Site Blog" />
        <Baseline text="News about web site and discovering some of my favorites" />
      </div>
    </div>
  );
};

export default Header;
