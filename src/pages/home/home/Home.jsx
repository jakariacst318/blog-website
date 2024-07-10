import Banner from "../../banner/Banner";
import Blogs from "../blogs/Blogs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Blogs></Blogs>
            <h2  className=" text-3xl ">this is home page</h2>
            
        </div>
    );
};

export default Home;