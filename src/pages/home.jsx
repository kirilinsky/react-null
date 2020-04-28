import React, {Fragment} from 'react';
import Form from '../components/form'
import Notes from '../components/notes'
const Home = () => {
    const users = new Array(3).fill('').map((_,i)=>({id:i,title:`user ${i+1}`}))


    return (
        <Fragment>
           <h1>Main page</h1>   
           <Form/>
        <hr className="my-5"/>
           <Notes users={users}/>
        </Fragment>
    );
}

export default Home;
