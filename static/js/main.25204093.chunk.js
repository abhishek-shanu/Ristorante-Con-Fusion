(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{156:function(e,s,t){"use strict";t.r(s);var n=t(2),c=t.n(n),r=t(15),a=t.n(r),i=(t(96),t(97),t(16)),o=t(17),l=t(19),j=t(18),d=(t(98),t(3)),h=t(6),m=t(1),b=function(){return Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),Object(m.jsx)("p",{children:"...Loading"})]})},u="https://my-json-server.typicode.com/abhishek-shanu/JSON-Server/";function O(e){var s=e.dish;e.onClick;return Object(m.jsx)(d.d,{children:Object(m.jsxs)(h.b,{to:"/menu/".concat(s.id),children:[Object(m.jsx)(d.g,{width:"100%",height:"400px",src:s.image,alt:s.name}),Object(m.jsx)(d.h,{children:Object(m.jsx)(d.k,{children:Object(m.jsx)("h2",{children:Object(m.jsx)("span",{class:"badge badge-secondary",children:s.name})})})})]})})}var x=function(e){var s=e.dishes.dishes.map((function(s){return Object(m.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(m.jsx)(O,{dish:s,onClick:e.onClick})},s.id)}));return e.dishes.isLoading?Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(b,{})})}):e.dishes.errMess?Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("h4",{children:e.dishes.errMess})})}):Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.b,{children:Object(m.jsx)(h.b,{to:"/home",children:"Home"})}),Object(m.jsx)(d.b,{active:!0,children:"Menu"})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:"Menu"}),Object(m.jsx)("hr",{})]})]}),Object(m.jsx)("div",{className:"row",children:s})]})},f=t(13),p=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=s.call(this,e)).toggleNav=n.toggleNav.bind(Object(f.a)(n)),n.state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(f.a)(n)),n.toggleModal=n.toggleModal.bind(Object(f.a)(n)),n.handleLogin=n.handleLogin.bind(Object(f.a)(n)),n}return Object(o.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("Username: "+this.username.value+" Password: "+this.password.value+" Remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)(d.y,{dark:!0,expand:"md",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(d.A,{onClick:this.toggleNav}),Object(m.jsx)(d.z,{className:"mr-auto ",href:"/",children:Object(m.jsx)("img",{src:"/Ristorante-Con-Fusion/assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})}),Object(m.jsxs)(d.m,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(m.jsxs)(d.w,{navbar:!0,children:[Object(m.jsx)(d.x,{children:Object(m.jsxs)(h.c,{className:"nav-link",to:"/home",children:[Object(m.jsx)("span",{className:"fa fa-home fa-lg"}),"Home"]})}),Object(m.jsx)(d.x,{children:Object(m.jsxs)(h.c,{className:"nav-link",to:"/aboutus",children:[Object(m.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(m.jsx)(d.x,{children:Object(m.jsxs)(h.c,{className:"nav-link",to:"/menu",children:[Object(m.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(m.jsx)(d.x,{children:Object(m.jsxs)(h.c,{className:"nav-link",to:"/contactus",children:[Object(m.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(m.jsx)(d.w,{className:"ml-auto",navbar:!0,children:Object(m.jsx)(d.x,{children:Object(m.jsxs)(d.c,{outline:!0,onClick:this.toggleModal,children:[Object(m.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login"]})})})]})]})}),Object(m.jsx)(d.q,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row row-header",children:Object(m.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(m.jsx)("h1",{children:"Ristorante Con Fusion"}),Object(m.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"})]})})})}),Object(m.jsxs)(d.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(m.jsx)(d.v,{toggle:this.toggleModal,children:"Login"}),Object(m.jsx)(d.u,{children:Object(m.jsxs)(d.n,{onSubmit:this.handleLogin,children:[Object(m.jsxs)(d.o,{children:[Object(m.jsx)(d.r,{htmlFor:"username",children:"Username"}),Object(m.jsx)(d.p,{type:"text",id:"username",name:"username",innerRef:function(s){return e.username=s}})]}),Object(m.jsxs)(d.o,{children:[Object(m.jsx)(d.r,{htmlFor:"password",children:"Password"}),Object(m.jsx)(d.p,{type:"password",id:"password",name:"password",innerRef:function(s){return e.password=s}})]}),Object(m.jsx)(d.o,{check:!0,children:Object(m.jsxs)(d.r,{check:!0,children:[Object(m.jsx)(d.p,{type:"checkbox",name:"remember",innerRef:function(s){return e.remember=s}}),"Remember me"]})}),Object(m.jsx)(d.c,{type:"submit",value:"submit",color:"primary",children:"Login"})]})})]})]})}}]),t}(n.Component);var g=function(e){return Object(m.jsx)("div",{className:"footer",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row justify-content-center",children:[Object(m.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(m.jsx)("h5",{children:"Links"}),Object(m.jsxs)("ul",{className:"list-unstyled",children:[Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{to:"/home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{to:"/aboutus",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{to:"/menu",children:"Menu"})}),Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{to:"/contactus",children:"Contact"})})]})]}),Object(m.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(m.jsx)("h5",{children:"Our Address"}),Object(m.jsxs)("address",{children:["121, Clear Water Bay Road",Object(m.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(m.jsx)("br",{}),"HONG KONG",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(m.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(m.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(m.jsx)("i",{className:"fa fa-google-plus"})}),Object(m.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(m.jsx)("i",{className:"fa fa-facebook"})}),Object(m.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(m.jsx)("i",{className:"fa fa-linkedin"})}),Object(m.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(m.jsx)("i",{className:"fa fa-twitter"})}),Object(m.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(m.jsx)("i",{className:"fa fa-youtube"})}),Object(m.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(m.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-auto",children:Object(m.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})},N=t(23);function v(e){var s=e.item,t=e.isLoading,n=e.errMess;return t?Object(m.jsx)(b,{}):n?Object(m.jsx)("h4",{children:n}):Object(m.jsx)(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.g,{src:s.image,height:"400px",alt:s.name}),Object(m.jsxs)(d.e,{children:[Object(m.jsx)(d.k,{children:s.name}),s.designation?Object(m.jsx)(d.i,{children:s.designation}):null,Object(m.jsx)(d.j,{children:s.description})]})]})})}var y=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row align-items-start",children:[Object(m.jsx)("div",{className:"col-12 col-md m-1",children:Object(m.jsx)(v,{item:e.dish,isLoading:e.dishesLoading,errMess:e.dishesErrMess})}),Object(m.jsx)("div",{className:"col-12 col-md m-1",children:Object(m.jsx)(v,{item:e.promotion,isLoading:e.promosLoading,errMess:e.promosErrMess})}),Object(m.jsx)("div",{className:"col-12 col-md m-1",children:Object(m.jsx)(v,{item:e.leader,isLoading:e.leadersLoading,errMess:e.leadersErrMess})})]})})})},w=t(9),M=function(e){return e&&e.length},k=function(e){return function(s){return!s||s.length<=e}},L=function(e){return function(s){return s&&s.length>=e}},C=function(e){return!isNaN(Number(e))},E=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},F=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=s.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(o.a)(t,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.b,{children:Object(m.jsx)(h.b,{to:"/home",children:"Home"})}),Object(m.jsx)(d.b,{active:!0,children:"Contact Us"})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:"Contact Us"}),Object(m.jsx)("hr",{})]})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)("h3",{children:"Location Information"})}),Object(m.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(m.jsx)("h5",{children:"Our Address"}),Object(m.jsxs)("address",{children:["121, Clear Water Bay Road",Object(m.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(m.jsx)("br",{}),"HONG KONG",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(m.jsx)("br",{}),Object(m.jsx)("i",{className:"fa fa-envelope"}),": ",Object(m.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(m.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(m.jsx)("h5",{children:"Map of our Location"})}),Object(m.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(m.jsxs)("div",{className:"btn-group",role:"group",children:[Object(m.jsxs)("a",{role:"button",className:"btn btn-primary ",href:"tel:+85212345678",children:[Object(m.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(m.jsxs)("a",{role:"button",className:"btn btn-light",href:"mailto:confusion@food.net",children:[Object(m.jsx)("i",{class:"fa fa-skype"}),"Skype"]}),Object(m.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(m.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)("h3",{children:"Send us your Feedback"})}),Object(m.jsx)("div",{className:"col-12 col-md-9",children:Object(m.jsxs)(w.Form,{model:"feedback",onSubmit:function(s){return e.handleSubmit(s)},children:[Object(m.jsxs)(d.B,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"firstname",md:2,children:"First Name"}),Object(m.jsxs)(d.l,{md:10,children:[Object(m.jsx)(w.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First Name",className:"form-control",validators:{required:M,minLength:L(3),maxLength:k(15)}}),Object(m.jsx)(w.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(m.jsxs)(d.B,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(m.jsxs)(d.l,{md:10,children:[Object(m.jsx)(w.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:M,minLength:L(3),maxLength:k(15)}}),Object(m.jsx)(w.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(m.jsxs)(d.B,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(m.jsxs)(d.l,{md:10,children:[Object(m.jsx)(w.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:M,minLength:L(3),maxLength:k(15),isNumber:C}}),Object(m.jsx)(w.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(m.jsxs)(d.B,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"email",md:2,children:"Email"}),Object(m.jsxs)(d.l,{md:10,children:[Object(m.jsx)(w.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:M,validEmail:E}}),Object(m.jsx)(w.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(m.jsxs)(d.B,{className:"form-group",children:[Object(m.jsx)(d.l,{md:{size:6,offset:2},children:Object(m.jsx)("div",{className:"form-check",children:Object(m.jsxs)(d.r,{check:!0,children:[Object(m.jsx)(w.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(m.jsx)("strong",{children:"May we contact you?"})]})})}),Object(m.jsx)(d.l,{md:{size:3,offset:1},children:Object(m.jsxs)(w.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(m.jsx)("option",{children:"Tel."}),Object(m.jsx)("option",{children:"Email"})]})})]}),Object(m.jsxs)(d.B,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(m.jsx)(d.l,{md:10,children:Object(m.jsx)(w.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(m.jsx)(d.B,{className:"form-group",children:Object(m.jsx)(d.l,{md:{size:10,offset:2},children:Object(m.jsx)(d.c,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),t}(n.Component);function S(e){var s=e.dish;return Object(m.jsx)(N.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.g,{width:"100%",top:!0,src:s.image,alt:s.name}),Object(m.jsxs)(d.e,{children:[Object(m.jsx)(d.k,{children:s.name}),Object(m.jsx)(d.j,{children:s.description})]})]})})}var T=function(e){return e&&e.length},D=function(e){return function(s){return!s||s.length<=e}},A=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=s.call(this,e)).state={isModalOpen:!1},n.toggleModal=n.toggleModal.bind(Object(f.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(o.a)(t,[{key:"handleSubmit",value:function(e){console.log(e),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment)}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){var e,s=this;return Object(m.jsxs)("div",{children:[Object(m.jsxs)(d.c,{outline:!0,onClick:this.toggleModal,children:[Object(m.jsx)("span",{className:"fa fa-pencil fa-lg"}),"Submit Comment"]}),Object(m.jsxs)(d.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(m.jsx)(d.v,{toggle:this.toggleModal,children:"Submit Comment"}),Object(m.jsx)(d.u,{children:Object(m.jsxs)(w.LocalForm,{onSubmit:function(e){return s.handleSubmit(e)},children:[Object(m.jsxs)(d.B,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"rating",sm:12,children:"Rating"}),Object(m.jsx)(d.l,{sm:12,children:Object(m.jsxs)(w.Control.select,{model:".rating",id:"rating",name:"rating",placeholder:"Rating",className:"form-control",children:[Object(m.jsx)("option",{children:"1"}),Object(m.jsx)("option",{children:"2"}),Object(m.jsx)("option",{children:"3"}),Object(m.jsx)("option",{children:"4"}),Object(m.jsx)("option",{children:"5"})]})})]}),Object(m.jsxs)(d.B,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"author",sm:12,children:"Your Name"}),Object(m.jsxs)(d.l,{sm:12,children:[Object(m.jsx)(w.Control.text,{model:".author",id:"author",name:"author",placeholder:"Your name",className:"form-control",validators:{required:T,minLength:(e=3,function(s){return s&&s.length>=e}),maxLength:D(15)}}),Object(m.jsx)(w.Errors,{className:"text-danger",model:".author",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(m.jsxs)(d.B,{className:"form-group",children:[Object(m.jsx)(d.r,{htmlFor:"comment",sm:12,children:"Comment"}),Object(m.jsx)(d.l,{sm:12,children:Object(m.jsx)(w.Control.textarea,{model:".comment",id:"comment",name:"comment",rows:"6",className:"form-control"})})]}),Object(m.jsx)(d.B,{className:"form-group",children:Object(m.jsx)(d.l,{md:{size:10},children:Object(m.jsx)(d.c,{type:"submit",color:"primary",children:"Submit"})})})]})})]})]})}}]),t}(n.Component);function I(e){var s=e.comments,t=e.postComment,n=e.dishId;return null!=s?Object(m.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(m.jsx)("h4",{children:"Comments"}),Object(m.jsx)("ul",{className:"list-unstyled",children:Object(m.jsx)(N.Stagger,{in:!0,children:s.map((function(e){return Object(m.jsx)(N.Fade,{in:!0,children:Object(m.jsxs)("li",{children:[Object(m.jsx)("p",{children:e.comment}),Object(m.jsxs)("p",{children:["-- ",e.author," , ",new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"2-digit"}).format(new Date(Date.parse(e.date)))]})]},e.id)})}))})}),Object(m.jsx)(A,{dishId:n,postComment:t})]},s.id):Object(m.jsx)("div",{})}var R=function(e){return e.isLoading?Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(b,{})})}):e.isErrMess?Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("h4",{children:e.isErrMess})})}):null!=e.dish?Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.b,{children:Object(m.jsx)(h.b,{to:"/menu",children:"Menu"})}),Object(m.jsx)(d.b,{active:!0,children:e.dish.name})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:e.dish.name}),Object(m.jsx)("hr",{})]})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(m.jsx)(S,{dish:e.dish})}),Object(m.jsx)(I,{comments:e.comments,postComment:e.postComment,dishId:e.dish.id})]})]}):Object(m.jsx)("div",{})};function q(e){var s=e.leader;return Object(m.jsxs)(d.s,{children:[Object(m.jsx)(d.s,{left:!0,href:"#",children:Object(m.jsx)(d.s,{object:!0,src:s.image,alt:"leader image",width:"100px"})}),Object(m.jsxs)(d.s,{className:"ml-5",body:!0,children:[Object(m.jsx)(d.s,{heading:!0,children:s.name}),Object(m.jsx)("p",{children:s.designation}),Object(m.jsx)("p",{children:s.description})]})]})}var B=function(e){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(d.a,{children:[Object(m.jsx)(d.b,{children:Object(m.jsx)(h.b,{to:"/home",children:"Home"})}),Object(m.jsx)(d.b,{active:!0,children:"About Us"})]}),Object(m.jsxs)("div",{className:"col-12",children:[Object(m.jsx)("h3",{children:"About Us"}),Object(m.jsx)("hr",{})]})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsxs)("div",{className:"col-12 col-md-6",children:[Object(m.jsx)("h2",{children:"Our History"}),Object(m.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(m.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(m.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(m.jsx)("div",{className:"col-12 col-md-5",children:Object(m.jsxs)(d.d,{children:[Object(m.jsx)(d.f,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(m.jsx)(d.e,{children:Object(m.jsxs)("dl",{className:"row p-1",children:[Object(m.jsx)("dt",{className:"col-6",children:"Started"}),Object(m.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(m.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(m.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(m.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(m.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(m.jsx)("dt",{className:"col-6",children:"Employees"}),Object(m.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)(d.d,{children:Object(m.jsx)(d.e,{className:"bg-faded",children:Object(m.jsxs)("blockquote",{className:"blockquote",children:[Object(m.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(m.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(m.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(m.jsxs)("div",{className:"row row-content",children:[Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)("h2",{children:"Corporate Leadership"})}),Object(m.jsx)("div",{className:"col-12",children:Object(m.jsx)(d.s,{list:!0,children:Object(m.jsx)(N.Stagger,{in:!0,children:(console.log(e),e.leaders.isLoading?Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)(b,{})})}):e.leaders.errMess?Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("h4",{children:e.leaders.errMess})})}):null!=e.leaders.leaders?e.leaders.leaders.map((function(e){return Object(m.jsx)(N.Fade,{in:!0,children:Object(m.jsx)(q,{leader:e})})})):Object(m.jsx)("div",{}))})})})]})]})},P=t(21),H="ADD_COMMENT",_="DISHES_LOADING",Y="DISHES_FAILED",G="ADD_DISHES",U="ADD_COMMENTS",W="COMMENTS_FAILED",z="PROMOS_LOADING",K="ADD_PROMOS",J="PROMOS_FAILED",Z="LEADER_LOADING",$="LEADERS_FAILED",Q="ADD_LEADERS",V=function(e,s,t,n){return function(c){var r={dishId:e,rating:s,author:t,comment:n};return r.date=(new Date).toISOString(),fetch(u+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return c(function(e){return{type:H,payload:e}}(e))})).catch((function(e){console.log("post comments",e.message),alert("Your comment could not be posted\nError: "+e.message)}))}},X=function(){return{type:_}},ee=function(e){return{type:G,payload:e}},se=function(e){return{type:Y,payload:e}},te=function(e){return{type:U,payload:e}},ne=function(e){return{type:W,payload:e}},ce=function(){return{type:z}},re=function(e){return{type:K,payload:e}},ae=function(e){return{type:J,payload:e}},ie=function(){return{type:Z}},oe=function(e){return{type:Q,payload:e}},le=function(e){return{type:$,payload:e}},je=t(50),de=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchDishes(),this.props.fetchComments(),this.props.fetchPromos(),this.props.fetchLeaders()}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsx)("div",{children:Object(m.jsx)(je.TransitionGroup,{children:Object(m.jsx)(je.CSSTransition,{classNames:"page",timeout:300,children:Object(m.jsxs)(h.f,{location:this.props.location,children:[Object(m.jsx)(h.e,{path:"/home",component:function(){return Object(m.jsx)(y,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMess:e.props.dishes.errMess,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promosLoading:e.props.promotions.isLoading,promosErrMess:e.props.promotions.errMess,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMess:e.props.leaders.errMess})}}),Object(m.jsx)(h.e,{exact:!0,path:"/menu",component:function(){return Object(m.jsx)(x,{dishes:e.props.dishes})}}),Object(m.jsx)(h.e,{exact:!0,path:"/contactus",component:function(){return Object(m.jsx)(F,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),Object(m.jsx)(h.e,{path:"/menu/:dishId",component:function(s){var t=s.match;return Object(m.jsx)(R,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(t.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMess:e.props.dishes.errMess,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(t.params.dishId,10)})),commentsErrMess:e.props.comments.errMess,postComment:e.props.postComment})}}),Object(m.jsx)(h.e,{path:"/aboutus",component:function(){return Object(m.jsx)(B,{leaders:e.props.leaders})}}),Object(m.jsx)(h.d,{to:"/home"})]})},this.props.location.key)})}),Object(m.jsx)(g,{})]})}}]),t}(n.Component),he=Object(h.g)(Object(P.connect)((function(e){return{dishes:e.dishes,comments:e.comments,promotions:e.promotions,leaders:e.leaders}}),(function(e){return{postComment:function(s,t,n,c){return e(V(s,t,n,c))},postFeedback:function(s){return e(function(e){return function(s){return fetch(u+"feedback",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw e})).then((function(e){return e.json()})).then((function(e){return alert(JSON.stringify(e))})).catch((function(e){console.log("feedback ",e.message),alert("Your feedback could not be sent\nError: "+e.message)}))}}(s))},fetchDishes:function(){e((function(e){return e(X(!0)),fetch(u+"dishes").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(ee(s))})).catch((function(s){return e(se(s.message))}))}))},resetFeedbackForm:function(){e(w.actions.reset("feedback"))},fetchPromos:function(){e((function(e){return e(ce(!0)),fetch(u+"promotions").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(re(s))})).catch((function(s){return e(ae(s.message))}))}))},fetchComments:function(){e((function(e){return fetch(u+"comments").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(te(s))})).catch((function(s){return e(ne(s.message))}))}))},fetchLeaders:function(){e((function(e){return e(ie(!0)),fetch(u+"leaders").then((function(e){if(e.ok)return e;var s=new Error("Error "+e.status+": "+e.statusText);throw s.response=e,s}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(s){return e(oe(s))})).catch((function(s){return e(le(s.message))}))}))}}}))(de)),me=t(7),be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,dishes:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case G:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!1,errMess:null,dishes:s.payload});case _:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!0,errMess:null,dishes:[]});case Y:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!1,errMess:s.payload,dishes:[]});default:return e}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,promotions:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case K:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!1,errMess:null,promotions:s.payload});case z:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!0,errMess:null,promotions:[]});case J:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!1,errMess:s.payload,promotions:[]});default:return e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMess:null,leaders:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case Q:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!1,errMess:null,leaders:s.payload});case Z:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!0,errMess:null,leaders:[]});case $:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!1,errMess:s.payload,leaders:[]});default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMess:null,comments:[]},s=arguments.length>1?arguments[1]:void 0;switch(s.type){case U:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!1,errMess:null,comments:s.payload});case W:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!1,errMess:s.payload,comments:[]});case H:var t=s.payload;return console.log("Comment: ",t),Object(me.a)(Object(me.a)({},e),{},{comments:e.comments.concat(t)});default:return e}},fe=t(22),pe=t(90),ge=t.n(pe),Ne=t(91),ve=t.n(Ne),ye={firstname:"",lastname:"",telnum:"",email:"",agree:"false",contactType:"Tel.",message:""},we=Object(fe.createStore)(Object(fe.combineReducers)(Object(me.a)({dishes:be,leaders:Oe,promotions:ue,comments:xe},Object(w.createForms)({feedback:ye}))),Object(fe.applyMiddleware)(ge.a,ve.a)),Me=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(m.jsx)(P.Provider,{store:we,children:Object(m.jsx)(h.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(he,{})})})})}}]),t}(n.Component),ke=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,157)).then((function(s){var t=s.getCLS,n=s.getFID,c=s.getFCP,r=s.getLCP,a=s.getTTFB;t(e),n(e),c(e),r(e),a(e)}))};t(154),t(155);a.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(Me,{})}),document.getElementById("root")),ke()},97:function(e,s,t){},98:function(e,s,t){}},[[156,1,2]]]);
//# sourceMappingURL=main.25204093.chunk.js.map