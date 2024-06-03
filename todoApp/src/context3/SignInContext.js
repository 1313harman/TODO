import { createContext, useContext } from "react";

export const SignInContext=createContext({
    sigin:[
        {
            id:1,
            fullname:"name",
            mail:"mail",
            passkey:1234
        }
    ],
    addSignIn:(fullname,mail,passkey) => {}
})

export const useSignIn = () =>{
    return useContext(SignInContext)
}

export const SignInProvider = SignInContext.Provider
