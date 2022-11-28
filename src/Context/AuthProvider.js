import React from 'react';
import { createContext } from "react";
import {getAuth} from 'firebase/auth';
import app from '../fireBase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    return (
        <div></div>
    );
};

export default AuthProvider;