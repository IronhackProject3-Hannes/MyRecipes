(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(28),s=c.n(a),r=(c(36),c(9)),i=c(2),l=(c(37),c(0));function o(){return Object(l.jsxs)("div",{className:"home-container",children:[Object(l.jsx)("div",{className:"first-row",children:Object(l.jsxs)("div",{className:"first-row-text",children:[Object(l.jsx)("h1",{children:"Welcome to MyReS"}),Object(l.jsx)("h2",{children:"My Recipe Scrapbook"})]})}),Object(l.jsxs)("div",{className:"second-row",children:[Object(l.jsx)("div",{className:"second-left"}),Object(l.jsx)("div",{className:"second-middle"}),Object(l.jsx)("div",{className:"second-right"})]})]})}var j=c(6),d=c(3),u=c.n(d),b=c.p+"static/media/home.9f05f711.png";function h(e){var t=function(){u.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))};return Object(l.jsx)("nav",{children:e.user?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"nav-left",children:Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("img",{className:"home-icon",src:b,alt:"home"})})}),Object(l.jsxs)("div",{className:"nav-right",children:[Object(l.jsx)(j.b,{to:"/recipes",children:Object(l.jsx)("button",{className:"nav-btn list",children:"Recipes"})}),Object(l.jsx)(j.b,{to:"/profile/".concat(e.user._id),children:Object(l.jsx)("button",{className:"nav-btn profile",children:"Profile"})}),Object(l.jsx)(j.b,{to:"/",onClick:function(){return t()},children:Object(l.jsx)("button",{className:"nav-btn logout",children:"Logout"})})]})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"nav-left",children:Object(l.jsx)(j.b,{to:"/",children:Object(l.jsx)("img",{className:"home-icon",src:b,alt:"home"})})}),Object(l.jsxs)("div",{className:"nav-right",children:[Object(l.jsx)(j.b,{to:"/signup",children:Object(l.jsx)("button",{className:"nav-btn signup",children:"Signup"})}),Object(l.jsx)(j.b,{to:"/login",children:Object(l.jsx)("button",{className:"nav-btn login",children:"Login"})})]})]})})}var O=c(5),m=c(4);function x(e){var t=Object(n.useState)(!1),c=Object(i.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){e.favorite.includes(d)?s(!0):s(!1)}),[e.favorite]);var r=e.strMeal,o=e.strTags,d=e._id,u=e.strMealThumb,b=e.strCategory,h=e.strArea;return Object(l.jsxs)("div",{className:"card-box",children:[Object(l.jsx)("div",{className:"card-left",children:Object(l.jsx)("img",{src:u,alt:r})}),Object(l.jsxs)("div",{className:"card-right",children:[Object(l.jsx)(j.b,{to:"/recipe/".concat(d),className:"card-title",children:r}),Object(l.jsxs)("div",{className:"card-text",children:[Object(l.jsxs)("p",{children:[b," / ",h," / ",o]}),Object(l.jsx)("div",{className:"fav-btn",children:!0===a?Object(l.jsx)("button",{onClick:function(){return e.handleFavorite(d)},children:Object(l.jsx)("i",{className:"fas fa-heart"})}):Object(l.jsx)("button",{onClick:function(){return e.handleFavorite(d)},children:Object(l.jsx)("i",{className:"far fa-heart"})})})]})]})]})}function g(e){var t="http://localhost:5005",c=Object(n.useState)(e.user),a=Object(i.a)(c,2),s=(a[0],a[1]);Object(n.useEffect)((function(){u.a.get("/api/auth/loggedin").then((function(e){s(e.data),f(e.data.favorite)})).catch((function(e){console.log(e)}))}),[]);var o=Object(n.useState)([]),j=Object(i.a)(o,2),d=j[0],b=j[1];Object(n.useEffect)((function(){u.a.get("".concat(t,"/api/recipes")).then((function(e){console.log(e),b(e.data)})).catch((function(e){return console.log(e)}))}),[]);var h=Object(n.useState)(e.user.favorite),O=Object(i.a)(h,2),g=O[0],f=O[1],p=e.user._id;Object(n.useEffect)((function(){f(e.user.favorite)}),[e.user]);var v=function(e){if(g.includes(e)){var c=g.filter((function(t){return t!==e&&(console.log(t),console.log(e),!0)}));console.log(c),u.a.delete("".concat(t,"/api/user/").concat(p),{data:{favorite:Object(m.a)(c)}}).then((function(e){console.log("thisis res.data:",e.data),f(e.data.favorite),console.log("this is fav:",g)})).catch((function(e){return console.log(e)}))}else u.a.put("".concat(t,"/api/user/").concat(p),{favorite:[].concat(Object(m.a)(g),[e])}).then((function(t){f([].concat(Object(m.a)(g),[e])),console.log("add fav:",g),console.log("added user:",t.data)})).catch((function(e){return console.log(e)}))},N=Object(n.useState)(""),w=Object(i.a)(N,2),C=w[0],y=w[1],I=d.filter((function(e){return"".concat(e.strMeal).concat(e.strCategory).concat(e.strArea).concat(e.strTags).toLowerCase().includes(C.toLowerCase())}));return Object(l.jsxs)("div",{className:"recipes-container",children:[Object(l.jsx)("div",{className:"search-box",children:Object(l.jsx)("input",{type:"text",name:"search",value:C,onChange:function(e){return y(e.target.value)},placeholder:"Find your Recipe"})}),Object(l.jsx)("h1",{className:"list-title",children:"All Recipes"}),Object(l.jsx)("div",{className:"cards-box",children:I.sort((function(e,t){return e.strMeal.localeCompare(t.strMeal)})).map((function(t){return Object(l.jsx)(x,Object(r.a)({user:e.user,favorite:g,handleFavorite:v},t),t._id)}))})]})}var f=u.a.create({baseURL:"http://localhost:5005/api/recipes"}),p=function(e){throw e},v=function(e){return f.post("/upload",e).then((function(e){return e.data})).catch(p)};function N(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),j=o[0],d=o[1],b=Object(n.useState)(""),h=Object(i.a)(b,2),O=h[0],x=h[1],g=Object(n.useState)(""),f=Object(i.a)(g,2),p=f[0],N=f[1],w=Object(n.useState)([""]),C=Object(i.a)(w,2),y=C[0],I=C[1],S=function(){I([].concat(Object(m.a)(y),[""]))},F=Object(n.useState)([{strIngredient:"",strMeasure:""}]),M=Object(i.a)(F,2),E=M[0],A=M[1],T=function(e,t){var c=e.target,n=c.name,a=c.value,s=Object(m.a)(E);s[t][n]=a,A(s)},U=function(){A([].concat(Object(m.a)(E),[{strIngredient:"",strMeasure:""}]))},k=Object(n.useState)(""),_=Object(i.a)(k,2),R=_[0],D=_[1];return Object(l.jsxs)("div",{className:"add-container",children:[Object(l.jsx)("h3",{className:"add title",children:"Add Recipe Form"}),Object(l.jsx)("form",{onSubmit:function(t){t.preventDefault();var c={strMeal:a,strCategory:j,strArea:O,strMealThumb:R,Ingredients:E,Instructions:y,strTags:p,creatorId:e.user._id};u.a.post("".concat("http://localhost:5005","/api/recipes"),c).then((function(t){s(""),d(""),x(""),D(""),A([""]),I([{strIngredient:"",strMeasure:""}]),N(""),e.history.push("/recipes")})).catch((function(e){return console.log(e)}))},children:Object(l.jsxs)("table",{children:[Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left",children:Object(l.jsx)("label",{htmlFor:"strMeal",children:"Name: "})}),Object(l.jsxs)("td",{className:"row-right",children:[" ",Object(l.jsx)("input",{placeholder:"Enter Name",type:"text",name:"strMeal",value:a,onChange:function(e){return s(e.target.value)}})]})]}),Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left",children:Object(l.jsx)("label",{htmlFor:"strCategory",children:"Category: "})}),Object(l.jsx)("td",{className:"row-right",children:Object(l.jsx)("input",{placeholder:"Enter Category",type:"text",name:"strCategory",value:j,onChange:function(e){return d(e.target.value)}})})]}),Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left",children:Object(l.jsx)("label",{htmlFor:"strArea",children:"Area: "})}),Object(l.jsx)("td",{className:"row-right",children:Object(l.jsx)("input",{placeholder:"Enter Area",type:"text",name:"strArea",value:O,onChange:function(e){return x(e.target.value)}})})]}),Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left",children:Object(l.jsx)("label",{htmlFor:"uploadImage",children:"Image: "})}),Object(l.jsxs)("td",{className:"row-right",children:[" ",Object(l.jsx)("input",{type:"file",name:"uploadImage",onChange:function(e){e.preventDefault(),console.log(e.target.files[0]);var t=new FormData;t.append("imageUrl",e.target.files[0]),v(t).then((function(e){D(e.secure_url),console.log(R)})).catch((function(e){return console.log("Error while uploading the file: ",e)}))}})]})]}),Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left",children:"Image Preview"}),Object(l.jsxs)("td",{className:"row-right image-preview",children:[" ",R&&Object(l.jsx)("img",{src:R,style:{height:"100px"}})]})]}),Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left add-text",children:Object(l.jsx)("label",{htmlFor:"Ingredients",children:"Ingredients: "})}),Object(l.jsx)("td",{className:"row-right add-box",children:E.map((function(e,t){return Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("input",{name:"strIngredient",placeholder:"Enter Ingredient",value:e.strIngredient,onChange:function(e){return T(e,t)}}),Object(l.jsx)("input",{name:"strMeasure",placeholder:"Enter amount",value:e.strMeasure,onChange:function(e){return T(e,t)}}),Object(l.jsxs)("div",{className:"btn-box",children:[1!==E.length&&Object(l.jsx)("button",{className:"mr10",onClick:function(){return function(e){var t=Object(m.a)(E);t.splice(e,1),A(t)}(t)},children:"Remove"}),E.length-1===t&&Object(l.jsx)("button",{className:"mr10",onClick:U,children:"Add"})]})]},t)}))})]}),Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left add-text",children:Object(l.jsx)("label",{htmlFor:"Instructions",children:"Instructions: "})}),Object(l.jsx)("td",{className:"row-right add-box",children:y.map((function(e,t){return Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("input",{name:"Instructions",placeholder:"Enter Instructions",value:e,onChange:function(e){return function(e,t){var c=e.target.value,n=Object(m.a)(y);n[t]=c,I(n)}(e,t)}}),Object(l.jsxs)("div",{className:"btn-box",children:[1!==y.length&&Object(l.jsx)("button",{className:"mr10",onClick:function(){return function(e){var t=Object(m.a)(y);t.splice(e,1),I(t)}(t)},children:"Remove"}),y.length-1===t&&Object(l.jsx)("button",{className:"mr10",onClick:S,children:"Add"})]})]},t)}))})]}),Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left",children:Object(l.jsx)("label",{htmlFor:"strTags",children:"Tags: "})}),Object(l.jsxs)("td",{className:"row-right",children:[" ",Object(l.jsx)("input",{type:"text",name:"strTags",placeholder:"Enter Tags",value:p,onChange:function(e){return N(e.target.value)}})]})]}),Object(l.jsx)("tr",{children:Object(l.jsxs)("button",{className:"add-btn",type:"submit",children:["Add Recipe ",Object(l.jsx)("i",{class:"fas fa-plus"})," "]})})]})})]})}function w(e){var t=Object(n.useState)(null),c=Object(i.a)(t,2),a=c[0],s=c[1],r=e.match.params.id;return Object(n.useEffect)((function(){u.a.get("".concat("http://localhost:5005","/api/recipes/").concat(r)).then((function(e){console.log(e.data),s(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsx)("div",{className:"container",children:a&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:a.strMeal}),Object(l.jsxs)("div",{className:"detail-container",children:[Object(l.jsxs)("div",{className:"detail-left",children:[Object(l.jsx)("img",{src:a.strMealThumb}),Object(l.jsxs)("h4",{className:"category",children:["Category : ",a.strCategory]}),Object(l.jsxs)("h4",{className:"area",children:["Area : ",a.strArea]}),Object(l.jsxs)("h4",{className:"tags",children:["Tags : ",a.strTags]})]}),Object(l.jsxs)("div",{className:"detail-right",children:[Object(l.jsx)("h4",{children:"Ingredients"}),Object(l.jsx)("div",{className:"ingredients",children:a.Ingredients.map((function(e){return Object(l.jsxs)("p",{children:[e.strIngredient,": ",e.strMeasure]})}))}),Object(l.jsx)("h4",{children:"instructions"}),Object(l.jsx)("ul",{className:"instructions",children:a.Instructions.map((function(e){return Object(l.jsx)("li",{children:e})}))})]})]}),(e.user._id===a.creatorId||"admin"===e.user.role)&&Object(l.jsx)(j.b,{to:"/recipe/edit/".concat(a._id),children:Object(l.jsx)("button",{className:"edit-btn",children:"Edit this recipe"})})]})})}function C(e){var t="http://localhost:5005",c=Object(n.useState)(""),a=Object(i.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)(""),j=Object(i.a)(o,2),d=j[0],b=j[1],h=Object(n.useState)(""),O=Object(i.a)(h,2),x=O[0],g=O[1],f=Object(n.useState)(""),p=Object(i.a)(f,2),N=p[0],w=p[1],C=Object(n.useState)(""),y=Object(i.a)(C,2),I=y[0],S=y[1],F=Object(n.useState)([""]),M=Object(i.a)(F,2),E=M[0],A=M[1],T=function(){A([].concat(Object(m.a)(E),[""]))},U=Object(n.useState)([{strIngredient:"",strMeasure:""}]),k=Object(i.a)(U,2),_=k[0],R=k[1],D=function(e,t){var c=e.target,n=c.name,a=c.value,s=Object(m.a)(_);s[t][n]=a,R(s)},P=function(){R([].concat(Object(m.a)(_),[{strIngredient:"",strMeasure:""}]))},L=e.match.params.id;Object(n.useEffect)((function(){u.a.get("".concat(t,"/api/recipes/").concat(L)).then((function(e){r(e.data.strMeal),b(e.data.strCategory),g(e.data.strArea),S(e.data.strMealThumb),w(e.data.strTags),A(e.data.Instructions),R(e.data.Ingredients)})).catch((function(e){return console.log(e)}))}),[]);return Object(l.jsxs)("div",{className:"edit-container",children:[Object(l.jsx)("h3",{className:"title",children:"Edit this recipe"}),Object(l.jsx)("form",{onSubmit:function(c){c.preventDefault();var n={strMeal:s,strCategory:d,strArea:x,strMealThumb:I,Ingredients:_,Instructions:E,strTags:N};u.a.put("".concat(t,"/api/recipes/").concat(L),n).then((function(t){e.history.push("/recipe/".concat(L))})).catch((function(e){return console.log(e)}))},children:Object(l.jsxs)("table",{children:[Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left",children:Object(l.jsx)("label",{htmlFor:"strMeal",children:"Name: "})}),Object(l.jsxs)("td",{className:"row-right",children:[" ",Object(l.jsx)("input",{placeholder:"Enter Name",type:"text",name:"strMeal",value:s,onChange:function(e){return r(e.target.value)}})]})]}),Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left",children:Object(l.jsx)("label",{htmlFor:"strCategory",children:"Category: "})}),Object(l.jsx)("td",{className:"row-right",children:Object(l.jsx)("input",{placeholder:"Enter Category",type:"text",name:"strCategory",value:d,onChange:function(e){return b(e.target.value)}})})]}),Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left",children:Object(l.jsx)("label",{htmlFor:"strArea",children:"Area: "})}),Object(l.jsx)("td",{className:"row-right",children:Object(l.jsx)("input",{placeholder:"Enter Area",type:"text",name:"strArea",value:x,onChange:function(e){return g(e.target.value)}})})]}),Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left",children:Object(l.jsx)("label",{htmlFor:"uploadImage",children:"Image: "})}),Object(l.jsxs)("td",{className:"row-right",children:[" ",Object(l.jsx)("input",{type:"file",name:"uploadImage",onChange:function(e){e.preventDefault(),console.log(e.target.files[0]);var t=new FormData;t.append("imageUrl",e.target.files[0]),v(t).then((function(e){S(e.secure_url),console.log(I)})).catch((function(e){return console.log("Error while uploading the file: ",e)}))}})]})]}),Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left",children:"Image Preview"}),Object(l.jsxs)("td",{className:"row-right image-preview",children:[" ",I&&Object(l.jsx)("img",{src:I,style:{height:"100px"}})]})]}),Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left add-text",children:Object(l.jsx)("label",{htmlFor:"Ingredients",children:"Ingredients: "})}),Object(l.jsx)("td",{className:"row-right add-box",children:_.map((function(e,t){return Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("input",{name:"strIngredient",placeholder:"Enter Ingredient",value:e.strIngredient,onChange:function(e){return D(e,t)}}),Object(l.jsx)("input",{name:"strMeasure",placeholder:"Enter amount",value:e.strMeasure,onChange:function(e){return D(e,t)}}),Object(l.jsxs)("div",{className:"btn-box",children:[1!==_.length&&Object(l.jsx)("button",{className:"mr10",onClick:function(){return function(e){var t=Object(m.a)(_);t.splice(e,1),R(t)}(t)},children:"Remove"}),_.length-1===t&&Object(l.jsx)("button",{className:"mr10",onClick:P,children:"Add"})]})]},t)}))})]}),Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left add-text",children:Object(l.jsx)("label",{htmlFor:"Instructions",children:"Instructions: "})}),Object(l.jsx)("td",{className:"row-right add-box",children:E.map((function(e,t){return Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("input",{name:"Instructions",placeholder:"Enter Instructions",value:e,onChange:function(e){return function(e,t){var c=e.target.value,n=Object(m.a)(E);n[t]=c,A(n)}(e,t)}}),Object(l.jsxs)("div",{className:"btn-box",children:[1!==E.length&&Object(l.jsx)("button",{className:"mr10",onClick:function(){return function(e){var t=Object(m.a)(E);t.splice(e,1),A(t)}(t)},children:"Remove"}),E.length-1===t&&Object(l.jsx)("button",{className:"mr10",onClick:T,children:"Add"})]})]},t)}))})]}),Object(l.jsxs)("tr",{className:"add-row",children:[Object(l.jsx)("td",{className:"row-left",children:Object(l.jsx)("label",{htmlFor:"strTags",children:"Tags: "})}),Object(l.jsxs)("td",{className:"row-right",children:[" ",Object(l.jsx)("input",{type:"text",name:"strTags",placeholder:"Enter Tags",value:N,onChange:function(e){return w(e.target.value)}})]})]}),Object(l.jsx)("tr",{children:Object(l.jsx)("button",{className:"update-btn",type:"submit",children:"Update"})}),Object(l.jsx)("tr",{children:Object(l.jsx)("button",{className:"edit-btn",onClick:function(){u.a.delete("".concat(t,"/api/recipes/").concat(L)).then((function(){e.history.push("/recipes")})).catch((function(e){return console.log(e)}))},children:"Delete This"})})]})})]})}function y(e){var t="http://localhost:5005",c=Object(n.useState)(e.user),a=Object(i.a)(c,2),s=(a[0],a[1]),o=Object(n.useState)(e.user.username),d=Object(i.a)(o,2),b=d[0],h=(d[1],Object(n.useState)(e.user.favorite)),O=Object(i.a)(h,2),g=O[0],f=O[1],p=Object(n.useState)([]),v=Object(i.a)(p,2),N=v[0],w=v[1],C=Object(n.useState)([]),y=Object(i.a)(C,2),I=y[0],S=y[1];Object(n.useEffect)((function(){u.a.get("/api/auth/loggedin").then((function(e){s(e.data),f(e.data.favorite)})).catch((function(e){console.log(e)}))}),[]);Object(n.useEffect)((function(){!function(){var c=e.user._id;u.a.get("".concat(t,"/api/user/creator/").concat(c)).then((function(e){console.log("user created",e.data),S(e.data)})).catch((function(e){return console.log(e)}))}()}),[]);Object(n.useEffect)((function(){!function(){console.log(e.user);var c=e.user._id;u.a.get("".concat(t,"/api/user/").concat(c)).then((function(e){console.log(e.data),w(e.data)})).catch((function(e){return console.log(e)}))}()}),[e.user]);var F=e.user._id,M=function(e){if(g.includes(e)){var c=g.filter((function(t){return t!==e&&(console.log(t),console.log(e),!0)}));console.log(c),u.a.delete("".concat(t,"/api/user/").concat(F),{data:{favorite:Object(m.a)(c)}}).then((function(e){console.log("thisis res.data:",e.data),f(e.data.favorite),console.log("this is fav:",g)})).catch((function(e){return console.log(e)}))}else u.a.put("".concat(t,"/api/user/").concat(F),{favorite:[].concat(Object(m.a)(g),[e])}).then((function(t){f([].concat(Object(m.a)(g),[e])),console.log("add fav:",g),console.log("added user:",t.data)})).catch((function(e){return console.log(e)}))};return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"User Profile"}),Object(l.jsx)("h4",{children:"User Info"}),Object(l.jsxs)("h5",{children:["User Name: ",b]}),Object(l.jsxs)("div",{className:"profile-container",children:[Object(l.jsxs)("div",{className:"profile-left",children:[Object(l.jsx)("h3",{children:"Your Recipe"}),I.length>0?I.sort((function(e,t){return e.strMeal.localeCompare(t.strMeal)})).map((function(t){return Object(l.jsx)(x,Object(r.a)({user:e.user,favorite:g,handleFavorite:M},t),t._id)})):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{children:"Add your Recipe"})}),Object(l.jsx)("div",{children:Object(l.jsx)(j.b,{to:"/recipes/add",children:Object(l.jsx)("button",{className:"add-btn",children:"Add recipe"})})})]}),Object(l.jsxs)("div",{className:"profile-right",children:[Object(l.jsx)("h3",{children:"User Favorite"}),Object(l.jsx)("div",{className:"favorite",children:N.length>0?N.sort((function(e,t){return e.strMeal.localeCompare(t.strMeal)})).map((function(t){return Object(l.jsx)(x,Object(r.a)({user:e.user,favorite:g,handleFavorite:M},t),t._id)})):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Add your Favorites"}),"add link to recipes list"]})})]})]})]})})}function I(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),j=o[0],d=o[1],b=Object(n.useState)(""),h=Object(i.a)(b,2),O=h[0],m=h[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"signup-container",children:[Object(l.jsx)("h3",{children:"Create Account"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(e,t){return u.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(a,j).then((function(t){console.log(t),t.message?(s(""),d(""),m(t.message)):(e.setUser(t),e.history.push("/login"))})).catch((function(e){return console.log(e)}))},children:[Object(l.jsx)("label",{htmlFor:"username",children:"Username "}),Object(l.jsx)("input",{type:"text",name:"username",value:a,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("label",{htmlFor:"password",children:"Password "}),Object(l.jsx)("input",{type:"password",name:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"Sign Up"}),O&&Object(l.jsx)("h3",{className:"message",children:O})]})]})})}function S(e){var t=Object(n.useState)(""),c=Object(i.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),o=Object(i.a)(r,2),j=o[0],d=o[1],b=Object(n.useState)(""),h=Object(i.a)(b,2),O=h[0],m=h[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"login-container",children:[Object(l.jsx)("h3",{children:"Log In"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(e,t){return u.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(a,j).then((function(t){console.log(t),t.message?(s(""),d(""),m(t.message)):(e.setUser(t),e.history.push("/recipes"))})).catch((function(e){return console.log(e)}))},children:[Object(l.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(l.jsx)("input",{type:"text",name:"username",value:a,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(l.jsx)("input",{type:"password",name:"password",value:j,onChange:function(e){return d(e.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"Log In"}),O&&Object(l.jsx)("h3",{className:"message",children:O})]})]})})}var F=c(31),M=["component","user","path","redirectPath"],E=function(e){var t=e.component,c=e.user,n=e.path,a=e.redirectPath,s=void 0===a?"/":a,i=Object(F.a)(e,M);return Object(l.jsx)(O.b,{exact:!0,path:n,render:function(e){return c?Object(l.jsx)(t,Object(r.a)(Object(r.a)(Object(r.a)({},e),i),{},{user:c})):Object(l.jsx)(O.a,{to:s})}})};var A=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"New thumb"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(e.target[0].files[0]);var t=new FormData;t.append("imageUrl",e.target[0].files[0]),v(t).then((function(e){a(e.secure_url)})).catch((function(e){return console.log("Error while uploading the file: ",e)}))},children:[Object(l.jsx)("input",{type:"file"}),c&&Object(l.jsx)("img",{src:c,style:{height:"200px"}}),Object(l.jsx)("button",{type:"submit",children:"upload image"})]})]})};var T=function(e){var t=Object(n.useState)(e.user),c=Object(i.a)(t,2),a=c[0],s=c[1],j=function(e){s(e)};return console.log("App js: ",a),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{user:a,setUser:j}),Object(l.jsxs)(O.d,{children:[Object(l.jsx)(O.b,{exact:!0,path:"/",component:o}),Object(l.jsx)(O.b,{exact:!0,path:"/image",component:A}),Object(l.jsx)(E,{exact:!0,path:"/profile/:id",user:a,component:y,redirect:"/login"}),Object(l.jsx)(O.b,{exact:!0,path:"/recipes",render:function(e){return Object(l.jsx)(g,Object(r.a)({user:a},e))}}),Object(l.jsx)(E,{exact:!0,path:"/recipes/add",user:a,component:N,redirect:"/login"}),Object(l.jsx)(E,{exact:!0,path:"/recipe/:id",user:a,component:w,redirect:"/login"}),Object(l.jsx)(E,{exact:!0,path:"/recipe/edit/:id",user:a,component:C,redirect:"/recipe/:id"}),Object(l.jsx)(O.b,{exact:!0,path:"/signup",render:function(e){return Object(l.jsx)(I,Object(r.a)({setUser:j},e))}}),Object(l.jsx)(O.b,{exact:!0,path:"/login",render:function(e){return Object(l.jsx)(S,Object(r.a)({setUser:j},e))}})]})]})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};u.a.get("/api/auth/loggedin").then((function(e){console.log("logged in user: ",e.data);var t=e.data;s.a.render(Object(l.jsx)(j.a,{children:Object(l.jsx)(T,{user:t})}),document.getElementById("root"))})),U()}},[[65,1,2]]]);
//# sourceMappingURL=main.8d65b9c7.chunk.js.map