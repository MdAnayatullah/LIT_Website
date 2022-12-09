import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='What is LIT ?' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, nesciunt natus quae atque aspernatur mollitia reprehenderit aliquam quaerat est impedit, magni voluptates. Atque, nulla suscipit ratione numquam officia accusantium distinctio?' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
