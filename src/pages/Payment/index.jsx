import React from "react"
import { useParams } from "react-router-dom";

const Payment = () => {
const param = useParams();
const [carsDetail, setcarsDetail] = useState({});

const handleGetCarById = () => {
    axios
      .get(`https://api-car-rental.binaracademy.org/customer/car/${param.id}`)
      .then((res) => {
        console.log(res.data);
        setcarsDetail(res.data);
      })
      .catch((err) => console.log(err));
  };

    return ( <div>
        <h5>{carsDetail.name}</h5>
    </div>

    )
}

export default Payment