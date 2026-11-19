import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShowCard from '../../components/ShowCard'

export default function ShowPage() {
  const [show, setShow] = useState({ image: {}, rating: {} })
  const { id } = useParams()

  useEffect(() => {
    async function displayShow() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const rawData = await response.json();
      setShow(rawData);
    }
    displayShow();
  }, []);
  return (
    <ShowCard show={show} />
  )
}
