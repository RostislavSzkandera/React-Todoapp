import Header from "./components/Header"
import Form from "./components/Form"
import TodosList from "./components/TodosList"

const App = () => {
  return (
    <div className="font-PTSans">
      <div className="my-4">
        <Header />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <TodosList />
      </div>
    </div>
  )
}

export default App
