import react, { useState } from "react";
import moment from "moment";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
const CalendarComp = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [isCalendarVisible, setCalendarVisibility] = useState(false);
    const [selectedDateRange, setSelectedDateRange] = useState("");
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const handleDateChange = (dates) => {
        if (dates[0] && dates[1]) {
          setStartDate(dates[0]);
          setEndDate(dates[1]);
    
          const formattedStartDate = moment(dates[0]).format("D MMMM YYYY");
          const formattedEndDate = moment(dates[1]).format("D MMMM YYYY");
    
          setSelectedDateRange(`${formattedStartDate} - ${formattedEndDate}`);
    
          const daysDiff = moment(dates[1]).diff(moment(dates[0]), "days");
    
          if (daysDiff > 7) {
            setShowAlert(true);
            setButtonDisabled(true);
          } else {
            setShowAlert(false);
            setButtonDisabled(false);
          }
        }
      };

      const toggleCalendar = () => {
        setCalendarVisibility(!isCalendarVisible);
      };
    

    return (
        <div>
             <div
                    className={`input-container ${
                      isCalendarVisible ? "with-calendar" : ""
                    }`}
                  >
                    <div className="input-wrapper mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Pilih tanggal mulai dan tanggal akhir sewa"
                        aria-label="Pilih Tanggal"
                        aria-describedby="calendar-icon"
                        onClick={toggleCalendar}
                        value={selectedDateRange}
                        disabled
                      />
                      <div 
                      onClick={toggleCalendar}></div>
                      <div/>
                      
                    </div>
                  </div>
                  <div>
                    {isCalendarVisible && (
                      <Calendar
                        onChange={handleDateChange}
                        selectRange={true}
                      />
                    
                    )}
                  </div>
        </div>
    )
}


export default CalendarComp