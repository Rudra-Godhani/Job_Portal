/* eslint-disable no-unused-vars */
import React from 'react'
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <>
      <section style={{ minHeight: '525px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ClipLoader size={100}/>
      </section>
    </>
  )
}

export default Spinner
