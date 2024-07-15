import { useEffect, useState } from "react";
import TravelGuidesCard from "./TravelGuidesCard";

const TravelGuides = () => {


    const [guides, setGuides] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/guides')
            .then(res => res.json())
            .then(data => setGuides(data))
    })

    return (
        <div>
            <div className="mb-10 mt-20">
                <h2 className="text-orange-500  text-center font-semibold text-3xl ">Travel Guides</h2>
                <p className="text-center text-slate-500 mt-2 text-lg">Popular travel blog posts & guides</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-10 justify-center">
                {
                    guides.map(guide => <TravelGuidesCard
                        key={guide._id} guide={guide}></TravelGuidesCard>)
                }
            </div>
        </div>
    );
};

export default TravelGuides;