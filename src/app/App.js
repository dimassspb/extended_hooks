import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Users from "./layouts/users";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import UseCalbackExample from "./layouts/useCallback";
import MemoExample from "./layouts/memo";
import CloneElementExample from "./layouts/cloneElement";
import UseRefExample from "./layouts/useRef";
import UseMemoExample from "./layouts/useMemo";
import HOCLayout from "./layouts/hoc";
import ReactChildren from "./layouts/reactChildren";
import ContainerWrapper from "./components/common/container";

function App() {
    return (
        <>
            <BrowserRouter basename="/extended_hooks">
                <NavBar />
                <ContainerWrapper>
                    <Switch>
                        <Route path="/users/:userId?" component={Users} />
                        <Route
                            path="/useCallback"
                            component={UseCalbackExample}
                        />
                        <Route path="/memo" component={MemoExample} />
                        <Route path="/useMemo" component={UseMemoExample} />
                        <Route
                            path="/cloneElement"
                            component={CloneElementExample}
                        />
                        <Route path="/hoc" component={HOCLayout} />
                        <Route path="/children" component={ReactChildren} />

                        <Route path="/useRef" component={UseRefExample} />
                        <Route path="/" exact component={Main} />
                        <Redirect to="/" />
                    </Switch>
                </ContainerWrapper>
            </BrowserRouter>
        </>
    );
}

export default App;
