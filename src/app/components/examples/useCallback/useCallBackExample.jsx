import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };

    // without callback
    const validateWithOutCallBack = (data) => {
        console.log(data);
    };

    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallBack]);

    const validateWithCallBack = useCallback((data) => {
        console.log(data);
    }, []);

    // with callback
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallBack]);

    useEffect(() => {
        validateWithOutCallBack(data);
        validateWithCallBack(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render without callback: {withOutCallback.current}</p>
            <p>Render with callback: {withCallback.current}</p>

            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                id="email"
                className="form-control mb-3"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
