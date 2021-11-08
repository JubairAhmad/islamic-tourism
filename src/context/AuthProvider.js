
/* import React, { createContext } from 'react';
import useAPI from '../Components/Hooks/useAPI';
import useFireBase from '../Components/Hooks/useFireBase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const AllContexts =useFireBase();
    const {useApi} =useAPI()
    const data = {AllContexts, useApi};
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider; */


import React, { createContext } from 'react';
import useAPI from '../Components/Hooks/useAPI';
import UseCart from '../Components/Hooks/useCart';
import useFirebase from '../Components/Hooks/useFireBase'


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const AllContexts =useFirebase();
    const {useApi} =useAPI();
    const {addToCart,selectedService}=UseCart();
    const data = {selectedService,addToCart,AllContexts, useApi};
    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;