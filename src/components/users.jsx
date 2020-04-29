import React, {useContext} from "react";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import { AlertContext } from "../context/alert/alertContext";


const Users = ({users} ) => {
  const {removeUser} = useContext(FirebaseContext)
  const {show} = useContext(AlertContext)
  

  const tryToRemove = (user) =>{
    removeUser(user.id)
    show(5,`${user.name} стерт с лица земли`)
  }
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li key={user.id} className="list-group-item user mb-1">
            <div><strong>{user.name}</strong> 
           <small>добавлен: {user.date}</small></div>
           
            <button onClick={()=>tryToRemove(user)} className="btn btn-outline-secondary btn-sm" type="button">&times;</button>
            </li>
      ))}
    </ul>
  );
};

export default Users;
