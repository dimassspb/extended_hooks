import React, { useRef, useState, useEffect } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";

const UseRefExercise = () => {
    const styleRef = useRef();
    const [state, setState] = useState(false);
    const [text, setText] = useState("");

    const handleState = () => {
        setState(!state);
    };

    useEffect(() => {
        if (text === "Блок") {
            styleRef.current.style.width = "80px";
            styleRef.current.style.height = "150px";
            setText("Текст");
//             console.log(styleRef.current);
        } else {
            styleRef.current.style.width = "60px";
            styleRef.current.style.height = "40px";
            setText("Блок");
        }
    }, [state]);

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <Divider />
            <div
                ref={styleRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded mb-3"
                style={{
                    height: "40px",
                    width: "60px",
                    color: "white"
                }}
            >
                <small>{text}</small>
            </div>
            <button onClick={handleState} className="btn btn-primary">
                Изменить
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
