import ItemDescription from "./ItemDescription";
import ItemPicture from "./ItemPicture";
import ItemTitle from "./ItemTitle";
import aboutMePicture from "./assets/aboutme.jpg";

const AboutMe = (props) => {
  return (
    <div className="about">
      <ItemTitle title="About Me" />
      <ItemPicture url={aboutMePicture} alt="Picture of me" />
      <ItemDescription description="Passionate about learning new things, video games and books." />
    </div>
  );
};

export default AboutMe;
