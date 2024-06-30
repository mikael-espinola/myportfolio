import React, { useEffect, useRef } from "react";
import Contacts from "../main/contacts/Contacts";
import {
  ContactsContainer,
  Container,
  CreditsContainer,
  Rights,
  Text1,
  Text2,
} from "./style";
import { useSelector } from "react-redux";
import { currentLang } from "../redux/langSlice";
import { refs } from "../redux/refs";

function Footer() {
  const contactsRef = useRef(null);
  const lang = useSelector(currentLang);
  const date = new Date();
  const year = date.getFullYear();

  useEffect(() => {
    refs.contactRef = contactsRef;
  }, []);

  return (
    <>
      <Container ref={contactsRef}>
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
