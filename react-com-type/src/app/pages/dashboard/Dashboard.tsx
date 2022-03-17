import { useRef } from "react";
import { Link } from "react-router-dom";


import { loggedInUser } from "../../shared/hooks";


export const Dashboard = () => {
  const counterRef = useRef(0); // Não precisa ser sempre um obj (pode usar uma string)

  const { nameUser } = loggedInUser(); // Forma mais prática de importar nome do usuário

  return (
    <div>
      <p>Dashboard</p>
      <p>{nameUser}</p>

      <p>Contador: {counterRef.current}</p>
      
      <button onClick={() => counterRef.current++}>Somar</button>
      <button onClick={() => console.log(counterRef.current)}>
        Log
      </button>
      <br></br>
      <Link to="/Login">Login </Link>
    </div>
  );
};
