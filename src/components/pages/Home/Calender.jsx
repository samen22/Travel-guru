import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CiCalendarDate } from "react-icons/ci";



const Calender = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="flex justify-between mt-3">
            <div className="relative">
                <h2 className="text-[#818181] font-medium mb-3">From</h2>
                <DatePicker
                    className="w-[200px] h-12 rounded-md bg-[#F2F2F2] p-2"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat={'dd/MM'}
                    placeholderText="DD/MM"
                >
                </DatePicker>
                <CiCalendarDate className="absolute left-40 bottom-3 text-3xl "></CiCalendarDate>
            </div>


            <div className="relative">
                <h2 className="text-[#818181] font-medium mb-3">To</h2>
                <DatePicker
                    className="w-[200px] h-12 rounded-md bg-[#F2F2F2] p-2"
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat={'dd/MM'}
                    placeholderText="DD/MM"
                >
                </DatePicker>
                <CiCalendarDate className="absolute left-40 bottom-3  text-3xl" >
                </CiCalendarDate>
            </div>



        </div>
    );
};

export default Calender;