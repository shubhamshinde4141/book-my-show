import React from "react";
import { Route } from "react-router-dom";

// Import Layouts
import MovietLayout from "../layouts/Movie.layout";


const MovietHOC = ({component:Component,...rest}) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <MovietLayout>
                        <Component {...props} />
                    </MovietLayout>
                )}
            />
        </>
    );
};

export default MovietHOC;