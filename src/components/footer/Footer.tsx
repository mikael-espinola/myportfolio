import React, { useEffect, useRef } from "react";
import Contacts from "../main/contacts/Contacts";
import {
  ContactsContainer,
  Container,
  CreditsContainer,
  Rights,
  SpaceF,
  Text1,
  Text2,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getFooterRef } from "../redux/headerSlice";
import { currentLang } from "../redux/langSlice";

function Footer() {
  const contactsRef = useRef(null);
  const dispatch = useDispatch();
  const lang = useSelector(currentLang);
  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    dispatch(getFooterRef(contactsRef));
  }, []);

  return (
    <>
      <SpaceF ref={contactsRef}></SpaceF>
      <Container>
        <Text1>
          {lang === "EN" ? "Thank you for visiting." : "Obrigado pela visita."}
        </Text1>
        <Text2>
          {lang === "EN"
            ? "Let's work together? Get in touch with me:"
            : "Vamos trabalhar juntos? Entre em contato comigo:"}
        </Text2>
        <ContactsContainer>
          <Contacts />
        </ContactsContainer>
        <CreditsContainer>
          <Rights>
            © {year} Mikael Espínola.
            {lang === "EN"
              ? " All rights reserved."
              : " Todos os direitos reservados."}
          </Rights>
        </CreditsContainer>
      </Container>
    </>
  );
}

export default Footer;
