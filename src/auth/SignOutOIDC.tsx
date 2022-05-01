import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { signoutRedirectCallback } from './user-service';

const SignOutOIDC: FC<{}> = () => {
    const navigate = useNavigate();
    useEffect(() => {
            const signoutAsync = async () => {
            await signoutRedirectCallback();
            navigate('/');
        };
        signoutAsync();
    }, [navigate]);

    return <div>Redirecting...</div>
};

export default SignOutOIDC;
