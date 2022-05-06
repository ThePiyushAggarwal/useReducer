import Todo from './components/Todo'
import { useReducer, useState } from 'react'

const reducer = (todos, { type, payload }) => {
  switch (type) {
    case 'add-todo':
      return [...todos, payload]
    default:
      return todos
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [note, setNote] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch({ type: 'add-todo', payload: { note } })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
      </form>
      <Todo todos={todos} />
    </div>
  )
}

export default App
