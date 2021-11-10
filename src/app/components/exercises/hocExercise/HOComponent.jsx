import React from "react";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import SimpleComponent from "./SimpleComponent";
import withAuth from "./withAuth";

const HOComponent = () => {
    const ComponentWithAuth = withAuth(SimpleComponent);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Component</SmallTitle>
                <Divider />
                <ComponentWithAuth />
            </CardWrapper>
        </>
    );
};

export default HOComponent;
