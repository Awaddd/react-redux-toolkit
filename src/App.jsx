import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideEditModal } from "./store/global";
import TodoList from "./components/TodoList";
import Notification from "./components/sub-components/Notification";

function App() {
  const modalIsActive = useSelector((state) => state.main.editModal.isActive);
  const { isActive, ...notificationProps } = useSelector((state) => {
    const { status, message, ...rest } = state.main.notification;
    return {
      [status]: message,
      ...rest,
    };
  });

  const dispatch = useDispatch();

  return (
    <Fragment>
      {modalIsActive && (
        <div
          className="overlay"
          onClick={() => dispatch(hideEditModal())}
        ></div>
      )}

      {isActive && <Notification {...notificationProps} />}

      <div className="App">
        <TodoList />
      </div>
    </Fragment>
  );
}

export default App;
