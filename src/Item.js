import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const Item = (props) => {
  return (
    <article>
      <ItemTitle title={props.title} />
      <ItemSubtitle subtitle={props.subtitle} />
      <ItemPicture url={props.url} alt={props.alt} />
      <ItemDescription description={props.description} />
    </article>
  );
};

export default Item;
