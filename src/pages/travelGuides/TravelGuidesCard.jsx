import { Link } from "react-router-dom";

const TravelGuidesCard = ({ guide }) => {
    const {_id, title, img, } = guide
    return (

            <Link to={`/guidesDetails/${_id}`}>
                <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
                    <figure><img src={img} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">{title}</h2>

                    </div>
                </div>
            </Link>
    );
};

export default TravelGuidesCard;