import { FeaturedProducts, HeroSection } from "./components"
import CategoriesSection from "./components/CategoriesSection"

export const Home = () => {
  return (
    <>
      <HeroSection />
      <CategoriesSection/>
      <FeaturedProducts/>
    </>
  )
}
export default Home