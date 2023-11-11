import React from 'react'
import RingLoader from "react-spinners/RingLoader";
import { useState } from 'react';


function Loader() {
    let [loading, setLoading] = useState(true);

  return (
    <div style={{'margin-top': '10rem'}}>
      <RingLoader
        color='#eb5058'
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader
