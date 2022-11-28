import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {

  const navigte = useNavigate();
  return(
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer  "
    onClick={() => navigte(`/artists/${track?.artists[0]?.adamid}`)}
    >
        <img 
        src={track?.images?.coverart}
        className="w-full h-56 rounded-lg" 
        alt="artist"
         />
         <p className="text-white text-lg font-semibold truncate mt-2">{track?.subtitle}</p>
    </div>
  )
};

export default ArtistCard;
