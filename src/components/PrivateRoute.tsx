import React from 'react';
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
    const { isLoading, isAuthenticated } = useAuth0();
    if (!isLoading && !isAuthenticated) {
        return <Navigate to={"/"} />
    }
    return <>{children}</>;
}