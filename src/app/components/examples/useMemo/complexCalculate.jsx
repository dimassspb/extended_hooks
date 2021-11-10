import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);

    const buttonColor = otherState ? "primary" : "secondary";

    const fact = useMemo(() => factorial(value), [value]);

    useEffect(() => {
        console.log("render");
    });

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Result: {fact}</p>
                <button
                    onClick={() => setValue((prev) => prev + 10)}
                    className="btn btn-primary ms-md-2"
                >
                    +
                </button>
                <button
                    onClick={() => setValue((prev) => prev - 10)}
                    className="btn btn-primary ms-md-2"
                >
                    -
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn ms-md-2 btn-" + buttonColor}
                    onClick={() => setOtherState((prev) => !prev)}
                >
                    else
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
