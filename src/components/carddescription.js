import React, { useState, useEffect } from "react"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Popover from "react-bootstrap/Popover"

const SCRYFALL_SEARCH = "https://www.scryfall.com/search?q="
const SCRYFALL_GET_BY_SET = "https://api.scryfall.com/cards/"
const SCRYFALL_LINK_DIRECT = "https://scryfall.com/card/"
const SCRYFALL_IMAGE =
  "https://api.scryfall.com/cards/named?format=image&version=medium&exact="
const CARDRE = /\[\[([^\]]+)\]\]/

const CardLink = (card) => {
  const [cardName, setCardName] = useState(card.name)
  const [setName, setSetName] = useState("")
  const [cardNo, setCardNo] = useState("")
  const placement = card.placement ? card.placement : 'top'
  useEffect(() => {
    if (cardName.includes("|")) {
      let substrings = cardName.split("|")
      setCardName(substrings[0])
      setSetName(substrings[1].toLowerCase())
      console.log(substrings.length)
      if (substrings.length >= 3) {
        setSetName(substrings[1].toLowerCase())
        setCardNo(substrings[2])
      }
    }
  }, [cardName])

  const fullURL = cardNo ? 
                    `${SCRYFALL_LINK_DIRECT}${setName}/${cardNo}` :
                    `${SCRYFALL_SEARCH}${cardName}` 

  const imageURL = cardNo ? 
                    `${SCRYFALL_GET_BY_SET}${setName}/${cardNo}/?format=image` : 
                    setName ?
                      `${SCRYFALL_IMAGE}${cardName}${setName}` :
                      `${SCRYFALL_IMAGE}${cardName}`

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
      <OverlayTrigger key={cardName} placement={placement} overlay={popover}>
        <a href={fullURL}>{cardName}</a>
      </OverlayTrigger>
    </>
  )
}

const CardDescription = (data) => {
  let cardsArray = data.description.match(CARDRE)
  let descriptionString = data.description
  let description = data.description
  if (cardsArray) {
    // Remove the first element of the array as it contains all the matches.
    cardsArray.shift()
    description = cardsArray.map((card, ix) => {
      let index = descriptionString.search(CARDRE)
      let preCard = descriptionString.slice(0, index)
      descriptionString = descriptionString.slice(index)
      descriptionString = descriptionString.replace("[[" + card + "]]", "")
      let cardLinkKey = card + ix
      return (
        <>
          {preCard}
          <CardLink name={card} key={cardLinkKey} placement={data.placement}/>
        </>
      )
    })
    description.push(<>{descriptionString}</>)
  }

  return <>{description}</>
}

export default CardDescription
