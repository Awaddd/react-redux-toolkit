import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../store/todoSlice";
import { showNotification } from "../store/global";

export const AddTodo = ({ existingTodo, onSubmit }) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState((existingTodo && existingTodo.task) || "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo) return;

    if (existingTodo) {
      dispatch(editTodo({ id: existingTodo.id, task: todo }));
      dispatch(
        showNotification({ status: "success", message: "Updated todo" })
      );
      onSubmit();
      return;
    }

    dispatch(addTodo(todo));
    dispatch(showNotification({ status: "success", message: "Added todo" }));
    setTodo("");
  };

  return (
    <form className="add-todo" onSubmit={submitHandler}>
      <input
        type="text"
        value={todo}
        onChange={({ target }) => setTodo(target.value)}
      />
      <button type="submit">{existingTodo ? "Update" : "Add"}</button>
    </form>
  );
};

export default AddTodo;
