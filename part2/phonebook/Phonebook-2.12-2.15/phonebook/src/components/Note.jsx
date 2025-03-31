const Note = ({ note, toggleImportance, remove }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
      <button onClick={remove}>delete note</button>
    </li>
  )
}

export default Note