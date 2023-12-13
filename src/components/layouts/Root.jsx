import { Outlet } from 'react-router-dom';
import background from '/public/images/background.png';
import Header from '../shared/Header/Header';


const Root = () => {
    return (
        <div className="font-montserrat">
            <div className="relative h-screen">
                <div style={{ backgroundImage: `url(${background})` }} className="bg-cover bg-center h-full font-montserrat">
                </div>
                <div className='absolute inset-0 bg-black bg-opacity-70'>
                    <div className='max-w-6xl mx-auto mt-2'>
                        <Header></Header>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Root;