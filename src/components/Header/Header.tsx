import { useSelector } from "react-redux";
import { currentRef } from "../redux/headerSlice";
import { currentLang } from "../redux/langSlice";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  const isRef = useSelector(currentRef);
  const lang = useSelector(currentLang);

  const handleHomeRef = (key: number) => {
    isRef.homeRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleProjectsRef = (key: number) => {
    isRef.ProjectsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleFooterRef = (key: number) => {
    isRef.footerRef.current.scrollIntoView({
      behavior: "smooth",
    });
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
              <Nav.Link href="#Home" onClick={() => handleHomeRef(1)}>
                {lang === "EN" ? "Home" : "Início"}
              </Nav.Link>
              <Nav.Link href="#Projects" onClick={() => handleProjectsRef(2)}>
                {lang === "EN" ? "Projects" : "Projetos"}
              </Nav.Link>
              <Nav.Link href="#Contacts" onClick={() => handleFooterRef(3)}>
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
