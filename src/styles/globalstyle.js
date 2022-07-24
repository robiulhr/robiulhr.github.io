import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root{
    --background-color:#000;
    --cubic-bezier-transition: all 0.4s cubic-bezier(1,-0.2,.25,.95); 
}
.light-theme{
    --primary-color:#007bff;
    --primary-color-light: #057ff;
    --secondary-color:#6c757d;
    --background-dark-color:#f1f1f1;
    --background-dark-gray:#d9d9d9;
    --border-color:#5b5c5e4d;
     --dark-color:#121212;
    --background-light-color:#f1f1f1;
    --background-light-color-2:rgba(3,127,255,.3);
    --background-light-color-3:#191D2B;
    --white-color:#151515;
    --font-light-color:#464646;
    --font-dark-color:#313131;
    --font-dark-color-2:#151515;
    --sidebar-dark-color:#E4E4E4;
    --scrollbar-bg-color:#383838;
    --scrollbar-thumb-color:#6b6b6b;
    --scrollbar-track-color:#383838;
    --background-color:#000;
    --title-shadow-text-color:#b1b1b161;
}
.dark-theme{
    --primary-color:#007bff;
    --primary-color-light: #057ff;
    --secondary-color:#6c757d;
    --background-dark-color:#10121A;
    --background-dark-gray:#191D2B;
    --border-color:#2e344e;
    --background-light-color:#f1f1f1;
    --background-light-color-2:rgba(3,127,255,.3);
    --background-light-color-3:#191D2B;
    --white-color:#fff;
    --font-light-color:#a2acc4;
    --font-dark-color:#313131;
    --font-dark-color-2:#151515;
    --sidebar-dark-color:#191D2B;
    --scrollbar-bg-color:#383838;
    --scrollbar-thumb-color:#6b6b6b;
    --scrollbar-track-color:#383838;
    --background-color:#000;
    --sidebar-dark-color:#191D2B;
    --title-shadow-text-color:rgba(25,29,43,44);

}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.1rem;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    // user unselectable
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; 
    // user undragable
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    font-size: inherit;
    overflow-x: none !important;
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: 1rem;

}
h1{
    font-size:2rem;
    color: var(--white-color);
    text-transform: capitalize;

    span{
        font-size:3rem
    }
}
span{
    color: var(--primary-color);
}

// hamburger menu section
.hamburger-menu-icon-section{
                position: fixed;
                right: 3%;
                top: 4%;
                z-index: 15;
                padding: 2px 20px;
                display: none;
                background-color: var(--background-light-color-2);
                cursor: pointer;

                svg{
                    font-size: 2rem;
                }
        }


// hide sidebar
.sidebarhide{
        transform: translate(0%);
}

// floating toggler 

.theme{
}
.light-dark-mode{
      position: fixed;
      right: 0%;
      top: 20%;
      background-color: var(--background-light-color-2);
      width: 6.5rem;
      height: 2.5rem;
      z-index: 15;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        display: flex;
        align-items: center;
        font-size: 1.7rem;
        color: var(--white-color);
      }
  }
  @media screen and (max-width: 1200px){
    .hamburger-menu-icon-section{
        display: inline-block;
    }
    .sidebarhide{
        transform: translate(-100%);
    }
}
`;
export default GlobalStyled;