import Header from "./components/Header"
import Form from "./components/Form"
import TodosList from "./components/TodosList"
import { useState } from "react"

const App = () => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  
  return (
    <div className="font-PTSans max-w-[350px] text-[20px] md:max-w-[600px] min-h-[200px] bg-blue-400 rounded-md mx-auto mt-40 mb-20">
      <div className="my-4">
        <Header />
      </div>
      <div className="ml-4 mb-4">
        <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
      </div>
      <div className="mx-4 pb-4">
        <TodosList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default App
