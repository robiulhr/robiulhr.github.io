import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root{
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
    --cubic-bezier-transition: all 0.4s cubic-bezier(1,-0.2,.25,.95);

}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.1rem;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
}
body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    font-size: inherit;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: 1rem;

}
h1{
    font-size:2rem;
    color: var(--white-color);
    span{
        font-size:3rem
    }
}
span{
    color: var(--primary-color);
}
`;
export default GlobalStyled;