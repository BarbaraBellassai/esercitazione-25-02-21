
function Product(props) {
    const {image, title} = props
    return(
        <div className= "CardWrap">
            <img src={image} alt= "product" />
            <h3>{title}</h3>
        </div>
    )
}
export default Product