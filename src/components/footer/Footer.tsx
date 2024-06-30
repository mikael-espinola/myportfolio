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
        {lang === "EN" ? (
          <Text1>Thank you for visiting.</Text1>
        ) : (
          <Text1>Obrigado pela visita.</Text1>
        )}
        {lang === "EN" ? (
          <Text2>Let's work together? Get in touch with me</Text2>
        ) : (
          <Text2>Vamos trabalhar juntos? Entre em contato comigo</Text2>
        )}
        <ContactsContainer>
          <Contacts />
        </ContactsContainer>
        <CreditsContainer>
          <Rights>
            <span> © {year} Mikael Espínola.</span>
            {lang === "EN" ? (
              <span> All rights reserved.</span>
            ) : (
              <span> Todos os direitos reservados.</span>
            )}
          </Rights>
        </CreditsContainer>
      </Container>
    </>
  );
}

export default Footer;
