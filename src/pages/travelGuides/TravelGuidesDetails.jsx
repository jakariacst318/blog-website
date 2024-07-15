// import { useLoaderData } from "react-router-dom";

import { useLoaderData } from "react-router-dom";



const TravelGuidesDetails = () => {
    const detail = useLoaderData();
    const { title, img, location, description, } = detail
    return (
        <div>
            <h2 className="text-4xl " >guides</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className=" text-xl font-semibold"> Location: <span className="text-slate-600 hover:text-[#080808]">{location}</span></p>
                        <p className="text-xl font-semibold"> Description: <span className="text-slate-600 hover:text-[#080808]">{description}</span></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TravelGuidesDetails;