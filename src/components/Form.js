
const Form = ({input, setInput, todos, setTodos}) => {
  
    // Add task
    const formSubmit = (e) => {
      e.preventDefault()
  
      setTodos([...todos, {id: new Date().getTime(), name: input, completed: false}])
      setInput("")
    }
    
    
      return (
      <section>
        <form onSubmit={formSubmit}>
          <input 
              className="bg-white w-[200px] md:w-[300px] rounded outline-none p-2 placeholder:text-gray-500"
              type="text" 
              placeholder="Jaký je další úkol?"
              onChange={ (e) => setInput(e.target.value)}
              value={input}
              required
          />
          <input 
              className="bg-gray-400 rounded ml-4 p-2 cursor-pointer sm:hover:bg-gray-600"
              type="submit" 
              value="Přidat"
  
          />
        </form>
      </section>
    )
  }
  
  export default Form
  