
import Banner from "../../banner/Banner";
import TravelGuides from "../../travelGuides/TravelGuides";
import Blogs from "../blogs/Blogs";
import NewsLetter from "../newsLetter/NewsLetter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Blogs></Blogs>
            <TravelGuides></TravelGuides>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;