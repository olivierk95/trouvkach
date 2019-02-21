/* becodeorg/trouvkach
 *
 * /src/client/app.js - Client entry point
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import * as React from "react";
import ReactDOM from "react-dom";
import "./calculate_distance";
import "./getPosition";

import AtmMap from "./components/AtmMap";

ReactDOM.render(<AtmMap />, document.querySelector("#app"));
