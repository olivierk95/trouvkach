import React from "react";
require.context("../images/", true);
import distance from "../calculate_distance";

export default function BankList(props) {
    let renderList, distancesArr;
    const center = props.center;

    console.log(props.terminals);

    if (props.loaded) {
        try {
            distancesArr = props.terminals.map(el => {
                if (el.bank) {
                    return {
                        distance: distance(
                            el.latitude,
                            el.longitude,
                            center.lat,
                            center.lng,
                            "k",
                        ).toFixed(3),
                        id: el._id,
                        name: el.bank.name,
                        address: el.address,
                        icon: el.bank.icon,
                    };
                }
            });
        } catch (error) {
            console.log(error);
        }
        distancesArr.sort((a, b) => {
            return a.distance - b.distance;
        });
    }

    if (props.loaded) {
        renderList = distancesArr.map(el => {
            try {
                return (
                    <>
                        <li key={el.id} className="li-banklist">
                            <div className="infos">
                                <div>
                                    <img
                                        src={`../images/${el.icon}`}
                                        alt={el.name}
                                    />
                                </div>
                                <div>
                                    <p>
                                        <strong>{el.name}</strong>
                                    </p>

                                    {!el.address ? "N/A" : el.address}
                                    <p>{`à ${el.distance} km`}</p>
                                </div>
                            </div>

                            <div className="buttons">
                                <button>{"No cash"}</button>
                                <button>{"Delete"}</button>
                            </div>
                        </li>
                    </>
                );
            } catch (error) {
                console.log(error);
            }
        });
    }

    return (
        <>
            <h2>{"Nearest Banks"}</h2>
            <ul> {renderList}</ul>
        </>
    );
}
