import React, { useEffect, useState } from "react";
import {
  Apresentation,
  LanguageButton,
  ProfileContainer,
  ProfileImg,
} from "./style";

import Image from "../../assets/images/Profile.png";
import DescriptionEN from "./description/DescriptionEN";
import DescriptionPT from "./description/DescriptionPT";
import Contacts from "../contacts/Contacts";
import { useDispatch, useSelector } from "react-redux";
import { currentLang, toggleLang } from "../../redux/langSlice";

function Profile() {
  const lang = useSelector(currentLang);
  const dispatch = useDispatch();
  const [langButton, setLangButton] = useState<string>();

  useEffect(() => {
    if (lang === "EN") {
      setLangButton("PT");
    } else {
      setLangButton("EN");
    }
  }, []);

  const handleLang = () => {
    if (lang === "EN") {
      dispatch(toggleLang("PT"));
      setLangButton("EN");

      const lang2 = JSON.stringify("PT");
      localStorage.setItem("lang", lang2);
    } else {
      dispatch(toggleLang("EN"));
      setLangButton("PT");
      const lang2 = JSON.stringify("EN");
      localStorage.setItem("lang", lang2);
    }
  };

  return (
    <Apresentation>
      <LanguageButton onClick={handleLang}>{langButton}</LanguageButton>
      <ProfileContainer>
        <ProfileImg src={Image} />
        <Contacts />
      </ProfileContainer>
      {lang === "EN" ? <DescriptionEN /> : <DescriptionPT />}
    </Apresentation>
  );
}

export default Profile;
