import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => { 
    const movies=useSelector((store)=>store.movie?.nowPlayingMovies);   
    if(!movies)return ;
   
    const {id,original_title,overview}=movies[16];
    

  return (
    <div >
        <VideoBackground id={id}/>
        <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer