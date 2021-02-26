//import "../assets/footer.css";
import Proptypse from "prop-types"

function Footer(props) {
    const {year, company} = props;
    return(
        <footer>
            <span>{year}</span>
            <span>©</span>
            <span>{company}</span>
        </footer>
    )
}
Footer.Proptypse ={
    company: Proptypse.string.isRequired
}
export default Footer;