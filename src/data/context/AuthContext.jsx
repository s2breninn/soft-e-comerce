import { createContext, useEffect } from "react";
import firebase from "../../firebase/config";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Cookies from "js-cookie";

const AuthContext = createContext({})

function gerenciarCookie(logado){
    if(logado){
        Cookies.set('login-template-admin-pedidos', logado, {
            expires: 7
        })
    } else {
        Cookies.remove('login-template-admin-pedidos')
    }
}

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

export function AuthProvider(props){
    const [usuario, setUsuario] =  useState(null)
    const [carregando, setCarregando] =  useState(null)
    const navigate = useNavigate()

    async function configurarSessao(usuarioFirebase){
        if(usuarioFirebase?.email){
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        } else{
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }

    async function loginGloogle(){
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )
        configurarSessao(resp.user)
        navigate("/dashboard");
    }

    useEffect(() => {
        const cancelar =  firebase.auth().onIdTokenChanged(configurarSessao) //detectar quando houver alteração
        return () => cancelar()
    }, [])
    
    return (
        <AuthContext.Provider value={{ usuario, loginGloogle }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext