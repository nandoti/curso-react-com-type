import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { loggedInUser } from "../../shared/hooks";

export const Dashboard = () => {
  const counterRef = useRef(0); // Não precisa ser sempre um obj (pode usar uma string)

  const { nameUser, logout } = loggedInUser(); // Forma mais prática de importar nome do usuário

  const [list, setList] = useState<string[]>(["teste", "teste", "teste"]);

  const handleOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback((ev) => {
      if (ev.key === "Enter") {
        if (ev.currentTarget.value.trim().length === 0) return;

        const value = ev.currentTarget.value;

        ev.currentTarget.value = "";

        setList((oldList) => {
          if (oldList.includes(value)) return oldList; // validação da lista

          return [...oldList, value];
        });
      }
    }, []);

  return (
    <div>
      <p>Dashboard</p>
      <p>{nameUser}</p>

      <p>Contador: {counterRef.current}</p>

      <button onClick={() => counterRef.current++}>Somar</button>
      <button onClick={() => console.log(counterRef.current)}>Log</button>
      <button onClick={logout}>Logout</button>
      <br></br>
      <Link to="/Login">Login </Link>
      <br></br>
      
      {/* Lista */}

      <p>Lista</p>
      <br></br>
      <input onKeyDown={handleOnKeyDown} />
      <ul>
        {list.map((value) => {
          return <li key={value}>{value}</li>;
        })}
      </ul>
    </div>
  );
};
