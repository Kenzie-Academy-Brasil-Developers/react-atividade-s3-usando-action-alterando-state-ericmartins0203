import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";

const UserCard = () => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("");
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(changeName(newName));
  };
  console.log(user);
  return (
    <div>
      {user && <h2>{user.name}</h2>}
      <input onChange={(e) => setNewName(e.target.value)} type="text" />
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default UserCard;
