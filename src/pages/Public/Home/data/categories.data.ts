import women_cat from "../../../../assets/cat-mujeres.webp";
import men_cat from "../../../../assets/cat-men.webp";
import furniture_cat from "../../../../assets/cat-furniture.webp";
import school_cat from "../../../../assets/cat-school.webp";
import kids_cat from "../../../../assets/cat-kids.webp";
import electronic_cat from "../../../../assets/cat_electronics.webp";

export interface ICategoriesData {
  id: number;
  categoryName: string;
  image: string;
  description: string;
}

export const categoriesData: ICategoriesData[] = [
  {
    id: 0,
    categoryName: "Women",
    image: women_cat,
    description: "Blouses, pants, dresses and more...",
  },
  {
    id: 1,
    categoryName: "Furnitures",
    image: furniture_cat,
    description: "Tables, lamps, shelfs, chairs and much more furnitures...",
  },
  {
    id: 2,
    categoryName: "Men",
    image: men_cat,
    description: "Shirts, pants, jackets and more...",
  },
  {
    id: 3,
    categoryName: "School",
    image: school_cat,
    description: "Everything you'll need for school this year...",
  },
  {
    id: 4,
    categoryName: "Kids",
    image: kids_cat,
    description:
      "Clothes, toys and much more for the favorites of the house...",
  },
  {
    id: 5,
    categoryName: "Electronics",
    image: electronic_cat,
    description:
      "The best in technology, find everything in headphones, computers and more...",
  },
];
