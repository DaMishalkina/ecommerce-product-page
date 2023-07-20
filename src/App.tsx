import "./App.css"
import {Header} from "./components/Header/Header";
import layoutContent from "./data/layoutContent.json";

function App() {
  return (
      <div className="App">
          <Header label={layoutContent?.shopName} navMenu={layoutContent?.navs} isLogged={true} />
      </div>
  )
}

export default App
