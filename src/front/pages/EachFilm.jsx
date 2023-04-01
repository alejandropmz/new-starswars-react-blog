import React from 'react'
import { useParams } from 'react-router-dom'

export const EachFilm = () => {
  const {id} = useParams()
  return (
    <div>
      <h1>Each Film id:{id}</h1>
    </div>
  )
}
