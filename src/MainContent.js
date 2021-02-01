import Item from "./Item";
import SCPiture from "./assets/senscritique-2.jpg";
import FBPicture from "./assets/facebook.png";

const MainContent = (props) => {
  return (
    <div>
      <Item
        title="Discovering SensCritique"
        subtitle="Discover how SensCritique is usefull when you love movies, music, books, ..."
        url={SCPiture}
        alt="SensCritique's logo"
        description="SensCritique is a free service that allows you to share opinions on films, series, books, comics, video games and music. Since 2011, SensCritique has collected more than 100M opinions to leverage the power of cultural word of mouth."
      />
      <Item
        title="Why is Facebook dying?"
        subtitle="We will see why and how Facebook dies few years now"
        url={FBPicture}
        alt="Facebook's logo"
        description="
        You might think the horrendous data breaches, the court cases in the USA (as well as other parts of the World) and scandalous disinformation would be the top three reasons for the goliath social media platforms downfall. But it’s far simpler than that. Facebook is such a large part of people’s lives it will actually take far more than that to kill off a brand completely. So, what is it…? The main reason is simply the Facebook generation are using it less. Facebook to a 15-year-old is almost uncool. Unless it’s your local bike or gymnastics club then why would the youth of today use it when their parents use it? It is naturally dying a death."
      />
    </div>
  );
};

export default MainContent;
