import { useSelector, useDispatch } from "react-redux";
import { hideEditModal } from "../store/global";
import AddTodo from "./AddTodo";
import { Todo } from "./Todo";
import Modal from "./sub-components/Modal";

export const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const modalIsActive = useSelector((state) => state.main.editModal.isActive);

  const todoToUpdate = useSelector((state) => {
    const id = state.main.editModal.id;
    return { ...state.todos.todos[id], id };
  });

  const dispatch = useDispatch();

  const closeModal = () => dispatch(hideEditModal());

  return (
    <main className="todo-list-container">
      <h2>Todo List</h2>

      <Modal title="Change Todo" open={modalIsActive} onClose={closeModal}>
        <AddTodo existingTodo={todoToUpdate} onSubmit={closeModal} />
      </Modal>

      <AddTodo />

      <div className="todo-list">
        {todos.map((todo, key) => (
          <Todo key={key} index={key} todo={todo} />
        ))}
      </div>
    </main>
  );
};

export default TodoList;
