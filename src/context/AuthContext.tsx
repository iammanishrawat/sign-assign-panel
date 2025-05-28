import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface UserData {
    name?: string;
    email?: string;
    [key: string]: any;
}

interface AuthContextProps {
    token: string | null;
    user: UserData | null;
    setAuthData: (token: string, user: UserData) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserData | null>(null);

    useEffect(() => {
        const savedToken = localStorage.getItem('jwtTokenUser');
        const savedUser = localStorage.getItem('userDataUser');

        if (savedToken && savedUser) {
            setToken(savedToken);
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const setAuthData = (token: string, user: UserData) => {
        setToken(token);
        setUser(user);
        localStorage.setItem('jwtTokenUser', token);
        localStorage.setItem('userDataUser', JSON.stringify(user));
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        localStorage.removeItem('jwtTokenUser');
        localStorage.removeItem('userDataUser');
        window.location.href = "http://3.109.198.252?event=logout"
    };

    return (
        <AuthContext.Provider value={{ token, user, setAuthData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
