import { useEffect } from "react"
import AirportCard from "../components/AirportCard"
import AirportFilter from "../components/AirportFilter"
import AirportSearch from "../components/AirportSearch"
import { useAppDispatch, useAppSelector } from "../hoock/redux"
import { fetchAirports } from "../store/actions/airportActions"

const Main = () => {

  const dispatch = useAppDispatch()
  const { error, loading, airports } = useAppSelector(state => state.airport)

  useEffect(() => {
    dispatch(fetchAirports())
  })

  return (
    <div className="container mx-auto max-w-[760px] pt-5">
      <AirportSearch />
      <AirportFilter />
      {
        airports.map(airport => <AirportCard key={airport.id} airport={airport} />)
      }
    </div>
  )
}

export default Main