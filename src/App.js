import Footer from "./components/Footer/Index";
import Header from "./components/Header/Index";
import Main from "./components/Main/Index";
import Projects from "./components/ProjectsList/Index";
import Techs from "./components/Techs/Index";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Techs />
      <Projects />
      <Footer />
      <GlobalStyles />
    </div>
  );
}

export default App;
