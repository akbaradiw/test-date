import React, {useEffect, useState} from 'react';
import DatePicker from "react-datepicker"
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css"
const CalendarFeature = () => {
    const [dateRent, setDateRent] = useState([ null,null])
    const [startRent, endRent] = dateRent
    const [rentDay, setRentDay] = useState("")
    


useEffect(() => {
    let day = 0
    if (startRent && endRent) {
        day = moment(endRent).diff(moment(startRent), "days") + 1;
        setRentDay(day);
      } else {
        setRentDay(0);
      }
    }, [startRent, endRent]);


return (    
    <div>
<DatePicker
  dateFormat="dd MMM yyyy"
  
  selectsRange={true}
  startRent={startRent}
  endRent={endRent}
  onChange={(update) => {
    setDateRent(update);
  }}
  minDate={startRent ? new Date(startRent) : new Date()}
  maxDate={
    startRent
      ? new Date(
          new Date(startRent).setDate(
            new Date(startRent).getDate() + 6
          )
        )
      : null
  }
  isClearable
  placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
/>
<div>
    <button
    onClick={""} disabled={!rentDay}></button>
</div>
</div>
)
}

export default CalendarFeature