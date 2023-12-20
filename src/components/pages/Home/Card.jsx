import PropTypes from 'prop-types';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { id, name, description, photo_url } = card;

    return (
        <div className={`mx-auto`}>
            <div className='h-full flex justify-center items-center gap-11 mt-36'>
                <div className='w-[50%]' >
                    <h1 className='text-white font-bebasneue text-7xl'>{name}</h1>
                    <p className='text-white mt-2'>{description}</p>
                    <Link to={`/details/${id}`}>
                        <button className='bg-[#F9A51A] inline-flex items-center mt-6 px-7 py-3 text-[#000000] font-medium rounded'>Booking <FaArrowRight className='ml-2 w-5 h-5' /></button>
                    </Link>
                </div>
                <div className=''>
                    <img className='w-[270px] h-[416px] object-cover' src={photo_url} alt="" />
                </div>
            </div>
        </div>
    );
};


Card.propTypes = {
    card: PropTypes.object
}

export default Card;