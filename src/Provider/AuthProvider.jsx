/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../FireBase/Firebase.config";
export const AuthContext = createContext(null);


const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true);
const createUser = (email,password) =>{
setLoading(true);
return createUserWithEmailAndPassword(auth,email,password)

}
const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}





const logOut = ()=>{
    setLoading(true)
    return signOut(auth)

   
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,loginUser =>{
        console.log('heeelo i am changed',loginUser);
        setUser(loginUser)
        setLoading(false)
    });
    return ()=>{
        unSubscribe();
    }
})




const authInfo = {user,createUser,logOut,signIn,loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;