import { useParams } from "react-router-dom";


const Product = () => {
  const { productId, productName } = useParams();

    return (
    <div>Product</div>
  )


}
export default Product