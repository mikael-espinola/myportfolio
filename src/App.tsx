import { Container } from "./styles";
import { GlobalStyle } from "./GlobalStyles";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
      <GlobalStyle />
    </Container>
  );
}

export default App;
