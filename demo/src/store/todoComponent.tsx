import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTodoData,
  setTodoList,
  deleteTodo,
  editTodo,
  deleteAllList,
} from "./todoSlice";
import "./todo.css";
 interface Ioption {
  index:number,
  text:string
 }
const Todo = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);
  const todoList = useSelector((state) => state.todo.todoList);

  const [tododata, setNewtodoData] = useState("");
  const [editbutton, setEditButton] = useState(false);
  const [editItem, setEditItem] = useState<Ioption>();
  const [editMode, setEditMode] = useState(false);

  function handleTodoSubmit(e:any) {
    e.preventDefault();
    
    if(tododata){
      if (editMode) {
        console.log(editMode,'editmode')
            dispatch(editTodo({ index: editItem?.index, text: tododata }));
            setEditMode(false);
          } else {
            dispatch(setTodoList(tododata));
          }
          setNewtodoData("");
    }
  
  }

  function handleEditClick(index:number, text:string) {
    setEditButton(!editbutton);
    setEditItem({ index, text });
    setEditMode(true); 

    setNewtodoData(text); 
  }

  return (
    <>
      <div className="todo_container">
        <div className="todo_content">
          <div className="todo_section">
            <h3 className="todo_h3">Add your items here</h3>

            <form onSubmit={handleTodoSubmit} className="todo_form">
              <div className="todo_input_container">
                <input
                  type="text"
                  placeholder="add your items"
                  value={tododata}
                  onChange={(e) => setNewtodoData(e.target.value)}
                  className="todo_input"
                />
                <button className="todo_add_button btn btn-secondary ">
                  {editMode ? "Update" : "Add"}
                </button>
              </div>
              <div
                style={{
                  height: "300px",
                  overflowY: "auto",
                  padding: "0px 20px",
                  borderRadius: "5px",
                }}
              >
                {todoList.map((data, index) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "30px",
                    }}
                  >
                    <div key={index} className="todo_list_item">
                      <li
                        className={`todo_listitems ${
                          editbutton && editItem.index === index
                            ? "todo_listitems1"
                            : ""
                        }`}
                      >
                        {data}&nbsp; &nbsp; &nbsp;{" "}
                      </li>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span
                        onClick={() => dispatch(deleteTodo(index))}
                        className="todo_icon"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </span>
                      &nbsp; &nbsp; &nbsp;
                      <strong className="todo_icon">
                        <i
                          className="fa-regular fa-pen-to-square edit"
                          onClick={() => handleEditClick(index, data)}
                        ></i>
                      </strong>
                    </div>
                  </div>
                ))}
                <div className=" text-center align-center mt-3">
                  <button
                    onClick={() => dispatch(deleteAllList())}
                    className="btn btn-danger mb-5"
                  >
                    Delete All todo
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
