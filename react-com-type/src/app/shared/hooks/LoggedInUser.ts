import { useContext } from 'react';

import { LoggedUserContext } from './../contexts/LoggedUser';

//Estará acoplado diretamente ao LoggedUser

// Hook customizado é uma função qualquer que será usado uma função do react

export const loggedInUser = () => {
    const context = useContext(LoggedUserContext)
    return context;
}