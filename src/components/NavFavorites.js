import { Icon } from '@material-ui/core'
import React from 'react'

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "100 Hinchey Avenue, Ottawa, ON"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "Kanata, ON"
    }
]

const NavFavorites = () => {
    return (
        <div className="p-5 space-y-4">
            {data.map((item) => (
                <div className="bg-gray-200 rounded-md" key={item.id}>
                    <div className="flex items-center p-5">
                        <div className="rounded-full bg-gray-300 p-3 flex items-center"><Icon>star</Icon></div>
                        <div className="ml-4">
                            <div className="font-bold text-lg">{item.location}</div>
                            <div className="text-gray-500">{item.destination}</div>
                        </div>
                    </div>
                </div>
            ))}           
        </div>
    )
}

export default NavFavorites
