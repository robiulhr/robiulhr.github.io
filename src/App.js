import React,{useState,useEffect} from "react";
import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Homepage from "./pages/homepage";
import Aboutpage from './pages/aboutpage';
import Resumepage from './pages/resumepage'
import Portfoliopage from './pages/portfoliopage'
import Blogpage from './pages/blogpage'
import ContactPage from "./pages/contactpage";
import { Route, Switch as Switching} from 'react-router';
import NoMatch from './pages/nomatchpage';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Switch from '@mui/material/Switch';
import MenuIcon from '@mui/icons-material/Menu';



function App() {
  const [theme,setTheme ] = useState("dark-theme");
  const [checked,setChecked] = useState(false);
  const [sidebarStatus,setSideBarStatus] = useState(true);
  useEffect(() => {
    document.documentElement.className = theme;

  }, [theme]);

  const sideBarOpenClose= ()=> sidebarStatus? setSideBarStatus(false): setSideBarStatus(true);
  const themeToggler=()=>{
    if(theme==="light-theme"){
      setTheme("dark-theme");
      setChecked(false)
    }else{
      setTheme("light-theme");
      setChecked(true)
    }
  }

  return (
    <div className="App">

      <Sidebar  sidebarStatus={sidebarStatus} />
      <div className="hamburger-menu-icon-section" onClick={sideBarOpenClose}>
            <MenuIcon/>
        </div>
      <div className="theme">
        <div className="light-dark-mode">
            <div className="light-content">
              <Brightness4Icon/>
            </div>
            <div className="night-content">
            <Switch
              checked={checked}
              onClick={themeToggler}
              inputProps={{ 'aria-label': 'controlled' }}
              size="medium"
            />
            </div>
          </div>
      </div>
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switching>
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
        </Switching>
      </MainContentStyled>
    </div>
  );
}
const MainContentStyled = styled.main`
position: relative;
margin-left: 16.3rem;
min-height: 100vh;

  
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
  @media screen and (max-width: 1200px){
  margin-left: 0;

}
`
export default App;
