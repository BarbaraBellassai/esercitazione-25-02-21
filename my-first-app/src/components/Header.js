//import "../assets/header.css";
import Proptypse from "prop-types"
function Header(props) {
    const {name, logo} = props
   return (
    <header className="header">
        <h2>{name}</h2>
        <img src={logo} alt="header logo"/>
    </header>
   ) 
}
Header.proptypse = {
    name : Proptypse.string.isRequired,
    logo : Proptypse.string.isRequired
}
export default Header;