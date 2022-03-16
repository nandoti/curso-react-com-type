import { useNavigate } from "react-router-dom";
import { useState, useEffect,useContext, useMemo, useCallback, useRef } from "react";

import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { ButtonReturn } from "./components/ButtonReturn";
import { LoggedUserContext } from "../../shared/contexts";

export const Login = () => {
  // Serve para pegar a referência de uma elemento HTML
  const inputPassordRef = useRef<HTMLInputElement>(null);

  // importa o nome do usuário
  const {nameUser} = useContext(LoggedUserContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const emailLenght = email.length;

  //  só recuperará o valor memoizado quando o array receber uma atualização.
  const emailLenght = useMemo(() => {
    return email.length * 1000;
  }, [email.length]);

  useEffect(() => {
    if (window.confirm('Vamos estudar?')){
      console.log('Sim!')
    }else {
    console.log('Não!')
  }
  }, []);

     useEffect(() => {
       console.log(email)

     }, [email]);

    useEffect(() => {

       console.log(password)
  }, [password]);

  //useCallback - memoriza funções

  const handleEnter = useCallback(() => {
    console.log(email);
    console.log(password);
    // if (inputPassordRef.current !== null) {
    //   inputPassordRef.current.focus();
    // }
  }, [email, password]);

  const history = useNavigate();

  const handleClick = () => {
    history("/Home");
  };

  return (
    <div>
      <form>
        <p>{nameUser}</p>
        <p>Quantidade de caracteres no e-mail: {emailLenght}</p>

        <InputLogin
          label="Email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPassordRef.current?.focus()}
        />

        <InputLogin
          label="Senha"
          type="password"
          value={password}
          ref={inputPassordRef}
          onChange={(newValue) => setPassword(newValue)}
        />
        <ButtonLogin type="button" onClick={handleEnter}>
          Entrar
        </ButtonLogin>
      </form>
      <p>Login</p>
      <ButtonReturn type="button" onClick={handleClick}>
        Voltar
      </ButtonReturn>
    </div>
  );
};
