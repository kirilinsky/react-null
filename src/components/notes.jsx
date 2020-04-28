import React from "react";

const Notes = ({users} ) => {
  
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li key={user.id} className="list-group-item user">
            <div><strong>{user.title}</strong> 
           <small>11.11.11</small></div>
           
            <button className="btn btn-outline-secondary btn-sm" type="button">&times;</button>
            </li>
      ))}
    </ul>
  );
};

export default Notes;
