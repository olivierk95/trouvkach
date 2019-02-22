/* becodeorg/trouvkach
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import * as React from "react";
import Map from "./Map";

import "../scss/app.scss";

export default class AtmMap extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>{"Check ATM "}</h1>
                <hr />
                <br />
                <div>
                    <Map />
                </div>
            </div>
        );
    }
}
