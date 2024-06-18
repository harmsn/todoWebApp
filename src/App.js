import React, {useState, useEffect} from "react";
import BreadCrumb from './Components/BreadCrumb';
import InputWrapper from "./Components/InputWrapper";
import TodoDisplayWrapper from "./Components/TodoDisplayWrapper";
import './App.css';

function App() {
  const [todoList,setTodoList] = useState([]);
  const [editItem,setEditItem] = useState({});

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [todoList]);

  


  useEffect(() => {
    const storedTodoList = JSON.parse(localStorage.getItem('todoList'));
    if (storedTodoList) {
      setTodoList(storedTodoList);
    }
  }, []);

  const handleEdit = (id,item) => {
      setEditItem({id: id,item: item});
  }

  const handleEditSave = ({item,idx}) => {
    const newItems = [...todoList];
    newItems[idx] = item;

    setTodoList(newItems);
    setEditItem({});
  }

  const handleDelete = (id) => {
    const newItems = todoList.filter((_, i) => i !== id);
    setTodoList(newItems);
  }  

  return (
    <>
      <BreadCrumb />
      <div className="wrapper"> 
        <InputWrapper handleEditSave={handleEditSave} editItem={editItem} setEditItem={setEditItem} setTodoList={setTodoList}/>
        <TodoDisplayWrapper handleDelete={handleDelete} handleEdit={handleEdit} todoList={todoList}/>
      </div>
    </>
  );
}

export default App;
