"use client";

import store from "@/store";
import { Provider } from "react-redux";
import { craftingStyles } from "galadrielcss";
import ParticleCanvas from "../canvas/ParticleCanvas";
import { Navbar } from "../navbar/Navbar";
import { Sidebar } from "../side-bar/Sidebar";
import Footer from "../footer/Footer";
import Main from "../main/Main";

interface HTMLInterface {
    children: React.ReactNode;
}

const HTML: React.FC<HTMLInterface> = ({ children }) => {
    const htmlStyles = craftingStyles(() => ({
        userSelect: "none",
        height: "100vh",
        width: "100vw",
        minHeight: "1000px",
        minWidth: "100vw",
        overflow: "hidden",
        overflowY: "auto",
    }));

    const bodyStyles = craftingStyles(() => ({
        backgroundImage:
            "linear-gradient(to right top, #ff4500, #c42626, #831a2a, #43141f, #000000)",
        backgroundRepeat: "no-repeat",
        display: "$panel-flex",
        flexDirection: "$flex-orientation-column",
        alignItems: "$adjust-center",
        justifyContent: "$organize-content-space-between",
        fontFamily: "'Poppins', sans-serif",
        height: "100%",
        width: "100%",
        overflow: "hidden",
    }));

    const contentContainerStyles = craftingStyles(() => ({
        display: "$panel-flex",
        alignItems: "$adjust-center",
        justifyContent: "$organize-content-space-between",
        padding: "0px 10px",
        height: "82%",
        width: "100%",
        minPortraitTablets: {
            padding: "0px 20px",
            height: "80%",
        },
        minStandardDesktops: {
            padding: "0px 50px",
        },
    }));

    return (
        <Provider store={store}>
            <html lang="en" className={htmlStyles}>
                <body className={bodyStyles}>
                    <ParticleCanvas />
                    <Navbar />
                    <div className={contentContainerStyles}>
                        <Sidebar />
                        <Main>{children}</Main>
                    </div>
                    <Footer />
                </body>
            </html>
        </Provider>
    );
};

export default HTML;