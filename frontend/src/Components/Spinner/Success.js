import React from 'react'

function Success({message}) {
  return (
    <div className="w-100 rounded-0 alert alert-success alert-dismissible fade show" role="alert">
  <strong>Success!</strong> {message}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Success