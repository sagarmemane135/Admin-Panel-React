import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ props }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser))
    }, [state.currentUser])

    return (
        <>
            <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
                {props.chidren}
            </AuthContext.Provider>
        </>
    );
};