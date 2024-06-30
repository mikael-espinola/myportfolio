import { useSelector } from "react-redux";
import { currentLang } from "../redux/langSlice";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { refs } from "../redux/refs";
import { MutableRefObject } from "react";

function Header() {
  const lang = useSelector(currentLang);

  const handleNavigation = (key: string) => {
    const ref = refs[key] as MutableRefObject<HTMLElement | null> | null;
    console.log(ref);
    console.log(refs);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#Home">Mikael Espínola</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                onClick={() => handleNavigation("homeRef")}
              >
                {lang === "EN" ? "Home" : "Início"}
              </Nav.Link>
              <Nav.Link
                href="#projects"
                onClick={() => handleNavigation("projectRef")}
              >
                {lang === "EN" ? "Projects" : "Projetos"}
              </Nav.Link>
              <Nav.Link
                href="#contacts"
                onClick={() => handleNavigation("contactRef")}
              >
                {lang === "EN" ? "Contacts" : "Contatos"}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
