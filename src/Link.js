const Link = (props) => {
  return (
    <a href={props.link} target="_blank">
      {props.name}
    </a>
  );
};

export default Link;
