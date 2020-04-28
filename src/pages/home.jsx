import React, { Fragment, useContext, useEffect } from "react";
import Form from "../components/form";
import Users from "../components/users";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import Loader from "../components/loader";
const Home = () => {
  const { loading, users, fetchUsers } = useContext(FirebaseContext);
   useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Fragment>
      <h1>Main page</h1>
      <Form />
      <hr className="my-5" />
      {loading ?  
        <Loader />
        :  
        users.length === 0 ? <div className="alert alert-warning">юзверей нет</div> :
        <Users users={users} />
       }
    </Fragment>
  );
};

export default Home;
