import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"
export default function Recipes(){
    const recipes = [
        {
            title: "South Indian Idli",
            image: "/img/Gallery/image1.jpg",
            authorImg: "/img/top-chief/image1.jpg",
        },
        {
            title: "Maharashtrian Thali",
            image: "/img/Gallery/image2.jpg",
            authorImg: "/img/top-chief/image2.jpg",
        },
        {
            title: "Chiken Biryani",
            image: "/img/Gallery/image3.jpg",
            authorImg: "/img/top-chief/image3.jpg",
        },
        {
            title: "Vada Pavou",
            image: "/img/Gallery/image4.jpg",
            authorImg: "/img/top-chief/image4.jpg",
        },
        {
            title: "Mexican Tacos",
            image: "/img/Gallery/image5.jpg",
            authorImg: "/img/top-chief/image5.jpg",
        },
        {
            title: "Chiken Pan Pizza",
            image: "/img/Gallery/image6.jpg",
            authorImg: "/img/top-chief/image6.jpg",
        },
        {
            title: "Garlic Indian Cuisine",
            image: "/img/Gallery/image7.jpg",
            authorImg: "/img/top-chief/image3.jpg",
        },
        {
            title: "Bengali Dish",
            image: "/img/Gallery/image8.jpg",
            authorImg: "/img/top-chief/image2.jpg",
        },
        {
            title: "Tandoori Chicken",
            image: "/img/Gallery/image9.jpg",
            authorImg: "/img/top-chief/image8.jpg",
        },
        {
            title: "Punjabi Style Praotta",
            image: "/img/Gallery/image10.jpg",
            authorImg: "/img/top-chief/image4.jpg",
        },
        {
            title: "Dahi Vada",
            image: "/img/Gallery/image11.jpg",
            authorImg: "/img/top-chief/image3.jpg",
        },
        {
            title: "Japanese Sushi",
            image: "/img/Gallery/image12.jpg",
            authorImg: "/img/top-chief/image7.jpg",
        }
    ].sort(() => Math.random() - 0.5)
    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
                
            </div>
        </div>
    )
}
