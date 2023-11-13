"use client";

import { craftingStyles } from "galadrielcss";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const navStyles = craftingStyles(() => ({
        backgroundImage:
            "linear-gradient(to right top, #ffd700, #ffca2d, #ffbe44, #ffb456, #ffab66)",
        boxSizing: "$box-scale-border-box",
        boxShadow: "0 6px 10px rgba(0,0,0,0.4)",
        padding: "7px",
        position: "$set-relative",
        height: "45px",
        width: "100%",
    }));

    const containerStyle = craftingStyles(() => ({
        display: "$panel-flex",
        alignItems: "$adjust-center",
        justifyContent: "$organize-content-space-between",
        height: "100%",
        width: "100%",
    }));

    const logoContainerStyles = craftingStyles(() => ({
        display: "$panel-flex",
        alignContent: "$match-content-center",
        justifyContent: "$organize-content-center",
        position: "$set-relative",
        left: "0%",
        transform: "translateX(0%)",

        height: "100%",
        width: "auto",
        minStandardDesktops: {
            position: "$set-absolute",
            left: "50%",
            transform: "translateX(-50%)",
        },
    }));

    const logoStyle = craftingStyles(() => ({
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "#000000",
        display: "$panel-flex",
        alignItems: "$adjust-center",
        justifyContent: "$organize-content-center",
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "'Metamorphous', serif",
        textDecoration: "none",
        textTransform: "$text-mutate-capitalize",
        textAlign: "$arrange-text-center",
        lineHeight: "23px",
        position: "$set-relative",
        margin: "auto",
        height: "100%",
        width: "auto",
    }));

    const listContainerStyles = craftingStyles(() => ({
        display: "$panel-hidden",
        alignContent: "$match-content-center",
        justifyContent: "$organize-content-center",
        gap: "20px",
        color: "#000000",
        fontSize: "18px",
        fontWeight: "500",
        fontFamily: "'Alegreya Sans SC', sans-serif",
        minPortraitTablets: {
            display: "$panel-flex",
        },
    }));

    const listStyles = craftingStyles(() => ({
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        padding: "5px 10px",
        listStyle: "none",
        transition: "background-color 0.3s ease",
        hover: {
            backgroundImage:
                "linear-gradient(to right top, #ff4500, #f95c0f, #f36e1f, #ed7d2f, #e78a40)",
        },
        alignContent: "$match-content-center",
    }));

    const iconStyles = craftingStyles(() => ({
        background: "transparent",
        border: "none",
        cursor: "pointer",
    }));

    const router = useRouter();

    const openNewWindow = (href: string) => {
        if (href) {
            const newWindow = window.open(href, "_blank");

            if (newWindow) {
                newWindow.focus();
            }
        }
    };

    const versionStyles = craftingStyles(() => ({
        backgroundImage:
            "linear-gradient(to right top, #e5c102, #eab21a, #eca429, #eb9635, #e78a40)",
        border: "none",
        borderRadius: "5px",
        color: "#000000",
        fontSize: "15px",
        fontWeight: "500",
        fontFamily: "'Alegreya Sans SC', sans-serif",
        margin: "auto 10px",
        padding: "5px 15px",
        position: "$set-relative",
        height: "auto",
        width: "auto",
    }));

    return (
        <nav className={navStyles}>
            <div className={containerStyle}>
                <div>
                    <ul className={listContainerStyles}>
                        <li className={listStyles} onClick={() => router.push("/documentation")}>Documentation</li>
                        <li className={listStyles} onClick={() => router.push("/playground")}>Playground</li>
                        <li className={listStyles} onClick={() => router.push("/joinus")}>Join Us</li>
                    </ul>
                </div>
                <div className={logoContainerStyles}>
                    <button className={logoStyle} onClick={() => router.push("/")}>
                        Galadriel.js
                    </button>
                </div>
                <div>
                    <div className={listContainerStyles}>
                        <button
                            className={iconStyles}
                            onClick={() =>
                                openNewWindow(
                                    "https://www.linkedin.com/in/patrickgunnar/"
                                )
                            }
                        >
                            <SiLinkedin size={22} />
                        </button>
                        <button
                            className={iconStyles}
                            onClick={() =>
                                openNewWindow(
                                    "https://github.com/patrickgunnar/galadrielcss"
                                )
                            }
                        >
                            <SiGithub size={22} />
                        </button>
                        <div className={versionStyles}>1.0.0-beta.0.1.0</div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export { Navbar };