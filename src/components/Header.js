import MestoLogo from "../images/MestoLogo.svg";

function Header(){
  return(
    <header className="header">
        <img
          className="header__logo"
          src={MestoLogo}
          alt="Логотип проекта Mesto"
        />
      </header>
  );
}

export default Header;