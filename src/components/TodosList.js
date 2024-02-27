import { MdDelete } from "react-icons/md";
import { MdCloudDone } from "react-icons/md";


const TodosList = ({todos, setTodos}) => {
    
    // Completed task or not
    const completedTodo = (id) => {
        const CompletedTodos = todos.map( (oneTodo) => {
            if(oneTodo.id === id) {
                return {...oneTodo, completed: !oneTodo.completed}
            }
            return oneTodo
        })
        setTodos(CompletedTodos)
    }

    // Deleting task
    const deleteTodo = (id) => {
        const filteredTasks = todos.filter( (Todo) => {
            return Todo.id !== id
        })
        setTodos(filteredTasks)
    }
    
    // Number of all tasks
    const allTodos = todos.length
    
    // Number of completed tasks
    const completedTodos = todos.filter( (oneTodo) => {
        return oneTodo.completed === true
    }).length

  return (
    <div>
        <div><h3 className="text-gray-900 my-2 text-center text-2xl">{completedTodos}/{allTodos} Hotovo</h3></div>
      {
        todos.map( (oneTodo) => {
            return <div className="bg-blue-800 flex flex-row justify-between items-center mb-2 rounded">
                <li  
                    className={`${oneTodo.completed? "opacity-30 line-through transition-all duration-1000 list-none ml-2 p-2" : "list-none ml-2 p-2"}`}
                    key={oneTodo.id}>
                    {oneTodo.name}
                </li>
                <div className="flex flex-row justify-center items-center">
                    <button onClick={ () => completedTodo(oneTodo.id)} >
                        <MdCloudDone className="text-gray-400" size={30} />
                    </button>
                    <button onClick={ () => deleteTodo(oneTodo.id)} className="mx-4">
                        <MdDelete className="text-gray-400" size={30} />
                    </button>
                </div>
            </div>
        })
      }
    </div>
  )
}

export default TodosList
