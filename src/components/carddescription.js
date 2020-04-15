import React, { useState, useRef, useEffect } from "react"

const SCRYFALL_SEARCH = 'https://scryfall.com/search?q='
const CARDRE = /\[\[([^\]]+)\]\]/g;

const CardLink = (cardName) => {

  const fullURL = SCRYFALL_SEARCH + cardName.name
  return(<a href={fullURL} target="_blank">{cardName.name}</a>)
}


const CardDescription = (data) => {
  const [description, setDescription] = useState(data.description)

  useEffect(() => {},
  [])



  return (<>{description}</>)
}

export default CardDescription