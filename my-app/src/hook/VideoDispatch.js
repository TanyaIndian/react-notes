import { useContext } from "react";
import VideoContextDispatch from "../context/VideoDispatchContext";


function useVideoDispatch()
{
    const VideoDispatch = useContext(VideoContextDispatch)
    return VideoDispatch
}

export default useVideoDispatch
