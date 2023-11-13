import { craftingStyles } from "galadrielcss";
import Image from "next/image";
import galadriel from "../../../public/galadrielcss.png";

const ProfileBox = () => {
    const containerStyles = craftingStyles(() => ({
        backgroundImage:
            "linear-gradient(to right top, #ffd700, #ffca2d, #ffbe44, #ffb456, #ffab66)",
        boxSizing: "$box-scale-border-box",
        boxShadow: "0 6px 10px rgba(0,0,0,0.4)",
        border: "none",
        borderRadius: "15px",
        display: "$panel-hidden",
        alignItems: "$adjust-center",
        justifyContent: "$organize-content-space-between",
        padding: "7px 15px",
        height: "17%",
        width: "100%",
        minLargeDesktops: {
            display: "$panel-flex",
        },
    }));

    const imgContainerStyles = craftingStyles(() => ({
        aspectRatio: "$proportion-square",
        border: "none",
        borderRadius: "50%",
        display: "$panel-flex",
        alignItems: "$adjust-flex-center",
        justifyContent: "$organize-content-center",
        overflow: "$excess-hidden",
        height: "80%",
    }));

    const imgStyles = craftingStyles(() => ({
        objectFit: "$object-blend-cover",
    }));

    const labelContainerStyles = craftingStyles(() => ({
        display: "$panel-flex",
        gap: "5px",
        flexDirection: "$flex-orientation-column",
        alignItems: "$adjust-flex-start",
        justifyContent: "$organize-content-center",
        overflow: "$excess-hidden",
        userSelect: "none",
        height: "90%",
        width: "65%",
    }));

    const labelStyles = craftingStyles(() => ({
        color: "#000000",
        fontSize: "16px",
        fontWeight: "bold",
        fontFamily: "'Metamorphous', serif",
        textTransform: "$text-mutate-capitalize",
    }));

    const descriptionStyles = craftingStyles(() => ({
        color: "#000000",
        fontSize: "13px",
        fontWeight: "400",
    }));

    return (
        <div className={containerStyles}>
            <div className={imgContainerStyles}>
                <Image
                    className={imgStyles}
                    src={galadriel}
                    alt="Galadriel.CSS"
                    height={100}
                />
            </div>
            <div className={labelContainerStyles}>
                <label className={labelStyles}>Galadriel.CSS</label>
                <p className={descriptionStyles}>
                    JavaScript object-based approach for style creation.
                </p>
            </div>
        </div>
    );
};

export default ProfileBox;