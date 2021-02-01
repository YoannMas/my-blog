import Link from "./Link";

const navMenu = (props) => {
  return (
    <div className="container">
      <nav>
        <div>
          <Link name="SensCritique" link="https://www.senscritique.com/live" />
          <Link name="MDN" link="https://developer.mozilla.org/fr/" />
          <Link name="Millenium" link="https://fr.millenium.gg/" />
        </div>
        <Link name="Le Reacteur" link="https://www.lereacteur.io/" />
      </nav>
    </div>
  );
};

export default navMenu;
