import { useParams } from "react-router-dom"

const Category = () => {
    const { categoryName } = useParams();
  return (
    <div>Category</div>
  )
}
export default Category