(this.webpackJsonpweb_canonicals_ru=this.webpackJsonpweb_canonicals_ru||[]).push([[0],{28:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(16),o=n.n(s),r=(n(28),n(22)),i=n(2),l=n(3),u=n(8),p=n.p+"static/media/logo.fc3e6875.svg",d=n(0);var j=function(e){var t=e.onSignOut,n=e.email;return Object(d.jsxs)("header",{className:"header page__section",children:[Object(d.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u043e\u0435\u043a\u0442\u0430 Mesto",className:"logo header__logo"}),Object(d.jsx)(l.b,{exact:!0,path:"/",children:Object(d.jsxs)("div",{className:"header__wrapper",children:[Object(d.jsx)("p",{className:"header__user",children:n}),Object(d.jsx)("button",{className:"header__logout",onClick:function(){t()},children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(d.jsx)(l.b,{path:"/signup",children:Object(d.jsx)(u.b,{className:"header__auth-link",to:"signin",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)(l.b,{path:"/signin",children:Object(d.jsx)(u.b,{className:"header__auth-link",to:"signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})},h=c.a.createContext();var m=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,s=e.onCardDelete,o={backgroundImage:"url(".concat(t.link,")")},r=c.a.useContext(h),i=t.likes.some((function(e){return e===r._id})),l="card__like-button ".concat(i&&"card__like-button_is-active");console.log(t.owner),console.log(r._id);var u=t.owner===r._id,p="card__delete-button ".concat(u?"card__delete-button_visible":"card__delete-button_hidden");return Object(d.jsxs)("li",{className:"places__item card",children:[Object(d.jsx)("div",{className:"card__image",style:o,onClick:function(){n(t)}}),Object(d.jsx)("button",{type:"button",className:p,onClick:function(){s(t)}}),Object(d.jsxs)("div",{className:"card__description",children:[Object(d.jsx)("h2",{className:"card__title",children:t.name}),Object(d.jsxs)("div",{className:"card__likes",children:[Object(d.jsx)("button",{type:"button",className:l,onClick:function(){a(t)}}),Object(d.jsx)("p",{className:"card__like-count",children:t.likes.length})]})]})]})};var _=function(e){var t=e.cards,n=e.onEditProfile,a=e.onAddPlace,s=e.onEditAvatar,o=e.onCardClick,r=e.onCardLike,i=e.onCardDelete,l=c.a.useContext(h),u={backgroundImage:"url(".concat(l.avatar,")")};return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile page__section",children:[Object(d.jsx)("div",{className:"profile__image",onClick:s,style:u}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__title",children:l.name}),Object(d.jsx)("button",{className:"profile__edit-button",type:"button",onClick:n}),Object(d.jsx)("p",{className:"profile__description",children:l.about})]}),Object(d.jsx)("button",{className:"profile__add-button",type:"button",onClick:a})]}),Object(d.jsx)("section",{className:"places page__section",children:Object(d.jsx)("ul",{className:"places__list",children:t.map((function(e){return Object(d.jsx)(m,{card:e,onCardClick:o,onCardLike:r,onCardDelete:i},e._id)}))})})]})};var b=function(){return Object(d.jsx)("footer",{className:"footer page__section",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var f=function(e){var t=e.title,n=e.name,a=e.isOpen,c=e.buttonText,s=void 0===c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c":c,o=e.onSubmit,r=e.onClose,i=e.children;return Object(d.jsx)("div",{className:"popup popup_type_".concat(n," ").concat(a?"popup_is-opened":""),children:Object(d.jsx)("div",{className:"popup__content",children:Object(d.jsxs)("form",{className:"popup__form",name:n,noValidate:!0,onSubmit:o,children:[Object(d.jsx)("button",{type:"button",className:"popup__close",onClick:r}),Object(d.jsx)("h3",{className:"popup__title",children:t}),i,Object(d.jsx)("button",{type:"submit",className:"button popup__button",children:s})]})})})};var O=function(e){var t=e.card,n=e.onClose;return Object(d.jsx)("div",{className:"popup popup_type_image ".concat(t?"popup_is-opened":""),children:Object(d.jsxs)("div",{className:"popup__content popup__content_content_image",children:[Object(d.jsx)("button",{type:"button",className:"popup__close",onClick:n}),Object(d.jsx)("img",{alt:t?t.name:"",src:t?t.link:"",className:"popup__image"}),Object(d.jsx)("p",{className:"popup__caption",children:t?t.name:""})]})})},x=n(19),v=n(20),g=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},N=new(function(){function e(t){Object(x.a)(this,e),this._address=t}return Object(v.a)(e,[{key:"setToken",value:function(e){this._token=e}},{key:"getAppInfo",value:function(){return Promise.all([this.getCardList(),this.getUserInfo()])}},{key:"getCardList",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{Authorization:"Bearer ".concat(this._token)}}).then(g)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{Authorization:"Bearer ".concat(this._token),"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(g)}},{key:"removeCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer ".concat(this._token),"Content-Type":"application/json"}}).then(g)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:{Authorization:"Bearer ".concat(this._token),"Content-Type":"application/json"}}).then(g)}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{Authorization:"Bearer ".concat(this._token),"Content-Type":"application/json"},body:JSON.stringify({name:t,about:n})}).then(g)}},{key:"setUserAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{Authorization:"Bearer ".concat(this._token),"Content-Type":"application/json"},body:JSON.stringify({avatar:t})}).then(g)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._address,"/cards/").concat(e,"/likes"),{method:t?"PUT":"DELETE",headers:{Authorization:"Bearer ".concat(this._token),"Content-Type":"application/json"}}).then(g)}},{key:"register",value:function(e,t){return fetch("".concat(this._address,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(g)}},{key:"login",value:function(e,t){var n=this;return fetch("".concat(this._address,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(g).then((function(e){return n.setToken(e.token),localStorage.setItem("jwt",e.token),e}))}},{key:"checkToken",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(g)}}]),e}())("http://localhost:3000");var k=function(e){var t=e.isOpen,n=e.onUpdateUser,a=e.onClose,s=c.a.useState(""),o=Object(i.a)(s,2),r=o[0],l=o[1],u=c.a.useState(""),p=Object(i.a)(u,2),j=p[0],m=p[1],_=c.a.useContext(h);return c.a.useEffect((function(){_&&(l(_.name),m(_.about))}),[_]),Object(d.jsxs)(f,{isOpen:t,onSubmit:function(e){e.preventDefault(),n({name:r,about:j})},onClose:a,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",children:[Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{type:"text",name:"userName",id:"owner-name",className:"popup__input popup__input_type_name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",pattern:"[a-zA-Z\u0430-\u044f\u0410-\u042f -]{1,}",value:r||"",onChange:function(e){l(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error",id:"owner-name-error"})]}),Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{type:"text",name:"userDescription",id:"owner-description",className:"popup__input popup__input_type_description",placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",required:!0,minLength:"2",maxLength:"200",value:j||"",onChange:function(e){m(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error",id:"owner-description-error"})]})]})};var C=function(e){var t=e.isOpen,n=e.onUpdateAvatar,a=e.onClose,s=c.a.useRef();return Object(d.jsx)(f,{isOpen:t,onSubmit:function(e){e.preventDefault(),n({avatar:s.current.value})},onClose:a,title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",children:Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{type:"url",name:"avatar",id:"owner-avatar",className:"popup__input popup__input_type_description",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",required:!0,ref:s}),Object(d.jsx)("span",{className:"popup__error",id:"owner-avatar-error"})]})})};var y=function(e){var t=e.isOpen,n=e.onAddPlace,a=e.onClose,s=c.a.useState(""),o=Object(i.a)(s,2),r=o[0],l=o[1],u=c.a.useState(""),p=Object(i.a)(u,2),j=p[0],h=p[1];return Object(d.jsxs)(f,{isOpen:t,onSubmit:function(e){e.preventDefault(),n({name:r,link:j})},onClose:a,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"new-card",children:[Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{type:"text",name:"name",id:"place-name",className:"popup__input popup__input_type_card-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",value:r,onChange:function(e){l(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error",id:"place-name-error"})]}),Object(d.jsxs)("label",{className:"popup__label",children:[Object(d.jsx)("input",{type:"url",name:"link",id:"place-link",className:"popup__input popup__input_type_url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:j,onChange:function(e){h(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error",id:"place-link-error"})]})]})};var S=function(e){var t=e.onRegister,n=c.a.useState(""),a=Object(i.a)(n,2),s=a[0],o=a[1],r=c.a.useState(""),l=Object(i.a)(r,2),p=l[0],j=l[1];return Object(d.jsx)("div",{className:"auth-form",children:Object(d.jsxs)("form",{className:"auth-form__form",onSubmit:function(e){e.preventDefault(),t({email:s,password:p})},children:[Object(d.jsxs)("div",{className:"auth-form__wrapper",children:[Object(d.jsx)("h3",{className:"auth-form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)("label",{className:"auth-form__input",children:Object(d.jsx)("input",{type:"text",name:"email",id:"email",className:"auth-form__textfield",placeholder:"Email",onChange:function(e){return o(e.target.value)},required:!0})}),Object(d.jsx)("label",{className:"auth-form__input",children:Object(d.jsx)("input",{type:"password",name:"password",id:"password",className:"auth-form__textfield",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){return j(e.target.value)},required:!0})})]}),Object(d.jsxs)("div",{className:"auth-form__wrapper",children:[Object(d.jsx)("button",{className:"auth-form__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsxs)("p",{className:"auth-form__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(d.jsx)(u.b,{className:"auth-form__link",to:"/signin",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})})};n(38);var w=function(e){var t=e.onLogin,n=c.a.useState(""),a=Object(i.a)(n,2),s=a[0],o=a[1],r=c.a.useState(""),l=Object(i.a)(r,2),u=l[0],p=l[1];return Object(d.jsx)("div",{className:"auth-form",children:Object(d.jsxs)("form",{className:"auth-form__form",onSubmit:function(e){e.preventDefault(),t({email:s,password:u})},children:[Object(d.jsxs)("div",{className:"auth-form__wrapper",children:[Object(d.jsx)("h3",{className:"auth-form__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsx)("label",{className:"auth-form__input",children:Object(d.jsx)("input",{type:"text",name:"name",id:"email",className:"auth-form__textfield",placeholder:"Email",onChange:function(e){return o(e.target.value)},required:!0})}),Object(d.jsx)("label",{className:"auth-form__input",children:Object(d.jsx)("input",{type:"password",name:"password",id:"password",className:"auth-form__textfield",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:function(e){return p(e.target.value)},required:!0})})]}),Object(d.jsx)("button",{className:"auth-form__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})},T=n.p+"static/media/success-icon.ae3d962f.svg",A=n.p+"static/media/error-icon.7204b460.svg";var L=function(e){var t=e.isOpen,n=e.onClose,a=e.status,c="success"===a?T:A,s="success"===a?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.";return Object(d.jsx)("div",{className:"popup ".concat(t&&"popup_is-opened"),children:Object(d.jsx)("div",{className:"popup__content",children:Object(d.jsxs)("form",{className:"popup__form",noValidate:!0,children:[Object(d.jsx)("button",{type:"button",className:"popup__close",onClick:n}),Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"popup__icon",src:c,alt:""}),Object(d.jsx)("p",{className:"popup__status-message",children:s})]})]})})})},E=n(23),I=n(21),P=["component"],U=function(e){var t=e.component,n=Object(I.a)(e,P);return Object(d.jsx)(l.b,{exact:!0,children:function(){return n.loggedIn?Object(d.jsx)(t,Object(E.a)({},n)):Object(d.jsx)(l.a,{to:"./signin"})}})};var D=function(){var e=c.a.useState(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),o=Object(i.a)(s,2),u=o[0],p=o[1],m=c.a.useState(!1),x=Object(i.a)(m,2),v=x[0],g=x[1],T=c.a.useState(null),A=Object(i.a)(T,2),E=A[0],I=A[1],P=c.a.useState([]),D=Object(i.a)(P,2),B=D[0],q=D[1],z=c.a.useState({}),J=Object(i.a)(z,2),R=J[0],M=J[1],H=c.a.useState(!1),V=Object(i.a)(H,2),W=V[0],G=V[1],Z=c.a.useState(""),$=Object(i.a)(Z,2),F=$[0],K=$[1],Q=c.a.useState(!1),X=Object(i.a)(Q,2),Y=X[0],ee=X[1],te=c.a.useState(""),ne=Object(i.a)(te,2),ae=ne[0],ce=ne[1],se=Object(l.g)();function oe(){a(!1),p(!1),g(!1),G(!1),I(null)}return c.a.useEffect((function(){var e=localStorage.getItem("jwt");e&&N.checkToken(e).then((function(t){return console.log(t),N.setToken(e),ce(t.email),ee(!0),N.getAppInfo()})).then((function(e){var t=Object(i.a)(e,2),n=t[0],a=t[1];M(a),q(n),se.push("/")})).catch((function(e){localStorage.removeItem("jwt"),console.log(e)}))}),[se]),Object(d.jsx)(h.Provider,{value:R,children:Object(d.jsxs)("div",{className:"page__content",children:[Object(d.jsx)(j,{email:ae,onSignOut:function(){localStorage.removeItem("jwt"),ee(!1),se.push("/signin")}}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(U,{exact:!0,path:"/",component:_,cards:B,onEditProfile:function(){a(!0)},onAddPlace:function(){p(!0)},onEditAvatar:function(){g(!0)},onCardClick:function(e){I(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e===R._id}));N.changeLikeCardStatus(e._id,!t).then((function(t){q((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){N.removeCard(e._id).then((function(){q((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.log(e)}))},loggedIn:Y}),Object(d.jsx)(l.b,{path:"/signup",children:Object(d.jsx)(S,{onRegister:function(e){var t=e.email,n=e.password;N.register(t,n).then((function(e){K("success"),G(!0),se.push("/signin")})).catch((function(e){K("fail"),G(!0)}))}})}),Object(d.jsx)(l.b,{path:"/signin",children:Object(d.jsx)(w,{onLogin:function(e){var t=e.email,n=e.password;N.login(t,n).then((function(e){ee(!0),ce(t),se.push("/")})).catch((function(e){K("fail"),G(!0)}))}})})]}),Object(d.jsx)(b,{}),Object(d.jsx)(k,{isOpen:n,onUpdateUser:function(e){N.setUserInfo(e).then((function(e){M(e),oe()})).catch((function(e){return console.log(e)}))},onClose:oe}),Object(d.jsx)(y,{isOpen:u,onAddPlace:function(e){N.addCard(e).then((function(e){q([e].concat(Object(r.a)(B))),oe()})).catch((function(e){return console.log(e)}))},onClose:oe}),Object(d.jsx)(f,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"remove-card",buttonText:"\u0414\u0430"}),Object(d.jsx)(C,{isOpen:v,onUpdateAvatar:function(e){N.setUserAvatar(e).then((function(e){M(e),oe()})).catch((function(e){return console.log(e)}))},onClose:oe}),Object(d.jsx)(O,{card:E,onClose:oe}),Object(d.jsx)(L,{isOpen:W,onClose:oe,status:F})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(u.a,{children:Object(d.jsx)(D,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.90ceea30.chunk.js.map