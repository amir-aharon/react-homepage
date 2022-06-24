// React & Firebase imports
import { useEffect, useState } from 'react';
import { firebase } from './firebase.js'
// Components
import Header from './components/Header';
import TodoList from './components/TodoList';


// Constant reference to the todo collection
const CURRENT_COLLECTION = "todo-list"

// Main container of the site
export default function App() {
  // Reset state on mount
  const [todoList, setTodoList] = useState([])

  // Subscribe to colleciton changes
  useEffect(() => {
    getTasks()
  }, [])

  // Create collection
  const ref = firebase.firestore().collection(CURRENT_COLLECTION)

  function getTasks() {
    ref.onSnapshot(query => {
      const items = []
      query.forEach(doc => {
        items.push(doc.data())
      })
      let done = items.filter(task => task.complete === true)
      let undone = items.filter(task => task.complete === false)
      setTodoList([...undone, ...done])
    })
  } // Set state as a sorted-by-completion collection array


  const handleToggle = (id, task) => {
    ref.where("id", "==", Number(id)).get().then(res => {
      res.docs.forEach((doc) => {
        const docRef = firebase.firestore().collection(CURRENT_COLLECTION).doc(doc.id)
        docRef.update({ complete: !task.complete })
      });
    })
  } // Update completion checkboxes to db


  const handleDelete = id => {
    // let filtered = todoList.filter(task => task.id !== Number(id))
    // setTodoList(filtered);
    ref.where("id", "==", Number(id)).get().then(res => {
      res.docs.forEach((doc) => {
        const docRef = firebase.firestore().collection(CURRENT_COLLECTION).doc(doc.id)
        docRef.delete()
        //// DEBUG: Prints success/error messages on deletion
        // .then(() => {
        //   console.log("Document successfully deleted!");
        // }).catch((e) => {
        //   console.error("Error removing document: ", e);
        // })
      });
    })
  } // Delete document from db by id

  // Adds task to db
  const addTask = text => {
    const id= todoList.length++;
    const newTask = {
      id: id,
      task: text,
      complete: false
    }
    ref.add(newTask)
    //// DEBUG: Prints success/error messages on creation
    // .then((docRef) => {
    //   console.log("Document written with ID: ", docRef.id);
    // }).catch((error) => {
    //   console.error("Error adding document: ", error);
    // })
  }

  // Update changes in tasks' content ti db
  const handleChange = e => {
    let id = e.target.id
    let content = e.target.textContent
    ref.where("id", "==", Number(id)).get().then(res => {
      res.docs.forEach((doc) => {
        const docRef = firebase.firestore().collection(CURRENT_COLLECTION).doc(doc.id)
        docRef.update({ task: content })
      });
    })
  }



  return (
    <div className="App">
      <Header />

        <TodoList // State/DB functions passed as props
        todoList={todoList} // State
        handleToggle={handleToggle} // Completion handler
        handleDelete={handleDelete} // Delete handler
        addTask={addTask} // Task creation handler
        handleChange={handleChange} // Content change handler
        />

    </div>
  );

  //// DEBUG: Prints changes in state
  // useEffect(() => {
  //   console.log(todoList)
  // }, [todoList])
}
