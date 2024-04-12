import ChiefsCard from "./ChiefsCard"
export default function ChiefsSection(){
    const chiefs =[
        {
            name: "Juan Carlos",
            img: "/img/top-chief/image1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "Kunal Kapur",
            img: "/img/top-chief/image2.jpg",
            recipesCount: "05",
            cuisine: "Indian",
        },
        {
            name: "Sanjeev Kapoor",
            img: "/img/top-chief/image3.jpg",
            recipesCount: "08",
            cuisine: "Indian",
        },
        {
            name: "Erich Maria",
            img: "/img/top-chief/image4.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Pankaj Bhadouria",
            img: "/img/top-chief/image5.jpg",
            recipesCount: "09",
            cuisine: "American",
        },
        {
            name: "Abhilasha Chandak",
            img: "/img/top-chief/image6.jpg",
            recipesCount: "04",
            cuisine: "French",
        },
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefsCard />
                <ChiefsCard />
                <ChiefsCard />
                <ChiefsCard />
                <ChiefsCard />
                <ChiefsCard /> */}
                { chiefs.map( chief => <ChiefsCard key={chief.name} chief={chief} />)}
            </div>
        </div>
    )
}