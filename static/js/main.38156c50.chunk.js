(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(10),r=n.n(o),s=n(12),i=n(4),l=n(5),u=n(7),m=n(6),b=n(3),d=n.n(b),h=n(0),j=function(t){var e=t.searchContact,n=t.deleteContact;return Object(h.jsx)("ul",{className:d.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:d.a.item,children:[Object(h.jsxs)("p",{className:d.a.contact,children:[" ","- ",a,": ",c]}),Object(h.jsx)("button",{type:"button",className:d.a.btn,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},f=n(9),p=n.n(f),v=function(t){var e=t.filter,n=t.searchContact;return Object(h.jsxs)("label",{className:p.a.label,children:[" ","Find contacts by name",Object(h.jsx)("input",{className:p.a.input,onChange:function(t){return n(t.target.value)},value:e})]})},C=n(11),O=n(20),_=n(2),x=n.n(_),N=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.onHandleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(C.a)({},a,c))},t.onHandleSubmit=function(e){e.preventDefault(),(0,t.props.addContact)({id:Object(O.a)(),name:t.state.name,number:t.state.number}),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{className:x.a.form,onSubmit:this.onHandleSubmit,children:[Object(h.jsxs)("label",{className:x.a.label,children:["Name",Object(h.jsx)("input",{type:"text",value:e,name:"name",onChange:this.onHandleChange,placeholder:"Enter your name",className:x.a.input,required:!0})]}),Object(h.jsxs)("label",{className:x.a.label,children:["Number",Object(h.jsx)("input",{type:"text",value:n,name:"number",onChange:this.onHandleChange,placeholder:"",className:x.a.input,required:!0})]}),Object(h.jsx)("input",{type:"submit",value:"Add contact",className:x.a.button})]})}}]),n}(a.Component),g=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.onHandleNewContact=function(e){var n=t.state.contacts;n.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):(n=[].concat(Object(s.a)(n),[e]),t.setState({contacts:n}))},t.onHandleChange=function(e){var n=e.target.value;t.setState({title:n})},t.onHandleFilter=function(e){t.setState({filter:e})},t.onHandleContactSearch=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(N,{addContact:this.onHandleNewContact}),Object(h.jsx)(v,{searchContact:this.onHandleFilter,value:t}),Object(h.jsx)(j,{searchContact:this.onHandleContactSearch(),deleteContact:this.deleteContact})]})}}]),n}(a.Component);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={form:"Form_form__3yU7A",label:"Form_label__3NRKt",input:"Form_input__3Pitr",button:"Form_button__3sG0t"}},3:function(t,e,n){t.exports={list:"ContactsList_list__1cDnX",item:"ContactsList_item__1ZNtG",contact:"ContactsList_contact__3PYal",btn:"ContactsList_btn__1Ue9P"}},9:function(t,e,n){t.exports={label:"Filter_label__vhLdF",input:"Filter_input__1yvrN"}}},[[18,1,2]]]);
//# sourceMappingURL=main.38156c50.chunk.js.map