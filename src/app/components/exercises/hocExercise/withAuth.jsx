import React, { useEffect, useState } from "react";
import CardWrapper from "../../common/Card";

const withAuth = (Component) => (props) => {
    const userName = "userName";

    const [isAuth, setIsAuth] = useState();

    useEffect(() => {
        setIsAuth(localStorage.getItem("user") === userName);
    }, []);

    const onLogin = () => {
        localStorage.setItem("user", userName);
        setIsAuth(true);
    };

    const onLogOut = () => {
        localStorage.setItem("user", "");
        setIsAuth(false);
    };
    return (
        <CardWrapper>
            <Component
                onLogin={onLogin}
                onLogOut={onLogOut}
                isAuth={isAuth}
                {...props}
            />
        </CardWrapper>
    );
};

export default withAuth;
