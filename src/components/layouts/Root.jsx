
import Home from '../pages/Home/Home';
import background from '/public/images/background.png';




const Root = () => {
    return (
        <div className="relative h-screen">
            <div style={{ backgroundImage: `url(${background})` }} className="bg-cover bg-center h-full font-montserrat">
            </div>
            <div className='absolute inset-0 bg-black bg-opacity-70'>
                <Home></Home>
            </div>
        </div>
    );
};

export default Root;