import { Icon } from '@material-ui/core'
import React, { useEffect, useContext } from 'react'
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'
import { Link, useParams } from 'react-router-dom'
import Map from '../components/Map'
import { AppContext } from '../App'


const Navigation = () => {
    const { origin, destination, setDestination } = useContext(AppContext);

    useEffect(() => {
        
    }, [])

    const getCoordinates = async (address) => {
        geocodeByAddress(address)
          .then((results) => getLatLng(results[0]))
          .then(({ lat, lng }) => {
            console.log("Successfully got latitude and longitude", { lat, lng });
            setDestination({
              address,
              latitude: lat,
              longitude: lng,
            });
          });
      };
    

    
    return (
        
            <div className="h-screen">
                    <Link className="absolute top-10 left-4 bg-gray-100 z-20 p-3 rounded-full shadow-lg flex"
                    to="/">
                        <Icon>menu</Icon>
                    </Link>
                
                <div className="h-1/2">
                    <Map origin={origin} destination={destination}/>
                </div>
                <div className="h-1/2">
                    <GooglePlacesAutocomplete
                        debounce={400}
                        minLengthAutocomplete={2}
                        apiKey={process.env.REACT_APP_GOOGLE_MAPS_APIKEY}
                        selectProps={{
                        onChange: (e) => getCoordinates(e.label),
                        className:"p-10"
                        }}
                    />
                </div>
            </div>

      


    )
}

export default Navigation
