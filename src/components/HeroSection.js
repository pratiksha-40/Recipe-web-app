import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/img/Gallery/image1.jpg",
        "/img/Gallery/image2.jpg",
        "/img/Gallery/image3.jpg",
        "/img/Gallery/image4.jpg",
        "/img/Gallery/image5.jpg",
        "/img/Gallery/image6.jpg",
        "/img/Gallery/image7.jpg",
        "/img/Gallery/image8.jpg",
        "/img/Gallery/image9.jpg",
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">FlavorFusion is a place where you can please your soul and tummy with delicious food recipes of all cuisine. And our service is absolutely free. So start exploring now.</p>
                <button className="btn">Explore now</button>
            </div>
            <div className="col gallery">
                { images.map((src, index)=> (
                  <CustomImage key={index} imgSrc={src} pt={"85%"} />
                ))}
                
            </div>
        </div>
    )
}