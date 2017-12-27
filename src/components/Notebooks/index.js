import React from 'react'
import _ from 'lodash'

import Notebook from '../Notebook'
import './style.css'

const Notebooks = ({notebooks}) => {
  let notebooksAsList = []
  if(_.isEmpty(notebooks)) {
    notebooksAsList = "You don't have any notebooks"
    notebooks = []
  }

  for(let id in notebooks) {
    let notebook = notebooks[id]

    notebooksAsList.push((
      <li key={notebook.id}>
        <Notebook
          id={notebook.id}
          dateCreated={notebook.dateCreated}
          title={notebook.title}
        />
      </li>
    ))
  }

  return (
    <ul className="notebook-viewer--list">{notebooksAsList}</ul>
  )
}

export default Notebooks
