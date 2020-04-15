import React, { useState, useRef, useEffect } from "react"

const SCRYFALL_SEARCH = "https://scryfall.com/search?q="
const CARDRE = /\[\[([^\]]+)\]\]/g

const CardLink = (cardName) => {
  const fullURL = SCRYFALL_SEARCH + cardName.name
  return (
    <a href={fullURL} target="_blank">
      {cardName.name}
    </a>
  )
}

const CardDescription = (data) => {
  const cardsArray = data.description.match(CARDRE)
  let descriptionString = data.description
  let description = data.description
  if (cardsArray) {
    description = cardsArray.map((card) => {
      let cardName = card.replace("[[", "")
      cardName = cardName.replace("]]", "")
      let index = descriptionString.search(CARDRE)
      let preCard = descriptionString.slice(0, index)
      descriptionString = descriptionString.slice(index)
      descriptionString = descriptionString.replace("[[" + cardName + "]]", "")
      return (
        <>
          {preCard}
          <CardLink name={cardName} />
        </>
      )
    })
    description.push(<>{descriptionString}</>)
  }

  return <>{description}</>
}

export default CardDescription
