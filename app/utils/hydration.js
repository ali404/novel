export const validNotebooks = notebooks => {
  if(
    notebooks === {}
    || !notebooks.default
    || notebooks.default && notebooks[notebooks.default] === {}
  ) {
    return false
  }
  else {
    return true
  }
}

export const validNotesMeta = notesMeta => {

}

export const validSettings = settings => {

}