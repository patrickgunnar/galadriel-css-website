import { craftingStyles } from "galadrielcss";

const Footer = () => {
    const footerStyles = craftingStyles(() => ({
        backgroundImage:
            "linear-gradient(to right top, #ffd700, #ffca2d, #ffbe44, #ffb456, #ffab66)",
        boxSizing: "$box-scale-border-box",
        boxShadow: "0 6px 10px rgba(0,0,0,0.4)",
        padding: "7px",
        height: "45px",
        width: "100%",
    }));

    const containerStyles = craftingStyles(() => ({
        display: "$panel-flex",
        alignItems: "$adjust-center",
        justifyContent: "$organize-content-center",
        height: "100%",
        width: "100%",
    }));

    return (
        <footer className={footerStyles}>
            <div className={containerStyles}>
                © 2023 Patrick Gunnar. MIT License.
            </div>
        </footer>
    );
};

export default Footer;