
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvidar/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-bars loading-lg ml-[700px] mt-10"></span>
    }
    else if(user) {
        return children;
    }
    else{
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }

};

PrivateRoutes.propTypes = {
    children: PropTypes.node
};

export default PrivateRoutes;