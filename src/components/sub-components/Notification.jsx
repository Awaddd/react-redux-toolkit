import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideNotification } from "../../store/global";

const Notification = ({ ms = 3000, ...statuses }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [classes, setClasses] = useState("");

  useEffect(() => {
    const [cls, msg] = createNotification(statuses);

    if (!cls || !msg) return;
    setClasses(["notification"].concat(cls).join(" "));
    setMessage(msg);

    setTimeout(() => {
      dispatch(hideNotification());
    }, ms);
  }, []);

  if (!classes || !message) return null;

  return <div className={classes}>{message}</div>;
};

const createNotification = (statuses) => {
  if (!statuses) return [];
  return Object.entries(statuses)[0];
};

export default Notification;
