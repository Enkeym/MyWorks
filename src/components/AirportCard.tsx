import React from 'react'
import { IAirport } from '../modules/Modules'

interface AirportCardProps {
  airport: IAirport
}

const AirportCard = ({ airport }: AirportCardProps) => {
  return (
    <div>
      {airport.name}
    </div>
  )
}

export default AirportCard