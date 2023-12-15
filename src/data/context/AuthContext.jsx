import { redirect } from "react-router-dom";   'react-router-dom'
import { createContext } from "react";
import firebase from "../../firebase/config";
import { useState } from "react";

const AuthContext = createContext({})

{/*
async function usuarioNormalizado(usuarioFirebase){
    const token = await usuarioFirebase.getIdToken()

    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemURL: usuarioFirebase.photoURL
    }
}
*/}

export function AuthProvider(props){
    const [usuario, setUsuario] =  useState(null)

    async function loginGloogle(){
        console.log('login gloogle')
        redirect('/')
    }
    
    return (
        <AuthContext.Provider value={{ usuario, loginGloogle }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext