import React, { useContext } from "react";
import NavFavorites from "../components/NavFavorites";
import NavOptions from "../components/NavOptions";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { AppContext } from '../App'

const Main = () => {
    const { origin, setOrigin } = useContext(AppContext);
    
      const getCoordinates = async (address) => {
        geocodeByAddress(address)
          .then((results) => getLatLng(results[0]))
          .then(({ lat, lng }) => {
            console.log("Successfully got latitude and longitude", { lat, lng });
            setOrigin({
              address,
              latitude: lat,
              longitude: lng,
            });
          });
      };
    return (
        <div className="bg-white h-full max-w-lg m-auto">
      
        <div className="p-5 border-b pacifico text-3xl">
          Moober
        </div>
        
          <GooglePlacesAutocomplete
            debounce={400}
            minLengthAutocomplete={2}
            apiKey={process.env.REACT_APP_GOOGLE_MAPS_APIKEY}
            selectProps={{
              onChange: (e) => getCoordinates(e.label),
              className:"p-10"
            }}
          />
        <div className="flex justify-center">
          <NavOptions origin={origin}/>
        </div>
        <NavFavorites />
    </div>
    )
}

export default Main
