import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";


const Verify = () => {
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location.state);
    const [email] = useState(location.state)

    useEffect(() => {
   if(!email){
    navigate('/')
   }
    },[email])

    return (
        <div>
            verify
        </div>
    );
};

export default Verify;