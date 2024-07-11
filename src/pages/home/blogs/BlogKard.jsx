import { Link } from 'react-router-dom';
import './blog.css'
// import './App.css'

const BlogKard = ({ blog }) => {
    const { _id, title, img, sort_description, category } = blog
    return (
        <div>
            <div className="card card-compact w-96 h-[550px] bg-base-100 shadow-xl ">
                <figure><img className='zoom' src={img} alt="images" /></figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title hover:text-orange-500">{title}</h2>
                    <h3 className='text-orange-500 font-semibold text-xl'>{category}</h3>
                    <h3 className='text-slate-500 text-lg'>{sort_description}</h3>
                    <div className="card-actions justify-between">
                        <button className="btn btn-outline ">Wishlist </button>
                        <Link to={`/details/${_id}`}>
                            <button className="btn hover:bg-[#ca630a] bg-[#E67E22] hover:border-0 border-0 text-white ">Details </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogKard;