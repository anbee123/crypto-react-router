import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import (useState)
const Price = () => {

    const apiKey = 'pk_4c80d13459b74d8b979a15d454bd6926'
    // Grabbing the Currency symbol from the URL Params
  const params = useParams()
  const symbol = params.symbol
  // Using the other two variables to create our URL
  const url = `https://cloud.iexapis.com/stable/crypto/${symbol}/price?token=${apiKey}`

  //state to hold the coin data
  const [coin, setCoin] = useState("null")

  //function to fetch coin data
  const getCoin = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setCoin(data)
  }

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getCoin()
  }, [])

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>{symbol}</h1>
        <h2>{coin.price}</h2>
      </div>
    )
  }

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>
  }

  // if coin has data, run the loaded function, otherwise, run loading
  return coin ? loaded() : loading()
}

export default Price