
function Product(props) {
    const {image, title} = props
    return(
        <div>
            <img src={image} alt= "product" />
            <h3>{title}</h3>
        </div>
    )
}
export default Product