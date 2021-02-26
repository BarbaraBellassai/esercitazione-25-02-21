import "../assets/footer.css";

function Footer(props) {
    return(
        <footer>
            <span>{props.year}</span>
            <span>©</span>
            <span>{props.company}</span>
        </footer>
    )
}
export default Footer;