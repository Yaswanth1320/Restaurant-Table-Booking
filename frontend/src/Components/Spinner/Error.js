import React from 'react'

function Error({message}) {
  return (
    <div className="rounded-0 w-100 alert alert-danger alert-dismissible fade show" role="alert">
  <strong>Oops!</strong> {message}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Error