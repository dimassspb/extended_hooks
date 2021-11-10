import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
    console.log("render button");
    });

    return <button className="btn btn-primary" onClick={onLogOut}>Log out</button>;
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

const areEqual = (prevState, nextState) => {
if (prevState.onLogOut !== nextState.onLogOut) {
    return false;
} else {
    return true;
}
};

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);
const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
    <>
    <button className="btn btn-primary" onClick={() => setState(!state)}>init rerander</button>
    <MemoizedLogOutButton onLogOut={handleLogOut} />
    </>
    );
};

export default MemoWithUseCallbackExample;
