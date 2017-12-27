import React from 'react'

import Notebook from '../Notebook'
import './style.css'

const Notebooks = ({notebooks}) => {
  let notebooksAsList = []
  if(!notebooks.length) {
    notebooksAsList = "You don't have any notebooks"
    notebooks = []
  }
  notebooks.forEach(notebook => {
    console.log(notebook)
    notebooksAsList.push((
      <li key={notebook.id}>
        <Notebook
          id={notebook.id}
          dateCreated={notebook.dateCreated}
          title={notebook.title}
        />
      </li>
    ))
  })

  return (
    <ul className="notebook-viewer--list">{notebooksAsList}</ul>
  )
}

export default Notebooks
