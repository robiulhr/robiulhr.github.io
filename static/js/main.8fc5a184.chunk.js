(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{466:function(n,e,t){"use strict";t.r(e);var i,a=t(3),r=t(99),s=t.n(r),c=t(26),o=t(7),l=t(8),d=t.p+"static/media/img01.2d8284a8.jpg",h=t(0);var b,j,v=l.b.nav(i||(i=Object(o.a)(["\ndisplay: flex;\njustify-content: space-between;\nflex-direction: column;\nalign-items: center;\nheight: 100%;\nwidth: 100%;\nborder-right: 1px solid var(--border-color);\n    .avatar{\n        width: 100%;\n        border-bottom: 1px solid var(--border-color);\n        text-align: center;\n        padding: 1rem 0;\n        img{\n            width: 70%;\n            border-radius: 50%;\n            border: 8px solid var(--border-color);\n        }\n    }\n    .nav-items{\n        width: 100%;\n        text-align:center;\n        .active-class{\n            background-color: var(--primary-color);\n        }\n        li{\n            display: block;\n            a{\n                display:block;\n                padding: .45rem 0;\n                position: relative;\n                z-index: 10;\n                text-transform: uppercase;\n                transition: all .4s ease-in-out;\n                font-weight: 600;\n                letter-spacing: 1px;\n                    &:hover{\n                        cursor: pointer;\n                        color: var(--primary-color);\n                    }\n                &::before{\n                    content: '';\n                    position: absolute;\n                    bottom: 0;\n                    left: 0;\n                    width: 0%;\n                    height: 50%;\n                    background-color:var(--primary-color) ;\n                    transition: var( --cubic-bezier-transition);\n                    z-index: 3;\n                    opacity: 0.21;\n                }\n            }\n            a:hover::before{\n                width: 100%;\n                height: 100%;\n            }\n        }\n    }\nfooter{\n    border-top: 1px solid var(--border-color);\n    width: 100%;\n    p{\n        padding: 2rem 0;\n        font-size: 1rem;\n        display: block;\n        text-align: center;\n    }\n}\n"]))),f=function(){return Object(h.jsxs)(v,{children:[Object(h.jsx)("div",{className:"avatar",children:Object(h.jsx)("img",{src:d,alt:""})}),Object(h.jsxs)("ul",{className:"nav-items",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(c.b,{to:"/",activeClassName:"active-class",exact:!0,children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(c.b,{to:"/about",activeClassName:"active-class",exact:!0,children:"About"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(c.b,{to:"/resume",activeClassName:"active-class",exact:!0,children:"Resume"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(c.b,{to:"/portfolios",activeClassName:"active-class",exact:!0,children:"Portfolio"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(c.b,{to:"/blogs",activeClassName:"active-class",exact:!0,children:"Blogs"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(c.b,{to:"/contact",activeClassName:"active-class",exact:!0,children:"Contacts"})})]}),Object(h.jsx)("footer",{className:"footer",children:Object(h.jsx)("p",{children:"@ 2021 My  portfolio Website"})})]})},m=l.b.div(b||(b=Object(o.a)(["\n    width : 16.3rem;\n    position: fixed;\n    height:  100vh;\n    background-color: var(--sidebar-dark-color);\n"]))),g=function(){return Object(h.jsx)(m,{children:Object(h.jsx)(f,{})})},p=t(103),x=t.n(p),u=function(){return Object(h.jsx)(x.a,{width:"100%",height:"100vh",params:{particles:{number:{value:156,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:3},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:0,random:!0,anim:{enable:!1,speed:20,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.3,width:.5},move:{enable:!0,speed:2.827296486924183,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:127.44926547616141,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}})},O=t(105),k=t.n(O),w=t(106),y=t.n(w),N=t(107),z=t.n(N),S=t(104),C=t.n(S);var T,A,E,D=l.b.header(j||(j=Object(o.a)(["\nwidth: 100%;\nheight: 100vh;\nposition: relative;\n    .p-particles-js{\n        position: absolute;\n        top: 0;\n        left: 0;\n    }\n    .typography{\n        position: absolute;\n        top: 50%;\n       left: 50%;\n       transform:translate(-50%,-50%) ;\n       text-align:center;\n       width: 80%;\n       .waviy {\n            position: relative;\n            -webkit-box-reflect: below -10px linear-gradient(transparent, rgba(0,0,0,.2));\n            margin-bottom: 1.5rem;\n            }\n       .icons{\n           display: flex;\n           justify-content: center;\n            margin:1rem;\n           .icon{\n               border: 2px solid var(--border-color);\n               display: inline-block;\n               align-items: center;\n               justify-content: center;\n               border-radius: 50%;\n               transition: all .4s ease-in-out;\n                cursor: pointer;\n                margin:.5rem;\n\n               &:hover{\n                   border:2px solid var(--primary-color);\n                   color:var(--primary-color);\n\n               }\n               &::not(:last-child){\n                   margin-right:1rem;\n\n               }\n              svg{\n                   margin: .5rem .6rem .2rem .6rem;\n               }\n           }\n           .i-youtube{\n               &:hover{\n                   border:2px solid red;\n                   color:red;\n               }\n           }\n           .i-github{\n               &:hover{\n                   border:2px solid #5f4687;\n                   color:#5f4687;\n               }\n           }\n       }\n    }\n"]))),_=function(){var n=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=new C.a(n.current,{strings:["Robiul Hasan","A Web Developer","A Web Designer"],startDelay:300,typeSpeed:100,backSpeed:100,backDelay:100});return function(){e.destroy()}}),[]),Object(h.jsxs)(D,{children:[Object(h.jsx)("div",{className:"p-particles-js",children:Object(h.jsx)(u,{})}),Object(h.jsxs)("div",{className:"typography",children:[Object(h.jsxs)("h1",{className:"waviy",children:["Hello I'm ",Object(h.jsx)("span",{ref:n})]}),Object(h.jsxs)("div",{className:"icons",children:[Object(h.jsx)("a",{href:"https://www.facebook.com/profile.php?id=100015680890201",className:"icon i-facebook",children:Object(h.jsx)(k.a,{})}),Object(h.jsx)("a",{href:"https://github.com/robiulhasanrohan",className:"icon i-github",children:Object(h.jsx)(y.a,{})}),Object(h.jsx)("a",{href:"https://www.youtube.com/",className:"icon i-youtube",children:Object(h.jsx)(z.a,{})})]})]})]})},R=l.b.div(T||(T=Object(o.a)(["\npadding: 5rem;\n"]))),B=l.b.div(A||(A=Object(o.a)(["\npadding: 5rem 0;\n"])));var L,H=l.b.div(E||(E=Object(o.a)(["\nposition: relative;\nh2{\n    color: var(--white-color);\n    font-size: 2.1rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    position: relative;\n    padding-bottom: .7rem;\n    &::before{\n        content: '';\n        position: absolute;\n        bottom: 0;\n        width: 6rem;\n        height: .33rem;\n        background-color: var(--background-light-color-2);\n        border-radius: 15px;\n    }\n     &::after{\n        content: '';\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 3rem;\n        height: .33rem;\n        background-color: var(--primary-color );\n        border-radius: 15px;\n    }\n    span{\n        font-weight: 700;\n        color: rgba(25,29,43,44);\n        font-size: 5rem;\n        position: absolute;\n        left: 3%;\n        top: 20%;\n        z-index: -1;\n    }\n}\n"]))),F=function(n){var e=n.title,t=n.span;return Object(h.jsx)(H,{children:Object(h.jsxs)("h2",{children:[e,Object(h.jsx)("b",{children:Object(h.jsx)("span",{children:t})})]})})},U=t.p+"static/media/img.aaf9c7bb.jpg";var J,M=l.b.a(L||(L=Object(o.a)(["\n    background-color: var(--primary-color);\n    padding: .5rem 2rem;\n    color: white;\n    cursor:pointer;\n    display: inline-block;\n    font-size:inherit;\n    text-transform:uppercase;\n    position: relative;\n    transition: all .4s ease-in-out;\n    &::after{\n        content: '';\n        width: 0%;\n        position: absolute;\n        height: .2rem;\n        background: var(--white-color);\n        transition:  var(--cubic-bezier-transition);\n        left: 0;\n        right: 0;\n        bottom: 0;\n        margin: auto;\n    }\n    &:hover::after{\n         width: 100%;\n    }\n"]))),W=function(n){var e=n.title;return Object(h.jsx)(M,{children:e})};var Y,I=l.b.div(J||(J=Object(o.a)(["\nmargin-top: 5rem;\ndisplay: flex;\njustify-content: space-between;\n.left-content{\n    width: 50%;\n    img{\n        width: 90%;\n        object-fit: cover;\n    }\n}\n.right-content{\n    width: 50%;\n    h4{\n        font-size: 1.4rem;\n        color: var(--white-color);\n        span{\n            font-size: 2rem;\n        }\n    }\n    .paragraph{\n        padding: .7rem 0;\n        font-size: 1rem;\n\n    }\n    .about-info{\n        display: flex;\n        padding-bottom: 1.4rem;\n        .info-title{\n            padding-right: 3rem;\n            p{\n                font-weight: 400;\n                font-size: 1rem;\n\n            }\n        }\n        .info-title, .info{\n            p{\n                padding:.3rem 0;\n                font-size: 1rem;\n\n            }\n        }\n    }\n}\n"]))),P=function(){return Object(h.jsxs)(I,{children:[Object(h.jsx)("div",{className:"left-content",children:Object(h.jsx)("img",{src:U,alt:"resume img"})}),Object(h.jsxs)("div",{className:"right-content",children:[Object(h.jsx)("div",{className:"sub-title",children:Object(h.jsxs)("h4",{children:["I am ",Object(h.jsx)("span",{children:"Lorem ipsum"})]})}),Object(h.jsx)("p",{className:"paragraph",children:"lorem ipsum dolor sit amet convfvriv ofbuvfb ioicv mkhifefc obfhgugfrkof hiovfgriofvn ifgjibvkvn goibhvnkmvkdghugvmckvmrihgivlvm oiufhgfmbc uhgvncb uirv j b   rvgbui oivu fjkldh cfrf  uiv f iournv rvjiue."}),Object(h.jsxs)("div",{className:"about-info",children:[Object(h.jsxs)("div",{className:"info-title",children:[Object(h.jsx)("p",{children:"Full Name"}),Object(h.jsx)("p",{children:"Age"}),Object(h.jsx)("p",{children:"Nationality"}),Object(h.jsx)("p",{children:"Language"}),Object(h.jsx)("p",{children:"Location"}),Object(h.jsx)("p",{children:"Services"})]}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("p",{children:"Lorem ipsum"}),Object(h.jsx)("p",{children:"22"}),Object(h.jsx)("p",{children:"spanish"}),Object(h.jsx)("p",{children:"Spanish, Franch,English"}),Object(h.jsx)("p",{children:"London"}),Object(h.jsx)("p",{children:"Freelance"})]})]}),Object(h.jsx)(W,{title:"Download CV"})]})]})};var V,G=l.b.div(Y||(Y=Object(o.a)(["\n    background-color:var(--background-dark-gray);\n    border-left:1px solid var(--border-color);\n    border-top:8px solid var(--border-color);\n    border-right:1px solid var(--border-color);\n    border-bottom:1px solid var(--border-color);\n    transition: all .4s ease-in-out;\n    &:hover{\n    border-top:8px solid var(--primary-color);\n    transform: translateY(3px)\n     \n    }\n\n    div.container{\n         padding: 1.2rem;\n            img{\n                width:8rem;\n            }\n            h4{\n                color: var(--white-color);\n                font-size:1.6rem;\n                padding: 1rem 0 ;\n                position: relative;\n                &::after{\n                    content: '';\n                    width: 2rem;\n                    background: var(--border-color);\n                    height:4px;\n                    position:absolute;\n                    left:0;\n                    bottom: 0;\n                    border-radius: 10px ;\n                   \n                }\n            }\n            p{\n                 padding: .8rem;\n            }\n    }\n\n"]))),X=function(n){var e=n.image,t=n.title,i=n.paragraph;return Object(h.jsx)(G,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("img",{src:e,alt:""}),Object(h.jsx)("h4",{children:t}),Object(h.jsx)("p",{children:i})]})})},q=t.p+"static/media/logo.570c6060.jpg";var K,Q=l.b.section(V||(V=Object(o.a)(["\n    .services{\n        margin-top:5rem;\n        display:flex;\n        justify-content:space-between;\n        .mid-cart{\n            margin: 0 1.2rem;\n        }\n    }\n"]))),Z=function(){return Object(h.jsx)(B,{children:Object(h.jsxs)(Q,{children:[Object(h.jsx)(F,{title:"Services",span:"services"}),Object(h.jsxs)("div",{className:"services",children:[Object(h.jsx)(X,{image:q,title:"web design",paragraph:"Lorem ipsum kdvhwojf dfhisvx ugv odvbs nfhsvn "}),Object(h.jsx)("div",{className:"mid-cart",children:Object(h.jsx)(X,{image:q,title:"web Development",paragraph:"Lorem ipsum kdvhwojf dfhisvx ugv odvbs nfhsvn "})}),Object(h.jsx)(X,{image:q,title:"web design",paragraph:"Lorem ipsum kdvhwojf dfhisvx ugv odvbs nfhsvn "})]})]})})};var $,nn=l.b.div(K||(K=Object(o.a)(["\nheight: 15vh;\npadding: 2rem 1rem;\nborder-left: 6px solid var(--border-color);\nbackground: var(--background-dark-gray);\nposition: relative;\nwidth: 50%;\npadding: 0.5rem;\n&:not(:first-child){\n    margin-left:1rem;\n}\n&::after{\n    content: '';\n    left: 2rem;\n    border-width: .8rem;\n    top: 100%;\n    border-style:solid;\n    border-color:var(--background-dark-gray) transparent transparent var(--background-dark-gray);\n}\np{\n    padding: 0.5rem;\n\n}\n"]))),en=function(n){var e=n.text;return Object(h.jsx)(nn,{children:Object(h.jsx)("p",{children:e})})};var tn,an=l.b.section($||($=Object(o.a)(["\n.reviews{\n    display: flex;\n}\n"]))),rn=function(){return Object(h.jsxs)(an,{children:[Object(h.jsx)(F,{title:"Reviews",span:"Reviews"}),Object(h.jsx)(B,{children:Object(h.jsxs)("div",{className:"reviews",children:[Object(h.jsx)(en,{text:"flbhfug ifugdv dfhiugdfvn fdigh dgbfv irvhvcv fhkb mv uiwkfmuegh;fbmn fdghflb iughfbnjkghgbdfbn "}),Object(h.jsx)(en,{text:"flbhfug ifugdv dfhiugdfvn fdigh dgbfv irvhvcv fhkb mv uiwkfmuegh;fbmn fdghflb iughfbnjkghgbdfbn "})]})})]})};var sn,cn=l.b.section(tn||(tn=Object(o.a)(["\n\n"]))),on=function(){return Object(h.jsx)(R,{children:Object(h.jsxs)(cn,{children:[Object(h.jsx)(F,{title:"About Me",span:"About Me"}),Object(h.jsx)(P,{}),Object(h.jsx)(Z,{}),Object(h.jsx)(rn,{})]})})};var ln,dn=l.b.div(sn||(sn=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    p{\n        padding-right: 1rem;\n         svg{\n        font-size: 3rem;\n    }\n    }\n   \n    h3{\n        color: var(--white-color);\n        font-size: 2rem;\n    }\n"]))),hn=function(n){var e=n.icon,t=n.title;return Object(h.jsxs)(dn,{children:[Object(h.jsx)("p",{children:e}),Object(h.jsx)("h3",{children:t})]})},bn=t(108),jn=t.n(bn);var vn,fn=l.b.div(ln||(ln=Object(o.a)(['\n\ndisplay: flex;\n&:not(:last-child){\n    padding-bottom: 3rem;\n}\n.left-content{\n    width: 50%;\n    padding-left: 20px;\n    position: relative;\n    &::before{\n        content: "";\n        position: absolute;\n        left: -10px;\n        top: 5px;\n        height: 15px;\n        width: 15px;\n\n\n        border-radius: 50%;\n        border: 2px solid var(--border-color);\n        background-color: var(--background-dark-color);\n    }\n    p{\n        display: inline-block;\n    }\n}\n.right-content{\n    padding-left: 5rem;\n    position: relative;\n    &::before{\n        content:"";\n        position: absolute;\n        left: 0;\n        top: 15px;\n        height:2px;\n\n        width: 3rem;\n        background-color: var(--border-color);\n    }\n    h5{\n        color:var(--primary-color);\n        font-size: 2rem;\n        padding-bottom: .4rem;\n\n    }\n    h6{\n        padding-bottom: .6rem;\n        font-size: 1.4rem;\n    }\n}\n']))),mn=function(n){var e=n.year,t=n.title,i=n.subTitle,a=n.text;return Object(h.jsxs)(fn,{children:[Object(h.jsx)("div",{className:"left-content",children:Object(h.jsx)("p",{children:e})}),Object(h.jsxs)("div",{className:"right-content",children:[Object(h.jsx)("h5",{children:t}),Object(h.jsx)("h6",{children:i}),Object(h.jsx)("p",{children:a})]})]})},gn=t(109),pn=t.n(gn);var xn,un=l.b.section(vn||(vn=Object(o.a)(["\n.small-title{\n    padding-bottom: 3rem;\n}\n.small-title-margin{\n    margin-top: 4rem;\n}\n.resume-content{\n    border-left: 2px solid var(--border-color);\n}\n"]))),On=function(){var n=Object(h.jsx)(jn.a,{}),e=Object(h.jsx)(pn.a,{});return Object(h.jsxs)(un,{children:[Object(h.jsx)(F,{title:"Resume",span:"Resume"}),Object(h.jsxs)(B,{children:[Object(h.jsx)("div",{className:"small-title",children:Object(h.jsx)(hn,{icon:n,title:"Working Experience"})}),Object(h.jsxs)("div",{className:"resume-content",children:[Object(h.jsx)(mn,{year:"2015 - 2020",title:"Computer Science",subTitle:"Sussex University",text:"kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn hkjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h"}),Object(h.jsx)(mn,{year:"2015 - 2020",title:"Computer Science",subTitle:"Sussex University",text:"kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn hkjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h"}),Object(h.jsx)(mn,{year:"2015 - 2020",title:"Computer Science",subTitle:"Sussex University",text:"kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn hkjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h"})]}),Object(h.jsx)("div",{className:"small-title small-title-margin",children:Object(h.jsx)(hn,{icon:e,title:"Working Experience"})}),Object(h.jsxs)("div",{className:"resume-content",children:[Object(h.jsx)(mn,{year:"2015 - 2020",title:"Computer Science",subTitle:"Sussex University",text:"kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn hkjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h"}),Object(h.jsx)(mn,{year:"2015 - 2020",title:"Computer Science",subTitle:"Sussex University",text:"kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn hkjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h"}),Object(h.jsx)(mn,{year:"2015 - 2020",title:"Computer Science",subTitle:"Sussex University",text:"kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv kjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn hkjsdfg ahafncnak vnsd ghalkmv afhslkcm asdhfa;snv afhv nvausdfhsvvifszxvnj aukfhn kg aigh asdfblkvn h"})]})]})]})};var kn,wn=l.b.div(xn||(xn=Object(o.a)(["\n.progress-bar{\n    display: flex;\n    align-items: center;\n    p{\n        padding-right: 1rem;\n    }\n    .progress{\n        position: relative;\n        width: 100%;\n        height: .4rem;\n        background-color: var(--border-color);\n        span{\n            position: absolute;\n            left: 0;\n            bottom: 0;\n            height: 100%;\n            background-color: var(--primary-color);\n        }\n\n    }\n}\n"]))),yn=function(n){var e=n.title,t=n.width,i=n.text;return Object(h.jsxs)(wn,{children:[Object(h.jsx)("h6",{children:e}),Object(h.jsxs)("div",{className:"progress-bar",children:[Object(h.jsx)("p",{children:i}),Object(h.jsx)("div",{className:"progress",children:Object(h.jsx)("span",{style:{width:t}})})]})]})};var Nn=l.b.div(kn||(kn=Object(o.a)(["\n    .skills{\n        display: grid;\n        grid-template-columns: repeat(2,1fr);\n        grid-row-gap: 2rem;\n        grid-column-gap: 2rem;\n\n    }\n"]))),zn=function(){return Object(h.jsxs)(Nn,{children:[Object(h.jsx)(F,{title:"Skills",span:"Skills"}),Object(h.jsx)(B,{children:Object(h.jsxs)("div",{className:"skills",children:[Object(h.jsx)(yn,{title:"HTML 5",width:"70%",text:"70%"}),Object(h.jsx)(yn,{title:"CSS",width:"80%",text:"80%"}),Object(h.jsx)(yn,{title:"BOOTSTRAP",width:"95%",text:"95%"}),Object(h.jsx)(yn,{title:"JAVASCRIPT",width:"50%",text:"50%"}),Object(h.jsx)(yn,{title:"REACT JS",width:"40%",text:"40%"}),Object(h.jsx)(yn,{title:"NODE JS",width:"30%",text:"30%"}),Object(h.jsx)(yn,{title:"C",width:"70%",text:"70%"})]})})]})};var Sn=function(){return Object(h.jsxs)(R,{children:[Object(h.jsx)(zn,{}),Object(h.jsx)(On,{})]})};var Cn,Tn=function(){return Object(h.jsx)("div",{})},An=[{id:1,title:"How To Tse Seo Efficiently",date:"01",month:"April",image:t.p+"static/media/blog1.15ec7242.jpg",link:"https://www.google.com/"},{id:2,title:"How To Tse Seo Efficiently",date:"01",month:"April",image:t.p+"static/media/blog2.1fa97647.jpg",link:"https://www.google.com/"},{id:3,title:"How To Tse Seo Efficiently",date:"01",month:"April",image:t.p+"static/media/blog3.da70f058.jpg",link:"https://www.google.com/"},{id:4,title:"How To Tse Seo Efficiently",date:"01",month:"April",image:t.p+"static/media/blog4.2161c5ab.jpg",link:"https://www.google.com/"}];var En,Dn=l.b.div(Cn||(Cn=Object(o.a)(["\n.blog{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-column-gap: 2rem;\n    grid-row-gap: 3rem;\n    .blog-item{\n    background-color: var(--background-dark-gray);\n    padding: 2rem 1rem;\n    }\n    .image{\n        width: 100%;\n        height: 90%;\n        overflow: hidden;\n        img{\n            width: 100%;\n            height: 90%;\n            object-fit: cover;\n            transition: all .4s ease-in-out;\n            &:hover{\n                cursor: pointer;\n                transform: rotate(3deg) scale(1.1);\n            }\n        }\n    }\n    .title{\n        a{\n         font-size: 1rem;\n        padding: .5rem 0;\n        color: var( --white-color);\n        cursor: pointer;\n        transition: all .4s ease-in-out;\n        z-index: 1;\n        &:hover{\n            color: var(--primary-color);\n        }\n        }\n       \n    }\n}\n"]))),_n=function(){return Object(h.jsx)(R,{children:Object(h.jsxs)(Dn,{children:[Object(h.jsx)(F,{title:"Blogs",span:"Blogs"}),Object(h.jsx)(B,{className:"blog",children:An.map((function(n){return Object(h.jsxs)("div",{className:"blog-item",children:[Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{src:n.image,alt:""})}),Object(h.jsx)("div",{className:"title",children:Object(h.jsx)("a",{href:n.link,children:n.title})})]},n.id)}))})]})})},Rn=t(110),Bn=t.n(Rn),Ln=t(111),Hn=t.n(Ln),Fn=t(112),Un=t.n(Fn);var Jn,Mn=l.b.div(En||(En=Object(o.a)(["\n    padding: 1.5rem 2rem;\n    background-color: var(--background-dark-gray);\n    display: flex;\n    align-items: center;\n    &:not(::last-child){\n    margin-bottom: 2.5rem;\n    }\n    .left-content{\n        padding: 1.5rem;\n        border: 1px solid var(--border-color);\n        font-size: 2rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 1.5rem;\n        svg{\n            font-size: 2.3rem;\n        }\n\n    }\n    .right-content{\n        h6{\n            color: var(--white-color);\n            font-size: 1.2rem;\n            padding-bottom: .6rem;\n        }\n        p{\n            padding: .1rem 0;\n        }\n    }\n"]))),Wn=function(n){var e=n.icon,t=n.title,i=n.contact1,a=n.contact2;return Object(h.jsxs)(Mn,{children:[Object(h.jsx)("div",{className:"left-content",children:Object(h.jsx)("p",{children:e})}),Object(h.jsxs)("div",{className:"right-content",children:[Object(h.jsx)("h6",{children:t}),Object(h.jsx)("p",{children:i}),Object(h.jsx)("p",{children:a})]})]})};var Yn,In=l.b.section(Jn||(Jn=Object(o.a)(["\n.Contact-section{\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-column-gap: 2rem;\n    .right-content{\n        display: flex;\n        justify-content: space-between;\n        flex-direction: column;\n    }\n    .contact-title{\n        h4{\n            color: var(--white-color);\n            padding: 1rem 0;\n            font-size: 1.8rem;\n        }\n    }\n    .form{\n        width: 100%;\n        .form-feild{\n            margin-top: 2rem;\n            position: relative;\n            width: 100%;\n            label{\n                position: absolute;\n                left: 20px;\n                top: -19px;\n                display: inline-block;\n                background-color: var(--background-dark-color);\n                padding: 0 .5rem;\n                color: inherit;\n            }\n            input{\n                border: 1px solid var(--border-color);\n                outline: none;\n                background: transparent;\n                height: 50px;\n                padding: 0 15px;\n                width: 100%;\n                color: inherit;\n            }\n            textarea{\n                background-color: transparent;\n                border: 1px solid var(--border-color);\n                outline: none;\n                color: inherit;\n                width: 100%;\n                max-width: 100%;\n                padding: .8rem 1rem;\n                resize: inherit;\n            }\n        }\n        \n    }\n}\n"]))),Pn=function(){var n=Object(h.jsx)(Bn.a,{}),e=Object(h.jsx)(Hn.a,{}),t=Object(h.jsx)(Un.a,{});return Object(h.jsxs)(R,{children:[Object(h.jsx)(F,{title:"Contact",span:"Contact"}),Object(h.jsx)(In,{children:Object(h.jsxs)(B,{className:"Contact-section",children:[Object(h.jsxs)("div",{className:"left-content",children:[Object(h.jsx)("div",{className:"contact-title",children:Object(h.jsx)("h4",{children:"Get in Touch"})}),Object(h.jsxs)("form",{className:"form",children:[Object(h.jsxs)("div",{className:"form-feild",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Enter Your Name"}),Object(h.jsx)("input",{type:"text",id:"name",autoComplete:"off"})]}),Object(h.jsxs)("div",{className:"form-feild",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Enter Your Email"}),Object(h.jsx)("input",{type:"email",id:"email",autoComplete:"off"})]}),Object(h.jsxs)("div",{className:"form-feild",children:[Object(h.jsx)("label",{htmlFor:"subject",children:"Enter Your subject"}),Object(h.jsx)("input",{type:"text",id:"subject",autoComplete:"off"})]}),Object(h.jsxs)("div",{className:"form-feild",children:[Object(h.jsx)("label",{htmlFor:"",children:"Enter your Massege"}),Object(h.jsx)("textarea",{name:"textarea",id:"textarea",cols:"30",row:"10",autoComplete:"off"})]}),Object(h.jsx)("div",{className:"form-feild",children:Object(h.jsx)(W,{title:"Submit"})})]})]}),Object(h.jsxs)("div",{className:"right-content",children:[Object(h.jsx)(Wn,{icon:n,title:"phone",contact1:"0798979879023890",contact2:"+789437130987"}),Object(h.jsx)(Wn,{icon:e,title:"phone",contact1:"0798979879023890",contact2:"+789437130987"}),Object(h.jsx)(Wn,{icon:t,title:"phone",contact1:"0798979879023890",contact2:"+789437130987"})]})]})})]})},Vn=t(12);var Gn,Xn=l.b.div(Yn||(Yn=Object(o.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n    h1{\n        font-size: 5rem;\n    }\n"]))),qn=function(){return Object(h.jsx)(Xn,{children:Object(h.jsxs)("h1",{children:["404 ",Object(h.jsx)("span",{children:"Page not found"})]})})};var Kn,Qn=l.b.main(Gn||(Gn=Object(o.a)(["\nposition: relative;\nmargin-left: 16.3rem;\nmin-height: 100vh;\n/* background-color: red; */\n  .lines{\n    position: absolute;\n    min-height: 100%;\n    width: 100%;\n    display: flex;\n     z-index: -10000;\n    justify-content: space-evenly;\n    .line-1, .line-2,.line-3,.line-4{\n      width: 1px;\n      min-height: 100vh;\n      background-color: var(--border-color);\n    }\n\n  }\n"]))),Zn=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(g,{}),Object(h.jsxs)(Qn,{children:[Object(h.jsxs)("div",{className:"lines",children:[Object(h.jsx)("div",{className:"line-1"}),Object(h.jsx)("div",{className:"line-2"}),Object(h.jsx)("div",{className:"line-3"}),Object(h.jsx)("div",{className:"line-4"})]}),Object(h.jsxs)(Vn.c,{children:[Object(h.jsx)(Vn.a,{path:"/",exact:!0,children:Object(h.jsx)(_,{})}),Object(h.jsx)(Vn.a,{path:"/about",exact:!0,children:Object(h.jsx)(on,{})}),Object(h.jsx)(Vn.a,{path:"/resume",exact:!0,children:Object(h.jsx)(Sn,{})}),Object(h.jsx)(Vn.a,{path:"/portfolios",exact:!0,children:Object(h.jsx)(Tn,{})}),Object(h.jsx)(Vn.a,{path:"/blogs",exact:!0,children:Object(h.jsx)(_n,{})}),Object(h.jsx)(Vn.a,{path:"/contact",exact:!0,children:Object(h.jsx)(Pn,{})}),Object(h.jsx)(Vn.a,{path:"*",children:Object(h.jsx)(qn,{})})]})]})]})},$n=Object(l.a)(Kn||(Kn=Object(o.a)(["\n:root{\n    --primary-color:#007bff;\n    --primary-color-light: #057ff;\n    --secondary-color:#6c757d;\n    --background-dark-color:#10121A;\n    --background-dark-gray:#191D2B;\n    --border-color:#2e344e;\n    --background-light-color:#f1f1f1;\n    --background-light-color-2:rgba(3,127,255,.3);\n    --background-light-color-3:#191D2B;\n    --white-color:#fff;\n    --font-light-color:#a2acc4;\n    --font-dark-color:#313131;\n    --font-dark-color-2:#151515;\n    --sidebar-dark-color:#191D2B;\n    --scrollbar-bg-color:#383838;\n    --scrollbar-thumb-color:#6b6b6b;\n    --scrollbar-track-color:#383838;\n    --background-color:#000;\n    --sidebar-dark-color:#191D2B;\n    --cubic-bezier-transition: all 0.4s cubic-bezier(1,-0.2,.25,.95);\n\n}\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-size: 1.1rem;\n    list-style: none;\n    text-decoration: none;\n    font-family: 'Nunito', sans-serif;\n}\nbody{\n    background-color: var(--background-dark-color);\n    color: var(--font-light-color);\n    font-size: inherit;\n}\na{\n    font-family: inherit;\n    color: inherit;\n    font-size: 1rem;\n\n}\nh1{\n    font-size:2rem;\n    color: var(--white-color);\n    span{\n        font-size:3rem\n    }\n}\nspan{\n    color: var(--primary-color);\n}\n"]))),ne=Object(h.jsxs)("div",{children:[Object(h.jsx)($n,{}),Object(h.jsx)(c.a,{children:Object(h.jsx)(Zn,{})})]});s.a.render(ne,document.getElementById("root"))}},[[466,1,2]]]);
//# sourceMappingURL=main.8fc5a184.chunk.js.map