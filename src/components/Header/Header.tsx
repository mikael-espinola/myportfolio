import { useEffect, useState } from "react";
import { Container, Item, List, Nav, Title } from "./style";
import { useSelector } from "react-redux";
import { currentRef } from "../redux/headerSlice";
import { currentLang } from "../redux/langSlice";

function Header() {
  const [clickedOn, setClickOn] = useState<number>(1);
  const [showTitle, setShowTitle] = useState(true);
  const isRef = useSelector(currentRef);
  const lang = useSelector(currentLang);

  useEffect(() => {
    const handleScroll = () => {
      const valueY =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      valueY > 1 ? setShowTitle(false) : setShowTitle(true);
      if (valueY < 18) {
        setClickOn(1);
      } else if (valueY > 19 && valueY < 85) {
        setClickOn(2);
      } else if (valueY > 86) {
        setClickOn(3);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHomeRef = (key: number) => {
    isRef.homeRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setClickOn(key);
  };

  const handleProjectsRef = (key: number) => {
    isRef.ProjectsRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setClickOn(key);
  };

  const handleFooterRef = (key: number) => {
    isRef.footerRef.current.scrollIntoView({
      behavior: "smooth",
    });
    setClickOn(key);
  };

  return (
    <Container>
      {showTitle && <Title>Mikael Espínola</Title>}

      <Nav>
        <List>
          <Item
            key={1}
            active={(clickedOn === 1).toString()}
            onClick={() => handleHomeRef(1)}
          >
            {lang === "EN" ? "Home" : "Início"}
          </Item>
          <Item
            key={2}
            active={(clickedOn === 2).toString()}
            onClick={() => handleProjectsRef(2)}
          >
            {lang === "EN" ? "Projects" : "Projetos"}
          </Item>
          <Item
            key={3}
            active={(clickedOn === 3).toString()}
            onClick={() => handleFooterRef(3)}
          >
            {lang === "EN" ? "Contacts" : "Contatos"}
          </Item>
        </List>
      </Nav>
    </Container>
  );
}

export default Header;
