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
import { useDispatch } from "react-redux";
import { getFooterRef } from "../redux/headerSlice";

function Footer() {
  const contactsRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFooterRef(contactsRef));
  }, []);

  return (
    <>
      <SpaceF ref={contactsRef}></SpaceF>
      <Container>
        <Text1>Thank you for your visit. </Text1>
        <Text2>Let's work together? Get in touch with me:</Text2>
        <ContactsContainer>
          <Contacts />
        </ContactsContainer>
        <CreditsContainer>
          <Rights>© 2024 Mikael Espínola. All rights reserved.</Rights>
        </CreditsContainer>
      </Container>
    </>
  );
}

export default Footer;
