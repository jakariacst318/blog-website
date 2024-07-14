import notFound from '../assets/404.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Link ><button className="btn btn-warning mt-10 ms-10"> Go Back</button></Link>
            <img className='w-2/6 mx-auto' src={notFound} alt="404" />
        </div>
    );
};

export default ErrorPage;