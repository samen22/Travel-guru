import { Outlet } from "react-router-dom";
import background from '/public/images/background.png';


const Root = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className="bg-cover bg-center h-screen flex items-center justify-center text-white font-montserrat">
            <div className='absolute inset-0 bg-black opacity-70'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;