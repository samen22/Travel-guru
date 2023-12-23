import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Calender from "./Calender";



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
        <div className="flex justify-center items-center gap-48">
            {
                card ? (
                    <div className="w-1/2">
                        <div className="">
                            <Link to={`/details/${id}`}>
                                <h1 className='text-white mt-36 mb-3 font-bebasneue text-7xl'>{card.name}</h1>
                                <p className="text-white">{card.description}</p>
                            </Link>
                        </div>
                    </div>
                ) :
                    <p className="text-white">Card is not available</p>
            }

            {/* calender here */}

            <div className="w-[470px] h-[427px] bg-white mt-28 p-6">
                <h2 className="text-[#818181] font-medium mb-2">Origin</h2>
                <input className="w-[417px] h-12 rounded-md bg-[#F2F2F2] mb-3" type="text" name="" id="" />
                <h2 className="text-[#818181] font-medium mb-2">Destination</h2>
                <input className='w-[417px] h-12 rounded-md bg-[#F2F2F2] mb-2' type="text" />
                <div className="mb-5">
                    <Calender></Calender>
                </div>
                <button className="bg-[#F9A51A] p-5 w-full rounded-md mt-5 text-black font-medium">Start Booking</button>
            </div>
        </div>
    );
};

export default CardDetails;