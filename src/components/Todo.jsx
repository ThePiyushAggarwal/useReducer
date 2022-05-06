function Todo({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <p>{todo.note}</p>
      ))}
    </div>
  )
}

export default Todo
