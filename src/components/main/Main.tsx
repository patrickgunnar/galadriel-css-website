import { craftingStyles } from "galadrielcss";

interface MainProps {
    children?: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    const mainStyles = craftingStyles(() => ({
        backgroundImage:
            "linear-gradient(to right top, #ffd700, #ffca2d, #ffbe44, #ffb456, #ffab66)",
        boxSizing: "$box-scale-border-box",
        boxShadow: "0 6px 10px rgba(0,0,0,0.4)",
        border: "none",
        borderRadius: "15px",
        display: "$panel-flex",
        alignItems: "$adjust-flex-start",
        justifyContent: "$organize-content-center",
        padding: "15px",
        height: "100%",
        width: "100%",
        minStandardDesktops: {
            width: "79%",
        }
    }));

    return <main className={mainStyles}>{children}</main>;
};

export default Main;