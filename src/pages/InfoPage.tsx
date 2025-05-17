import { useState } from "react";
import {
  regularyHeader,
  regularyText,
  deepHeader,
  deepText,
  officeHeader,
  officeText,
  windowsHeader,
  windowsText,
} from "../Utils";
import imgRegulary from "../assets/Regulary.svg";
import imgDeep from "../assets/Deep.svg";
import imgOffice from "../assets/Office.svg";
import imgWindows from "../assets/Windows.svg";
import { LiaBroomSolid } from "react-icons/lia";
import style from "../ui/info.module.css";
import { Link } from "react-router-dom";

// Cleaning types — used to select the content
type CleaningType = "regulary" | "deep" | "office" | "windows";

// Interface describes data structure for each cleaning category
interface CleaningContent {
  img: string;
  title: string;
  header: string;
  text: string;
}

// Object holding content data for each cleaning category
const contentData: Record<CleaningType, CleaningContent> = {
  regulary: {
    img: imgRegulary,
    title: "Regulary",
    header: regularyHeader,
    text: regularyText,
  },
  deep: {
    img: imgDeep,
    title: "Deep Cleaning",
    header: deepHeader,
    text: deepText,
  },
  office: {
    img: imgOffice,
    title: "Office Cleaning",
    header: officeHeader,
    text: officeText,
  },
  windows: {
    img: imgWindows,
    title: "Windows Cleaning",
    header: windowsHeader,
    text: windowsText,
  },
};

const InfoPage = () => {

  // State for currently selected cleaning type (default is "regulary")
  const [selected, setSelected] = useState<CleaningType>("regulary");

  // Get current content based on selected cleaning type
  const current = contentData[selected];

  return (
    <div className={style.page}>
      <ul className={style.navList}>
        {Object.keys(contentData).map((key) => (
          <li
            key={key}
            onClick={() => setSelected(key as CleaningType)}
            className={selected === key ? style.active : ""}
          >
            {contentData[key as CleaningType].title}
          </li>
        ))}
      </ul>
      <div className={style.content}>
        <img src={current.img} alt={current.title} className={style.image} />

        <div className={style.text}>
          <h1>{current.title}</h1>
          <section className={style.section}>
            <LiaBroomSolid size={60} />
            <p>{current.header}</p>
          </section>
          <p className={style.paragraph}>{current.text}</p>
          <div className={style.btn}>
            <Link to="/book">Check availably</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
