import { useContext } from "react";
import VideoDBContext from "../context/VideDBContext";


function useVideoDB()
{
    const VideoDB = useContext(VideoDBContext)
    return VideoDB
}


export default useVideoDB