import { useDispatch } from "react-redux";
import { showEditModal, showNotification } from "../store/global";
import { deleteTodo } from "../store/todoSlice";
import Bin from "./sub-components/BinIcon";
import Edit from "./sub-components/EditIcon";
import { capitaliseFirstLetter } from "../utils/helpers";

export const Todo = ({ todo, index }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(showNotification({ status: "danger", message: "Deleted todo" }));
    dispatch(deleteTodo(index));
  };

  return (
    <li className="todo-item">
      + {capitaliseFirstLetter(todo.task)}
      <button className="btn-icon" onClick={handleOnClick}>
        <Bin />
      </button>
      <button
        className="btn-icon"
        onClick={() => dispatch(showEditModal(index))}
      >
        <Edit />
      </button>
    </li>
  );
};
