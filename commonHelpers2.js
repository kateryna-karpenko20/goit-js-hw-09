import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),l=a.elements.email,o=a.elements.message,e={email:"",message:""};document.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem("feedback-form-state");if(t){const s=JSON.parse(t);e.email=s.email||"",e.message=s.message||"",l.value=e.email,o.value=e.message}});a.addEventListener("input",t=>{const{name:s,value:m}=t.target;e[s]=m.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),a.reset(),e.email="",e.message=""});
//# sourceMappingURL=commonHelpers2.js.map
