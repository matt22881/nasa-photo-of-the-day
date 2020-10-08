import React, { useState, useEffect } from "react"
import axios from "axios"
import cons from "./constants/cons"
// import Card from "./explCard"
import "./App.css"

function App() {
  let today = new Date()

  const [data, setData] = useState({})

  useEffect((apoDay) => {
    axios
      .get(
        `${cons.BASE_URL}?api_key=${
          cons.API_KEY
        }&date=${today.toISOString().slice(0, 10)}`
      )
      .then((res) => {
        console.log(res.data)
        setData(res.data)
        return data
      })
      .catch((err) => {
        console.log(err)
      })
    return () => {}
  }, [])

  return (
    <div className="App">
      <div className="headline">
        <div className="App-header">
          <h2>{data.title}</h2>
        </div>
        <h3>APOD for {today.toDateString()}</h3>
        <p>
          ©{data.copyright} Date: {data.date}
        </p>
      </div>
      <div className="image-container">
        <img src={data.url} alt="Astronomy Photograph Of the Day" />
        <div className="expl">{<p>{data.explanation}</p>}</div>
      </div>
    </div>
  )
}

export default App
