import React from "react";
import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Homepage from "./pages/homepage";
import Aboutpage from './pages/aboutpage';
import Resumepage from './pages/resumepage'
import Portfoliopage from './pages/portfoliopage'
import Blogpage from './pages/blogpage'
import ContactPage from "./pages/contactpage";
import { Route, Switch } from 'react-router';
import NoMatch from './pages/nomatchpage'
function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/about" exact>
            <Aboutpage />
          </Route>
          <Route path="/resume" exact>
            <Resumepage />
          </Route>
          <Route path="/portfolios" exact>
            <Portfoliopage />
          </Route>
          <Route path="/blogs" exact>
            <Blogpage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </MainContentStyled>
    </div>
  );
}
const MainContentStyled = styled.main`
position: relative;
margin-left: 16.3rem;
min-height: 100vh;
/* background-color: red; */
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
     z-index: -10000;
    justify-content: space-evenly;
    .line-1, .line-2,.line-3,.line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }

  }
`
export default App;
