import women_cat from '../../../../assets/cat-mujeres.jpeg'
import men_cat from '../../../../assets/cat-men.webp'
import furniture_cat from '../../../../assets/cat-furniture.jpeg'
import school_cat from '../../../../assets/cat-school.jpeg'
// import kids_cat from '../../../../assets/cat-kids';


export interface CategoriesData{
    id: number;
    categoryName: string;
    image: string
    description: string;
}

export const categoriesData: CategoriesData[] = [
    {
        id:0,
        categoryName: 'Category 1',
        image: women_cat,
        description: 'Blusas, pantalones, vestidos y mas para las mujeres de la casa...'
    },
    {
        id:1,
        categoryName: 'Category 2',
        image: furniture_cat,
        description: "Tables, lamps, shelfs, chairs and much more furnitures..."
    },
    {
        id:2,
        categoryName: 'Category 3',
        image: men_cat,
        description: 'Camisas, pantalones, chaquetas y mas para los caballeros...'
    },
    {
        id:3,
        categoryName: 'Category 4',
        image: school_cat,
        description: "Everything you'll need for school this year..."
    },
    {
        id:4,
        categoryName: 'Category 5',
        image: women_cat,
        description: "Ropa, juguetes y mucho mas para los favoritos de la casa..."
    },
    {
        id:5,
        categoryName: 'Category 6',
        image: men_cat,
        description: "Lo ultimo en tecnologia de punta que necesitas..."
    }
]