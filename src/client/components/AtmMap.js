/* becodeorg/trouvkach
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import * as React from "react";

import Map from "./map";
import styles from "./styles/styles";

export default class AtmMap extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>{"Check ATM "}</h1>
                <hr />
                <br />
                <div className={styles.map_container}>
                    <Map className={styles.map} />
                </div>
            </div>
        );
    }
}
