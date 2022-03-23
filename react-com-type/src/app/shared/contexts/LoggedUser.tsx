import { createContext, useCallback, useState, useEffect } from "react";

// Interface dos dados será compartilhado os dados com o context
interface ILoggedUserContextData {
  nameUser: string;
  logout: () => void;
}

// "as ILoggedUserContextData" está sendo para representar o usuário logado no objeto vazio (mascara um objeto vazio).
export const LoggedUserContext = createContext<ILoggedUserContextData>(
  {} as ILoggedUserContextData
);

export const LoggedUserProvider: React.FC = ({ children }) => {

  // Passando state no contexto
  const [name, setName] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setName("Fernando Tavares");
    }, 1000);
  });

  // useCallback memoriza a construção de uma função
  const handleLogout = useCallback(() => {
    console.log("Logout executou");
  }, []);
  return (
    <LoggedUserContext.Provider
      value={{ nameUser: name, logout: handleLogout }}
    >
      {children}
    </LoggedUserContext.Provider>
  );
};

// Em uma aplicação típica do React, os dados são passados de cima para baixo
//   (de pai para filho) via props, mas esse uso pode ser complicado para certos tipos de
// props(como preferências locais ou tema de UI), que são utilizadas por muitos componentes dentro da aplicação.
//   Contexto(context) fornece a forma de compartilhar dados como esses,
//   entre todos componentes da mesma árvore de componentes, sem precisar passar explicitamente props entre cada nível.
