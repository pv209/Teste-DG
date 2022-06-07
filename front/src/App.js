import './App.css';
import React, { useState, useEffect } from 'react';
import api from './Services/api';

function App() {
const [nome, setNome] =  useState('');
const [data,  setData] = useState('');
const [users, setUsers] = useState(null);

useEffect(() => {
  api.get("/listar").then(({data}) =>{
    setUsers(data);
  } )
},[])

const handleSubmit= (e) => {
 e.preventDefault();
 const form =  new FormData(e.target);
 const inputs = Object.fromEntries(form);
 setNome(inputs.nome);
 setData(inputs.data);
const body = {
  username:nome,
  date:data,
}
 api.post("/cadastro",body).then(({data}) => {
  console.log("ok");
 })
 window.location.reload();
}

const changeName = (e) => {
  setNome(e.target.value);
}

const changeData = (e) => {
  setData(e.target.value);
}
  return (

<div>
  <form onSubmit={handleSubmit}>
    < input type="text" name='nome' onChange={changeName} placeholder='Nome:' value={nome}/>
    <input type="date" name='data' value={data} onChange={changeData}/>
    <button type="submit">Enviar</button>
 </form>

 <div  class="users">
   <table id='users'>
     <thead>
       <th>Nome</th>
       <th>Data</th>
     </thead>
     

   {users ? users.map((user) => (
      <>
      <tbody>
      <td>{user.username}</td>
      <td>{user.date.slice(0,10)}</td>
      </tbody>
      </>
     
   
  
   )) : null}
  
  </table>
 </div>
</div>



  );
}

export default App;
