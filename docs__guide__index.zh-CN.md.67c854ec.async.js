"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[6981],{55354:function(g,r,_){_.r(r);var f=_(2031),l=_(17635),d=_(12530),c=_(38674),o=_(44613),t=_(81160),v=_(68249),x=_(79649),s=_(87052),p=_(50959),e=_(11527);function u(){var m=(0,s.eL)(),n=m.texts;return(0,e.jsx)(s.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("h1",{id:"ant-design-web3",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#ant-design-web3",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Ant Design Web3"]})}),(0,e.jsx)(d.Z,{type:"warning",children:(0,e.jsxs)("p",{children:[n[0].value,(0,e.jsx)("em",{children:n[1].value}),n[2].value,(0,e.jsx)("a",{href:"https://github.com/ant-design/ant-design-web3/issues",children:n[3].value}),n[4].value]})}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("p",{children:[n[5].value,(0,e.jsx)("a",{href:"https://ant.design/index-cn",children:n[6].value}),n[7].value]}),(0,e.jsx)("p",{children:n[8].value}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[n[9].value,(0,e.jsx)("code",{children:n[10].value}),n[11].value,(0,e.jsx)("code",{children:n[12].value}),n[13].value,(0,e.jsx)("code",{children:n[14].value}),n[15].value,(0,e.jsx)("a",{href:"https://docs.ethers.org/v6/",children:n[16].value}),n[17].value,(0,e.jsx)("a",{href:"https://viem.sh/",children:n[18].value}),n[19].value,(0,e.jsx)("a",{href:"https://web3js.org/",children:n[20].value}),n[21].value]}),(0,e.jsxs)("li",{children:[n[22].value,(0,e.jsx)("code",{children:n[23].value}),n[24].value,(0,e.jsx)("code",{children:n[25].value}),n[26].value,(0,e.jsx)("a",{href:"https://wagmi.sh/",children:n[27].value}),n[28].value]}),(0,e.jsxs)("li",{children:[n[29].value,(0,e.jsx)("code",{children:n[30].value}),n[31].value,(0,e.jsx)(s.rU,{to:"/zh-CN/guide/adapter",children:n[32].value}),n[33].value]})]}),(0,e.jsxs)("p",{children:[n[34].value,(0,e.jsx)("code",{children:n[35].value}),n[36].value]})]}),(0,e.jsx)(s.Dl,{demo:{id:"docs-guide-demo-guide"},previewerProps:{filename:"docs/guide/demos/guide.tsx"}}),(0,e.jsx)("div",{className:"markdown",children:(0,e.jsxs)("p",{children:[n[37].value,(0,e.jsx)(s.rU,{to:"/zh-CN/guide/quick-start",children:n[38].value}),n[39].value]})})]})})}r.default=u},79649:function(g,r,_){_.d(r,{Z:function(){return y}});var f=_(92935),l=_.n(f),d=_(50959),c=_(77690),o=_(48582),t=_(11527),v,x=function(){var a=(0,c.Fg)(),i=(0,c.vJ)(v||(v=l()([`
    ul.anticons-list {
      margin: 10px 0;
      overflow: hidden;
      direction: ltr;
      list-style: none;

      li {
        position: relative;
        float: left;
        width: 16.66%;
        height: 100px;
        margin: 3px 0;
        padding: 10px 0 0;
        overflow: hidden;
        color: #555;
        text-align: center;
        list-style: none;
        background-color: inherit;
        border-radius: 4px;
        cursor: pointer;
        transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

        .rtl & {
          margin: 3px 0;
          padding: 10px 0 0;
        }

        .anticon {
          margin: 12px 0 8px;
          font-size: 36px;
          transition: transform 0.3s ease-in-out;
          will-change: transform;
        }

        .anticon-class {
          display: block;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
            monospace;
          white-space: nowrap;
          text-align: center;
          transform: scale(0.83);

          .ant-badge {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            transition: color 0.3s ease-in-out;
          }
        }

        &:hover {
          color: #fff;
          background-color: `,`;

          .anticon {
            transform: scale(1.4);
          }

          .ant-badge {
            color: #fff;
          }
        }

        &.CircleFilled .anticon {
          border-radius: 50%;
        }

        &.CircleFilled:hover {
          color: #000;

          .anticon {
            color: #000;
            background-color: #000;
          }
        }

        &.isWhite .anticon {
          background-color: #000;
        }

        &.copied:hover {
          color: rgba(255, 255, 255, 0.2);
        }

        &::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #fff;
          line-height: 110px;
          text-align: center;
          background: #1677ff;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
          content: 'Copied!';
        }

        &.copied::after {
          opacity: 1;
        }
      }
    }

    .copied-code {
      padding: 2px 4px;
      font-size: 12px;
      background: #f5f5f5;
      border-radius: 2px;
    }
  `])),a.colorPrimary);return(0,t.jsx)(i,{})},s=x,p,e,u,m=d.lazy(function(){return Promise.all([_.e(5426),_.e(5707),_.e(8826),_.e(5440),_.e(5347)]).then(_.bind(_,15347))}),n=(0,c.kc)(function(h){var a=h.css;return{searchWrapper:a(p||(p=l()([`
    display: flex;
    gap: 16px;
  `]))),fallbackWrapper:a(e||(e=l()([`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > * {
      flex: 0 0 15%;
      margin: 3px 0;
    }
  `]))),skeletonWrapper:a(u||(u=l()([`
    text-align: center;

    > * {
      width: 100% !important;
    }
  `])))}}),b=function(){var a=n(),i=a.styles;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:i.searchWrapper,children:[(0,t.jsx)(o.Z.Button,{active:!0,style:{width:"100%",height:40}}),(0,t.jsx)(o.Z.Input,{active:!0,style:{width:"100%",height:40}})]}),(0,t.jsx)(o.Z.Button,{active:!0,style:{margin:"28px 0 10px",width:100}}),(0,t.jsx)("div",{className:i.fallbackWrapper,children:Array(24).fill(1).map(function(E,w){return(0,t.jsx)("div",{className:i.skeletonWrapper,children:(0,t.jsx)(o.Z.Node,{active:!0,style:{height:110,width:"100%"},children:" "})},w)})})]})},j=function(){return(0,t.jsxs)(d.Suspense,{fallback:(0,t.jsx)(b,{}),children:[(0,t.jsx)(s,{}),(0,t.jsx)(m,{})]})},y=j}}]);