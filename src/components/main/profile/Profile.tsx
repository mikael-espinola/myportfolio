import React, { useState } from "react";
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

function Profile() {
  const [lang, setLang] = useState<string>("EN");

  const handleLang = () => {
    lang === "EN" ? setLang("PT") : setLang("EN");
  };
  return (
    <Apresentation>
      <LanguageButton onClick={handleLang}>{lang}</LanguageButton>
      <ProfileContainer>
        <ProfileImg src={Image} />
        <Contacts />
      </ProfileContainer>
      {lang === "EN" ? <DescriptionEN /> : <DescriptionPT />}
    </Apresentation>
  );
}

export default Profile;
