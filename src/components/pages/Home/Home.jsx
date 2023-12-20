import { useEffect, useState } from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import  { Autoplay, Navigation } from 'swiper/modules';





const Home = () => {
    const [cards, setCards] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('/public/data/data.json');
                const data = await result.json();
                setCards(data);
            }
            catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);


   
    return (
        <div>
            {Array.isArray(cards) && cards.length > 0 ? (
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <Card card={card} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <p>Card is not available</p>
            )}
        </div>

    );
};


export default Home;
