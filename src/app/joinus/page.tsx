"use client";

import { craftingStyles } from "galadrielcss";
import { useSelector } from "react-redux";
// Importing the CSS file generated by Galadriel.CSS
import "./page.css";

export default function Home() {
    const mainStyles = craftingStyles(() => ({
        background: "transparent",
        display: "$panel-flex",
        gap: "50px",
        flexDirection: "$flex-orientation-column",
        justifyContent: "$organize-content-start",
        alignContent: "$match-content-start",
        flexWrap: "$flex-enclose-wrap",
        alignItems: "$adjust-stretch",
        overflow: "$excess-hidden",
        height: "100%",
        width: "100%",
    }));

    const { data, title } = useSelector((state: any) => state.join.content);

    return (
        <div className={mainStyles}>
            <div>
                <h4>{title}</h4>
            </div>
            <div>{data}</div>
        </div>
    );
}