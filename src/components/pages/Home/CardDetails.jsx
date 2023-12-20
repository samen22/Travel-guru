import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const CardDetails = () => {
    const { id } = useParams();
    const [card, setCard] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/public/data/data.json');
                const data = await response.json();
                const selectedData = data.find((detail) => detail._id === id);
                console.log(selectedData);
                setCard(selectedData);
            }
            catch (error) {
                console.log(error);
            }
        };
        fetchData();

    }, [id]);


    return (
        <div>
            {
                card ? (
                    <div className="mx-auto">
                        <div className="w-1/2">
                            <Link to={`/details/${id}`}>
                                <h1 className='text-white mt-36 mb-3 font-bebasneue text-7xl'>{card.name}</h1>
                                <p className="text-white">{card.description}</p>
                            </Link>
                        </div>
                    </div>
                ) :
                    <p className="text-white">Card is not available</p>
            }
        </div>
    );
};

export default CardDetails;