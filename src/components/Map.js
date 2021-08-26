import React from 'react'
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';


const Map = ({ origin, destination }) => {
    
    return (
        <div className="w-full h-full">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_APIKEY}}
                defaultZoom={16}
                zoom={16}
                center={{
                    lat: origin.latitude,
                    lng: origin.longitude
                }}
            >
                <MapMarker
                    lat= {origin.latitude}
                    lng= {origin.longitude}
                    
          />
          {destination && (
              <MapMarker type="end"
                        lat= {destination.latitude}
                        lng= {destination.longitude}
                        
              />

          )}
            </GoogleMapReact>
        </div>
    )
}

export default Map
