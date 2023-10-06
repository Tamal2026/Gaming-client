/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../FireBase/Firebase.config";
export const AuthContext = createContext(null);


const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)

const createUser = (email,password) =>{
return createUserWithEmailAndPassword(auth,email,password)


}
const logOut = ()=>{
    return signOut();
}

useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,loginUser =>{
        setUser(loginUser)
    });
    return unSubscribe();
})




const authInfo = {user,createUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;