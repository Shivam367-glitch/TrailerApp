import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/Constants"
const Card = ({img,directTo}) => {  
   console.log(directTo);
   
  const navigate=useNavigate();
  const showDetails=()=>{
    navigate(directTo);
  } 

  if(img===null)return null;
  return (
      <img src={IMG_CDN_URL+img} alt="" className="img-fluid rounded" style={{height:"220px"}}
      onClick={showDetails}
      />
  )
}

export default Card

