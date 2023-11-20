import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";
import { useState } from 'react';


function Loader() {
    let [loading, setLoading] = useState(true);

  return (
    <div style={{"height":"70vh","padding-top":"10rem"}}>
      <ScaleLoader
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
