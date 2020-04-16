import React, { useState, useRef } from "react"
import Button from "react-bootstrap/Button"
import { FaClipboardCheck } from "react-icons/fa"
import Overlay from "react-bootstrap/Overlay"
import Tooltip from "react-bootstrap/Tooltip"
import CardDescription from "./carddescription"

const TableRow = ({ data }) => {
  const [copied, setCopied] = useState("copy")
  const [show, setShow] = useState(false)
  const target = useRef(null)

  function CopyToClipboard() {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 1000)
    navigator.clipboard
      .writeText(data.Code)
      .then(() => {
        setCopied("Copied to Clipboard")
      })
      .catch(() => {
        setCopied("There has been an error")
      })
  }

  return (
    <tr>
      <td>
        {data.Code}
        <Button
          ref={target}
          style={{ float: "right" }}
          size="sm"
          variant="outline-primary"
          onClick={CopyToClipboard}
        >
          <FaClipboardCheck />
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="button-tooltip" {...props}>
              {copied}
            </Tooltip>
          )}
        </Overlay>
      </td>
      <td>
        <CardDescription description={data.Description} />
      </td>
      <td>{data.Expiry}</td>
      <td>{data.Date_Added}</td>
    </tr>
  )
}

export default TableRow
