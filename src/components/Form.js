
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
              className="bg-blue-800 w-[200px] md:w-[300px] rounded outline-none p-2 placeholder:text-[#e4c5c5]"
              type="text" 
              placeholder="Jaký je další úkol?"
              onChange={ (e) => setInput(e.target.value)}
              value={input}
              required
          />
          <input 
              className="bg-gray-600 rounded ml-4 p-2 cursor-pointer hover:bg-gray-700"
              type="submit" 
              value="Přidat"
  
          />
        </form>
      </section>
    )
  }
  
  export default Form
  