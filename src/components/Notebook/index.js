import React from 'react'
import {Link} from 'react-router-dom'

const Notebook = ({id, title, dateCreated}) => (
  <Link to={"/notebooks/" + id}>{title}</Link>
)

export default Notebook
