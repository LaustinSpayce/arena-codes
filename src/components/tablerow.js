import React from 'react'
import Table from 'react-bootstrap/Table'

const TableRow = ( { data } ) => {
  return ( <tr>
    <td>{data.Code}</td>
    <td>{data.Description}</td>
    <td>{data.Expiry}</td>
    <td>{data.Date_Added}</td>
  </tr>)
}

export default TableRow