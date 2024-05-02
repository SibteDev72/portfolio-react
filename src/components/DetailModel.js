import React from 'react'

function DetailModel({ closeModel, name }) {
  return (
    <div>
        <p>{name}</p>
        <button onClick={closeModel}>Close It</button>
    </div>
  )
}

export default DetailModel