import React, {Component} from "react";
require.context("../images/", true);
import distance from "../calculate_distance";

export default function BankList(props) {
    let renderList;
    let distancesArr;
    const center = props.center;

    if (props.loaded) {
        try {
            distancesArr = props.terminals.map(el => {
                return distance(
                    el.latitude,
                    el.longitude,
                    center.lat,
                    center.lng,
                    "k",
                ).toFixed(3);
            });
        } catch (error) {
            console.log(error);
        }
        distancesArr.sort((a, b) => {
            return a - b;
        });
    }

    if (props.loaded) {
        renderList = props.terminals.map((el, index) => {
            const eachDistance = distancesArr[index];

            try {
                return (
                    <>
                        <li key={`${el._id}-2`} className="li-banklist">
                            <div>
                                <img
                                    src={`../images/${el.bank.icon}`}
                                    alt={el.bank.name}
                                />
                            </div>
                            <div>
                                {`${el.bank.name} - ${
                                    !el.address
                                        ? `${"N/A se trouve à "}${eachDistance} km`
                                        : `${
                                              el.address
                                          } se trouve à ${eachDistance} km`
                                }`}
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
        <div>
            <h2>List of banks</h2>
            <ul> {renderList}</ul>
        </div>
    );
}
