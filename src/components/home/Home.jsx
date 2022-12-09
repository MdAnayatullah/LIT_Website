import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Recent from "./recent/Recent"
import Team from "./team/Team"

const Home = () => {
  return (
    <>
      <Featured />
      <Recent />
      <Awards />
      <Team />
      
    </>
  )
}

export default Home
