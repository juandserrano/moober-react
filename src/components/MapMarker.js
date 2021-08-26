import React from 'react'

const MapMarker = ({ type }) => {
    return (
        <div>
            { type == "end" ?
                <div className="text-4xl ml-1 -mt-9">
                    🏁
                </div>
            : (
                <div className="text-4xl ml-1 -mt-9">
                    🚩
                </div>

            )}

        </div>
        
        
    )
}

export default MapMarker
