"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[659],{4659:function(e,r,n){n.r(r);var l=n(9439),a=n(2791),i=n(9434),o=n(8724),t=n(7689),s=n(1087),d=n(5218),u=n(2730),c=n(5946),m=n(4087),p=n(2392),h=n(8208),v=n(5442),f=n(176),x=n(3466),b=n(4224),g=n(184);r.default=function(){var e=(0,i.I0)(),r=(0,a.useState)(""),n=(0,l.Z)(r,2),Z=n[0],y=n[1],I=(0,a.useState)(""),N=(0,l.Z)(I,2),k=N[0],j=N[1],_=(0,a.useState)(""),R=(0,l.Z)(_,2),q=R[0],C=R[1],F=(0,t.s0)(),P=function(e){var r=e.target,n=r.name,l=r.value;switch(n){case"name":return y(l);case"email":return j(l);case"password":return C(l);default:return}};return(0,g.jsxs)(u.t,{children:[(0,g.jsx)(c.X,{children:"Register"}),(0,g.jsx)(m.xu,{display:"flex",justifyContent:"center",children:(0,g.jsxs)("form",{onSubmit:function(r){r.preventDefault(),e((0,o.register)({name:Z,email:k,password:q})).unwrap().then((function(){F("/"),(0,d.Am)("You succesfully logined!",{style:{backgroundColor:"#0b980b",color:"#212121"}})})).catch((function(){return d.Am.error("Error of login!")})),y(""),j(""),C("")},autoComplete:"off",children:[(0,g.jsx)(p.NI,{mx:"2",children:(0,g.jsxs)(h.l,{children:["Name",(0,g.jsx)(v.I,{type:"text",name:"name",value:Z,onChange:P,placeholder:"Enter your name",_placeholder:{opacity:.6,color:"black"}})]})}),(0,g.jsx)(p.NI,{mx:"2",children:(0,g.jsxs)(h.l,{children:["Email",(0,g.jsx)(v.I,{type:"email",name:"email",value:k,onChange:P,placeholder:"Enter your email",_placeholder:{opacity:.6,color:"black"}})]})}),(0,g.jsx)(p.NI,{mx:"2",children:(0,g.jsxs)(h.l,{children:["Password",(0,g.jsx)(v.I,{type:"password",name:"password",value:q,onChange:P,placeholder:"Enter your password",_placeholder:{opacity:.6,color:"black"}})]})}),(0,g.jsxs)(f.k,{direction:"column",justify:"center",align:"center",children:[(0,g.jsx)(x.r,{mb:"3",color:"#00008B",children:(0,g.jsx)(s.rU,{to:"/login",children:"Go to Log in"})}),(0,g.jsx)(b.z,{type:"submit",colorScheme:"teal",mb:"10",mx:[["10","50px","50px"]],size:"lg",children:"Sign Up"})]})]})})]})}},2730:function(e,r,n){n.d(r,{t:function(){return i}});var l=n(8206),a=n(184),i=function(e){var r=e.children;return(0,a.jsx)(l.W,{maxWidth:["sm","md","lg","xl","2xl"],position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",paddingTop:"20px",paddingBottom:"40px",sx:{backgroundColor:"hsla(192, 40%, 84%, 0.6)",backdropFilter:"blur(6px)",border:"2px solid white",borderRadius:"1rem"},children:r})}},2392:function(e,r,n){n.d(r,{NI:function(){return j},NJ:function(){return k},e:function(){return Z}});var l=n(1413),a=n(5987),i=n(9439),o=n(9886),t=n(4591),s=n(7872),d=n(9219),u=n(2996),c=n(2503),m=n(6992),p=n(2791),h=n(184),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],x=(0,o.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),b=(0,i.Z)(x,2),g=b[0],Z=b[1],y=(0,o.k)({strict:!1,name:"FormControlContext"}),I=(0,i.Z)(y,2),N=I[0],k=I[1];var j=(0,s.G)((function(e,r){var n=(0,d.jC)("Form",e),o=function(e){var r=e.id,n=e.isRequired,o=e.isInvalid,s=e.isDisabled,d=e.isReadOnly,u=(0,a.Z)(e,v),c=(0,p.useId)(),h=r||"field-".concat(c),f="".concat(h,"-label"),x="".concat(h,"-feedback"),b="".concat(h,"-helptext"),g=(0,p.useState)(!1),Z=(0,i.Z)(g,2),y=Z[0],I=Z[1],N=(0,p.useState)(!1),k=(0,i.Z)(N,2),j=k[0],_=k[1],R=(0,p.useState)(!1),q=(0,i.Z)(R,2),C=q[0],F=q[1],P=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({id:b},e),{},{ref:(0,t.lq)(r,(function(e){e&&_(!0)}))})}),[b]),w=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({},e),{},{ref:r,"data-focus":(0,m.PB)(C),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(o),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:h})}),[h,s,C,o,d,f]),S=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({id:x},e),{},{ref:(0,t.lq)(r,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[x]),T=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)((0,l.Z)({},e),u),{},{ref:r,role:"group"})}),[u]),O=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,l.Z)((0,l.Z)({},e),{},{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!n,isInvalid:!!o,isReadOnly:!!d,isDisabled:!!s,isFocused:!!C,onFocus:function(){return F(!0)},onBlur:function(){return F(!1)},hasFeedbackText:y,setHasFeedbackText:I,hasHelpText:j,setHasHelpText:_,id:h,labelId:f,feedbackId:x,helpTextId:b,htmlProps:u,getHelpTextProps:P,getErrorMessageProps:S,getRootProps:T,getLabelProps:w,getRequiredIndicatorProps:O}}((0,u.Lr)(e)),s=o.getRootProps,x=(o.htmlProps,(0,a.Z)(o,f)),b=(0,m.cx)("chakra-form-control",e.className);return(0,h.jsx)(N,{value:x,children:(0,h.jsx)(g,{value:n,children:(0,h.jsx)(c.m.div,(0,l.Z)((0,l.Z)({},s({},r)),{},{className:b,__css:n.container}))})})}));j.displayName="FormControl",(0,s.G)((function(e,r){var n=k(),a=Z(),i=(0,m.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,l.Z)((0,l.Z)({},null==n?void 0:n.getHelpTextProps(e,r)),{},{__css:a.helperText,className:i}))})).displayName="FormHelperText"},8208:function(e,r,n){n.d(r,{l:function(){return p}});var l=n(1413),a=n(5987),i=n(2392),o=n(7872),t=n(9219),s=n(2996),d=n(2503),u=n(6992),c=n(184),m=["className","children","requiredIndicator","optionalIndicator"],p=(0,o.G)((function(e,r){var n,o=(0,t.mq)("FormLabel",e),p=(0,s.Lr)(e),v=(p.className,p.children),f=p.requiredIndicator,x=void 0===f?(0,c.jsx)(h,{}):f,b=p.optionalIndicator,g=void 0===b?null:b,Z=(0,a.Z)(p,m),y=(0,i.NJ)(),I=null!=(n=null==y?void 0:y.getLabelProps(Z,r))?n:(0,l.Z)({ref:r},Z);return(0,c.jsxs)(d.m.label,(0,l.Z)((0,l.Z)({},I),{},{className:(0,u.cx)("chakra-form__label",p.className),__css:(0,l.Z)({display:"block",textAlign:"start"},o),children:[v,(null==y?void 0:y.isRequired)?x:g]}))}));p.displayName="FormLabel";var h=(0,o.G)((function(e,r){var n=(0,i.NJ)(),a=(0,i.e)();if(!(null==n?void 0:n.isRequired))return null;var o=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,l.Z)((0,l.Z)({},null==n?void 0:n.getRequiredIndicatorProps(e,r)),{},{__css:a.requiredIndicator,className:o}))}));h.displayName="RequiredIndicator"},5442:function(e,r,n){n.d(r,{I:function(){return f}});var l=n(1413),a=n(5987),i=n(2392),o=n(6992),t=["isDisabled","isInvalid","isReadOnly","isRequired"],s=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var r=function(e){var r,n,t,d=(0,i.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,p=e.required,h=e.isRequired,v=e.isInvalid,f=e.isReadOnly,x=e.isDisabled,b=e.onFocus,g=e.onBlur,Z=(0,a.Z)(e,s),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&y.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&y.push(d.helpTextId);return(0,l.Z)((0,l.Z)({},Z),{},{"aria-describedby":y.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(r=null!=c?c:x)?r:null==d?void 0:d.isDisabled,isReadOnly:null!=(n=null!=m?m:f)?n:null==d?void 0:d.isReadOnly,isRequired:null!=(t=null!=p?p:h)?t:null==d?void 0:d.isRequired,isInvalid:null!=v?v:null==d?void 0:d.isInvalid,onFocus:(0,o.v0)(null==d?void 0:d.onFocus,b),onBlur:(0,o.v0)(null==d?void 0:d.onBlur,g)})}(e),n=r.isDisabled,d=r.isInvalid,u=r.isReadOnly,c=r.isRequired,m=(0,a.Z)(r,t);return(0,l.Z)((0,l.Z)({},m),{},{disabled:n,readOnly:u,required:c,"aria-invalid":(0,o.Qm)(d),"aria-required":(0,o.Qm)(c),"aria-readonly":(0,o.Qm)(u)})}var u=n(7872),c=n(9219),m=n(2996),p=n(2503),h=n(184),v=["htmlSize"],f=(0,u.G)((function(e,r){var n=e.htmlSize,i=(0,a.Z)(e,v),t=(0,c.jC)("Input",i),s=d((0,m.Lr)(i)),u=(0,o.cx)("chakra-input",e.className);return(0,h.jsx)(p.m.input,(0,l.Z)((0,l.Z)({size:n},s),{},{__css:t.field,ref:r,className:u}))}));f.displayName="Input",f.id="Input"},5946:function(e,r,n){n.d(r,{X:function(){return m}});var l=n(1413),a=n(5987),i=n(7872),o=n(9219),t=n(2996),s=n(2503),d=n(6992),u=n(184),c=["className"],m=(0,i.G)((function(e,r){var n=(0,o.mq)("Heading",e),i=(0,t.Lr)(e),m=(i.className,(0,a.Z)(i,c));return(0,u.jsx)(s.m.h2,(0,l.Z)((0,l.Z)({ref:r,className:(0,d.cx)("chakra-heading",e.className)},m),{},{__css:n}))}));m.displayName="Heading"},8206:function(e,r,n){n.d(r,{W:function(){return m}});var l=n(1413),a=n(5987),i=n(7872),o=n(2996),t=n(9219),s=n(2503),d=n(6992),u=n(184),c=["className","centerContent"],m=(0,i.G)((function(e,r){var n=(0,o.Lr)(e),i=n.className,m=n.centerContent,p=(0,a.Z)(n,c),h=(0,t.mq)("Container",e);return(0,u.jsx)(s.m.div,(0,l.Z)((0,l.Z)({ref:r,className:(0,d.cx)("chakra-container",i)},p),{},{__css:(0,l.Z)((0,l.Z)({},h),m&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));m.displayName="Container"}}]);
//# sourceMappingURL=659.05edccac.chunk.js.map