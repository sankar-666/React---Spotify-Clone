import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components'
// import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";


const ArtistDetails = () => {

    const { id: artistId } = useParams();


    const { activeSong, isPlaying  } = useSelector((state) => state.player)

    const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery( artistId )
    // console.log(artistData);



    
 

    if (isFetchingArtistDetails) return <Loader title="Seraching Artist details..." />

    if (error) return <Error/>


    return(

    <div className="flex flex-col ">
        <DetailsHeader artistId={artistId} artistData={artistData} />
       
        <RelatedSongs 
        data={Object.values(artistData?.songs)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
  

        />
    </div>
)
}

export default ArtistDetails;

