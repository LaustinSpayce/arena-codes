import React, { useState, useRef, useEffect } from "react"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Overlay from "react-bootstrap/Overlay"
import Popover from "react-bootstrap/Popover"

const SCRYFALL_SEARCH = "https://scryfall.com/search?q="
const SCRYFALL_IMAGE =
  "https://api.scryfall.com/cards/named?format=image&version=medium&exact="
const CARDRE = /\[\[([^\]]+)\]\]/g

const CardLink = (card) => {
  const [cardName, setCardName] = useState(card.name)
  const [setName, setSetName] = useState("")
  const target = useRef(null)

  useEffect(() => {
    if (cardName.includes("|")) {
      let substrings = cardName.split("|")
      setCardName(substrings[0])
      setSetName("&set=" + substrings[1])
    }
  }, [cardName])

  const fullURL = SCRYFALL_SEARCH + cardName + setName
  const imageURL = SCRYFALL_IMAGE + cardName + setName

  const popover = (
    <Popover id="popover-basic" style={{ maxWidth: "100%" }}>
      <Popover.Title>{cardName}</Popover.Title>
      <Popover.Content>
        <img
          src={imageURL}
          style={{ width: "244px", height: "340px" }}
          alt={cardName}
        />
      </Popover.Content>
    </Popover>
  )

  return (
    <>
      <OverlayTrigger key={cardName} placement="top" overlay={popover}>
        <a href={fullURL}>{cardName}</a>
      </OverlayTrigger>
    </>
  )
}

const CardDescription = (data) => {
  const cardsArray = data.description.match(CARDRE)
  let descriptionString = data.description
  let description = data.description
  if (cardsArray) {
    description = cardsArray.map((card, ix) => {
      let cardName = card.replace("[[", "")
      cardName = cardName.replace("]]", "")
      let index = descriptionString.search(CARDRE)
      let preCard = descriptionString.slice(0, index)
      descriptionString = descriptionString.slice(index)
      descriptionString = descriptionString.replace("[[" + cardName + "]]", "")
      let cardLinkKey = card + ix
      return (
        <>
          {preCard}
          <CardLink name={cardName} key={cardLinkKey} />
        </>
      )
    })
    description.push(<>{descriptionString}</>)
  }

  return <>{description}</>
}

export default CardDescription
