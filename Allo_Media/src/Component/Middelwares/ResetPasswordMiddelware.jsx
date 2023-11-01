import React from 'react';
import ResetPassword from '../ResetPassword';
import { useParams, Navigate} from 'react-router-dom';

const ResetPasswordMiddleware = () => {
    const { token } = useParams();

    if (!token) {
        return <Navigate to="/forget-password" />;
    }

    return <ResetPassword />;
};

export default ResetPasswordMiddleware