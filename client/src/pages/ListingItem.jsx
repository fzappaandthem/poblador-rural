import React from 'react'
import { Link } from 'react-router-dom'
import { FcCollaboration } from "react-icons/fc";

export default function ListingItem({listing}) {
  return (
    <div className='bg-white shadow-md 
    hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px] md:w-[660px]'>
        <Link to={`/update-poblador/${listing._id}`}>
            <FcCollaboration className='mt-2 ml-2 h-4 w-4 text-green-700'/>
            <div className="p-3 flex flex-col gap-2 w-full">
                <p className='text-lg font-semibold w-full sm:w-[330px] text-slate-700'>{listing.recipient}</p>
                <div className="flex items-center gap-1">
                    <p className='text-sm text-gray-600 w-full'>{listing.cantRepeticiones}</p>
                </div>
                <p className='text-md text-gray-600 '>{listing.message}</p>
                <div className="text-slate-700 flex gap-4">
                    <div className="font-bold text-xs">
                        {/*listing.bedrooms} {listing.bedrooms > 1 ? 'habitaciones' : 'habitación'*/}
                    </div>
                    <div className="font-bold text-xs">
                        {/*listing.bathrooms} {listing.bathrooms > 1 ? 'baños' : 'baño'*/}
                    </div>
                </div>
            </div>
        </Link>
        <br></br>
    </div>
  )
}
