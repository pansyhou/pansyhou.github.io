"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9817],{23899:function(e,t,n){n.d(t,{Z:function(){return g}});n(67294);var i=n(86010),a=n(23702),r=n(54715),s=n(69003),c=n(83699),o=n(97325),l=n(79524),d=n(35944);function u(e){return(0,d.tZ)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,d.tZ)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}var h={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function m(){var e=(0,l.Z)("/");return(0,d.tZ)("li",{className:"breadcrumbs__item",children:(0,d.tZ)(c.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.tZ)(u,{className:h.breadcrumbHomeIcon})})})}var v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){var t=e.children,n=e.href,i="breadcrumbs__link";return e.isLast?(0,d.tZ)("span",{className:i,itemProp:"name",children:t}):n?(0,d.tZ)(c.Z,{className:i,href:n,itemProp:"item",children:(0,d.tZ)("span",{itemProp:"name",children:t})}):(0,d.tZ)("span",{className:i,children:t})}function Z(e){var t=e.children,n=e.active,a=e.index,r=e.addMicrodata;return(0,d.BX)("li",Object.assign({},r&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.tZ)("meta",{itemProp:"position",content:String(a+1)})]}))}function g(){var e=(0,r.s1)(),t=(0,s.Ns)();return e?(0,d.tZ)("nav",{className:(0,i.Z)(a.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.BX)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.tZ)(m,{}),e.map((function(t,n){var i=n===e.length-1;return(0,d.tZ)(Z,{active:i,index:n,addMicrodata:!!t.href,children:(0,d.tZ)(b,{href:t.href,isLast:i,children:t.label})},n)}))]})}):null}},17661:function(e,t,n){n.d(t,{Z:function(){return Z}});n(67294);var i=n(86010),a=n(54715),r=n(83699),s=n(2735),c=n(97325),o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"},l=n(35944);function d(e){var t=e.href,n=e.children;return(0,l.tZ)(r.Z,{href:t,className:(0,i.Z)("card padding--lg",o.cardContainer),children:n})}function u(e){var t=e.href,n=e.icon,a=e.title,r=e.description;return(0,l.BX)(d,{href:t,children:[(0,l.BX)("h2",{className:(0,i.Z)("text--truncate",o.cardTitle),title:a,children:[n," ",a]}),r&&(0,l.tZ)("p",{className:(0,i.Z)("text--truncate",o.cardDescription),title:r,children:r})]})}function h(e){var t,n=e.item,i=(0,a.Wl)(n);return i?(0,l.tZ)(u,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:null!=(t=n.description)?t:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function m(e){var t,n,i=e.item,r=(0,s.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(null!=(t=i.docId)?t:void 0);return(0,l.tZ)(u,{href:i.href,icon:r,title:i.label,description:null!=(n=i.description)?n:null==c?void 0:c.description})}function v(e){var t=e.item;switch(t.type){case"link":return(0,l.tZ)(m,{item:t});case"category":return(0,l.tZ)(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.className,n=(0,a.jA)();return(0,l.tZ)(Z,{items:n.items,className:t})}function Z(e){var t=e.items,n=e.className;if(!t)return(0,l.tZ)(b,Object.assign({},e));var r=(0,a.MN)(t);return(0,l.tZ)("section",{className:(0,i.Z)("row",n),children:r.map((function(e,t){return(0,l.tZ)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.tZ)(v,{item:e})},t)}))})}},50118:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});n(67294);var i=n(79488),a=n(54715),r=n(79524),s=n(17661),c=n(91792),o=n(25350),l=n(44617),d=n(23899),u=n(13899),h={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"},m=n(35944);function v(e){var t=e.categoryGeneratedIndex;return(0,m.tZ)(i.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,r.Z)(t.image)})}function b(e){var t=e.categoryGeneratedIndex,n=(0,a.jA)();return(0,m.BX)("div",{className:h.generatedIndexPage,children:[(0,m.tZ)(o.Z,{}),(0,m.tZ)(d.Z,{}),(0,m.tZ)(l.Z,{}),(0,m.BX)("header",{children:[(0,m.tZ)(u.Z,{as:"h1",className:h.title,children:t.title}),t.description&&(0,m.tZ)("p",{children:t.description})]}),(0,m.tZ)("article",{className:"margin-top--lg",children:(0,m.tZ)(s.Z,{items:n.items,className:h.list})}),(0,m.tZ)("footer",{className:"margin-top--lg",children:(0,m.tZ)(c.Z,{previous:t.navigation.previous,next:t.navigation.next})})]})}function Z(e){return(0,m.BX)(m.HY,{children:[(0,m.tZ)(v,Object.assign({},e)),(0,m.tZ)(b,Object.assign({},e))]})}},91792:function(e,t,n){n.d(t,{Z:function(){return s}});n(67294);var i=n(97325),a=n(23672),r=n(35944);function s(e){var t=e.previous,n=e.next;return(0,r.BX)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"}),children:[t&&(0,r.tZ)(a.Z,Object.assign({},t,{subLabel:(0,r.tZ)(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),n&&(0,r.tZ)(a.Z,Object.assign({},n,{subLabel:(0,r.tZ)(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}},44617:function(e,t,n){n.d(t,{Z:function(){return o}});n(67294);var i=n(86010),a=n(97325),r=n(23702),s=n(58801),c=n(35944);function o(e){var t=e.className,n=(0,s.E)();return n.badge?(0,c.tZ)("span",{className:(0,i.Z)(t,r.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,c.tZ)(a.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},25350:function(e,t,n){n.d(t,{Z:function(){return Z}});n(67294);var i=n(86010),a=n(39962),r=n(83699),s=n(97325),c=n(30868),o=n(23702),l=n(86409),d=n(58801),u=n(35944);var h={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,u.tZ)(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.tZ)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,u.tZ)(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.tZ)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function m(e){var t=h[e.versionMetadata.banner];return(0,u.tZ)(t,Object.assign({},e))}function v(e){var t=e.versionLabel,n=e.to,i=e.onClick;return(0,u.tZ)(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.tZ)("b",{children:(0,u.tZ)(r.Z,{to:n,onClick:i,children:(0,u.tZ)(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){var t,n=e.className,r=e.versionMetadata,s=(0,a.Z)().siteConfig.title,d=(0,c.gA)({failfast:!0}).pluginId,h=(0,l.J)(d).savePreferredVersionName,b=(0,c.Jo)(d),Z=b.latestDocSuggestion,g=b.latestVersionSuggestion,f=null!=Z?Z:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return(0,u.BX)("div",{className:(0,i.Z)(n,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.tZ)("div",{children:(0,u.tZ)(m,{siteTitle:s,versionMetadata:r})}),(0,u.tZ)("div",{className:"margin-top--md",children:(0,u.tZ)(v,{versionLabel:g.label,to:f.path,onClick:function(){return h(g.name)}})})]})}function Z(e){var t=e.className,n=(0,d.E)();return n.banner?(0,u.tZ)(b,{className:t,versionMetadata:n}):null}},13899:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(63366),a=(n(67294),n(86010)),r=n(97325),s=n(20107),c=n(83699),o={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"},l=n(35944),d=["as","id"];function u(e){var t=e.as,n=e.id,u=(0,i.Z)(e,d),h=(0,s.L)().navbar.hideOnScroll;if("h1"===t||!n)return(0,l.tZ)(t,Object.assign({},u,{id:void 0}));var m=(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:n});return(0,l.BX)(t,Object.assign({},u,{className:(0,a.Z)("anchor",h?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar,u.className),id:n,children:[u.children,(0,l.tZ)(c.Z,{className:"hash-link",to:"#"+n,"aria-label":m,title:m,children:"\u200b"})]}))}},23672:function(e,t,n){n.d(t,{Z:function(){return s}});n(67294);var i=n(86010),a=n(83699),r=n(35944);function s(e){var t=e.permalink,n=e.title,s=e.subLabel,c=e.isNext;return(0,r.BX)(a.Z,{className:(0,i.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,r.tZ)("div",{className:"pagination-nav__sublabel",children:s}),(0,r.tZ)("div",{className:"pagination-nav__label",children:n})]})}}}]);