import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import "./style.css";
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import axios from "axios"
import { Link } from "react-router-dom";


const DateFeature = () => {
    const [calendar, setCalendar] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])

const [customerDetail, setCustomerDetail] = useState({});


// useEffect(() => {
//        handleGetCustomer(); 
// })

// const handleGetCustomer = () => {
//   axios
//     .get(`https://api-car-rental.binaracademy.org/customer/order/${param.id}`)
//     .then((res) => {
//       console.log(res.data);
//       setCustomerDetail(res.data);
//     })
//     .catch((err) => console.log(err));
// };

// useEffect(() => {
//   rentDate();
// })

  const rentDate = () => {
    axios.get(`https://api-car-rental.binaracademy.org/customer/order/${test.id}`, {
      startDate: `${format(calendar[0].startDate, "MM/dd/yyyy")}`,
      endDate: `${format(calendar[0].endDate, "MM/dd/yyyy")}`
    }).then((res) => {
      console.log(res.data);
      setCustomerDetail(res.data);
    })
    
    .catch((err) => console.log(err));
  }  




    const [open, setOpen] = useState(false)
    const [showPayment, setShowPayment] = useState(false)
    const setRef = useRef(null)
    const hiddenButton = () => {
      setShowPayment(!showPayment);
        console.log(calendar[0]);
        console.log((calendar[0].startDate).diff(calendar[0].endDate, 'day'));
      


    };
    
    

return (
    <div className='date-calendar'>
     <input
        value={`${format(calendar[0].startDate, "MM/dd/yyyy")} to ${format(calendar[0].endDate, "MM/dd/yyyy")}`}
        readOnly
        className="inputBox"
        onClick={ () => setOpen(open => !open) }
      />
<div ref={setRef}>
        {open && 
        <div>
         <div>
          <DateRange
            onChange={item => setCalendar([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={calendar}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
         </div>
         <div >
          <button className='calendar-btn' onClick={hiddenButton }>Pilih Tanggal</button>
          <div>
          {/* {showPayment && <button className='calendar-btn2'>Pembayaran</button> } */}
          </div>
         </div>
         <div>
          </div> 
       </div>
        }
      </div>
      {/* <button className='calendar-btn' onClick={hiddenButton}>Pilih Tanggal</button> */}
      {/* {showPayment && <button className='calendar-btn2'>Pembayaran</button> } */}
       <div>
  <div>
         <Link to={`/payment/`}>   
           <button disabled={!showPayment} className='calendar-btn2'  onClick={rentDate} > Pembayaran</button>
          </Link>
          </div>
    </div> 
        


    </div>
)

}

export default DateFeature