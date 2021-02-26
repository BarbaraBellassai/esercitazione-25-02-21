import "../assets/header.css";
function Header(props) {
   return (
    <header className="header">
        <h2>{props.name}</h2>
        <img src={props.logo} alt="header logo"/>
    </header>
   ) 
}

export default Header;