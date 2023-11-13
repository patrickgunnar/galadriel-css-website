import { craftingStyles } from "galadrielcss";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const MenuBox = () => {
    const containerStyles = craftingStyles(() => ({
        backgroundImage:
            "linear-gradient(to right top, #ffd700, #ffca2d, #ffbe44, #ffb456, #ffab66)",
        boxSizing: "$box-scale-border-box",
        boxShadow: "0 6px 10px rgba(0,0,0,0.4)",
        border: "none",
        borderRadius: "15px",
        padding: "15px",
        height: "100%",
        width: "100%",
        minLargeDesktops: {
            height: "80%",
        },
    }));

    const labelContainerStyles = craftingStyles(() => ({
        boxSizing: "$box-scale-border-box",
        display: "$panel-flex",
        alignItems: "$adjust-end",
        justifyContent: "$organize-content-center",
        textAlign: "center",
        color: "#000000",
        fontSize: "14px",
        fontWeight: "600",
        padding: "5px",
        height: "7%",
        width: "100%",
    }));

    const menuContainerStyles = craftingStyles(() => ({
        display: "$panel-flex",
        gap: "8px",
        flexDirection: "$flex-orientation-column",
        alignItems: "$adjust-center",
        justifyContent: "$organize-content-start",
        padding: "10px",
        height: "93%",
        width: "100%",
        overflow: "hidden",
        overflowY: "auto",
    }));

    const buttonStyles = craftingStyles(() => ({
        backgroundImage:
            "linear-gradient(to right top, #f16e22, #f06228, #ed552d, #eb4733, #e73838)",
        border: "1px solid rgba(0,0,0,0.4)",
        borderRadius: "8px",
        boxSizing: "$box-scale-border-box",
        cursor: "pointer",
        color: "#000000",
        display: "$panel-flex",
        gap: "8px",
        alignItems: "$adjust-center",
        justifyContent: "$organize-content-start",
        fontSize: "16px",
        fontWeight: "600",
        textAlign: "left",
        padding: "20px",
        height: "auto",
        width: "100%",
        hover: {
            backgroundImage:
                "linear-gradient(to right top, #ff4500, #f95c0f, #f36e1f, #ed7d2f, #e78a40)",
        },
    }));

    const pathname = usePathname();
    const path =
        pathname === "/"
            ? "home"
            : pathname === "/documentation"
            ? "docs"
            : pathname === "/playground"
            ? "player"
            : "join";
    const { menu } = useSelector((state: any) => state[path].content);

    return (
        <div className={containerStyles}>
            <div className={labelContainerStyles}>
                <label>Delve into the Lore</label>
            </div>
            <div className={menuContainerStyles}>
                {menu.map((item: any, idx: number) => {
                    const { title, Icon, path } = item;

                    return (
                        <button className={buttonStyles} key={idx}>
                            <Icon size={20} />
                            {title}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default MenuBox;