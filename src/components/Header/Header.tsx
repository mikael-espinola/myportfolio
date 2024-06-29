import { useSelector } from "react-redux";
import { currentRef } from "../redux/headerSlice";
import { currentLang } from "../redux/langSlice";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  const isRef = useSelector(currentRef);
  const lang = useSelector(currentLang);

  const handleNavigation = (key: string) => {
    switch (key) {
      case "home":
        isRef.homeRef.current.scrollIntoView({
          behavior: "smooth",
        });
        break;

      case "projects":
        isRef.projectsRef.current.scrollIntoView({
          behavior: "smooth",
        });
        break;

      case "contacts":
        isRef.footerRef.current.scrollIntoView({
          behavior: "smooth",
        });
        break;
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
              <Nav.Link href="#home" onClick={() => handleNavigation("home")}>
                {lang === "EN" ? "Home" : "Início"}
              </Nav.Link>
              <Nav.Link
                href="#projects"
                onClick={() => handleNavigation("projects")}
              >
                {lang === "EN" ? "Projects" : "Projetos"}
              </Nav.Link>
              <Nav.Link
                href="#contacts"
                onClick={() => handleNavigation("contacts")}
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
