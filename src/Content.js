import MainContent from "./MainContent";
import SideContent from "./SideContent";

const Content = (props) => {
  return (
    <div className="container">
      <div className="content">
        <MainContent />
        <SideContent />
      </div>
    </div>
  );
};

export default Content;
