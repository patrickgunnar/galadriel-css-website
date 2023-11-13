import { craftingStyles } from "galadrielcss";
import ProfileBox from "./ProfileBox";
import MenuBox from "./MenuBox";

const Sidebar = () => {
    const containerStyles = craftingStyles(() => ({
        display: "$panel-hidden",
        flexDirection: "$flex-orientation-column",
        alignItems: "$adjust-center",
        justifyContent: "$organize-content-space-between",
        height: "100%",
        width: "18%",
        minStandardDesktops: {
            display: "$panel-flex",
        }
    }));

    return (
        <div className={containerStyles}>
            <ProfileBox />
            <MenuBox />
        </div>
    );
};

export { Sidebar };