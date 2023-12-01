import { craftingStyles } from "galadrielcss";
import Image from "next/image";
import galadriel from "../../../public/galadrielcss.png";
// Importing the CSS file generated by Galadriel.CSS
import "./GaladrielCard.css";

const GaladrielCard = () => {
    const container = craftingStyles(() => ({
		backgroundImage:
            "linear-gradient(to right top, #ff4500, #f95c0f, #f36e1f, #ed7d2f, #e78a40)",
        border: "1px solid rgba(0,0,0,0.4)",
        borderRadius: "8px",
        boxSizing: "border-box",
        display: "$panel-flex",
		gap: "20px",
        flexDirection: "$flex-orientation-column",
        justifyContent: "$organize-content-center",
		alignItems: "center",
		alignSelf: "center",
        margin: "40px 0px 20px 0px",
        padding: "10px",
        aspectRatio: "1/1",
        height: "auto",
        minPortraitTablets: {
            padding: "30px",
        }
    }));

    const imgContainerStyles = craftingStyles(() => ({
        border: "none",
        borderRadius: "50%",
        display: "$panel-flex",
        alignItems: "$adjust-flex-center",
        justifyContent: "$organize-content-center",
		alignSelf: "center",
        overflow: "$excess-hidden",
		height: "120px",
		width: "120px",
        minPortraitTablets: {
            height: "150px",
		    width: "150px",
        }
    }));

    const imgStyles = craftingStyles(() => ({
        objectFit: "$object-blend-cover",
    }));

    const labelContainerStyles = craftingStyles(() => ({
        display: "$panel-flex",
        flexDirection: "$flex-orientation-column",
        alignItems: "center",
        justifyContent: "$organize-content-center",
        overflow: "$excess-hidden",
        userSelect: "none",
    }));

    const labelStyles = craftingStyles(() => ({
        color: "#000000",
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "'Metamorphous', serif",
        textTransform: "$text-mutate-capitalize",
    }));

    return (
        <div className={container}>
            <div className={imgContainerStyles}>
                <Image
                    className={imgStyles}
                    src={galadriel}
                    alt="Galadriel.CSS"
                    height={150}
                />
            </div>
            <div className={labelContainerStyles}>
                <label className={labelStyles}>Galadriel.CSS</label>
            </div>
        </div>
    );
};

export default GaladrielCard;