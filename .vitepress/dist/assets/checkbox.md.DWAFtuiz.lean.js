import{_ as g,E as y,e as d,o as p,ae as h,c as l,h as t,b as k,F as c,D as o,g as F}from"./chunks/framework.DVKhSXg5.js";const C={data(){return{checked:!0,checkList:[],renderList:["苹果","香蕉","橙子"],checkAll:!1,indeterminate:!1}},methods:{onChange(){this.checkList=this.checkAll?["苹果","香蕉","橙子"]:[],this.indeterminate=!1},onItemChange(e){this.checkAll=e.length===this.renderList.length,this.indeterminate=e.length>0&&!this.checkAll}}},_=JSON.parse('{"title":"Checkbox 多选框","description":"","frontmatter":{},"headers":[],"relativePath":"checkbox.md","filePath":"checkbox.md","lastUpdated":null}');function u(e,s,m,A,i,E){const n=y("z-checkbox");return p(),d("div",null,[s[10]||(s[10]=h("",4)),l(n,{modelValue:i.checked,"onUpdate:modelValue":s[0]||(s[0]=a=>i.checked=a)},{default:t(()=>s[5]||(s[5]=[k("备选项")])),_:1},8,["modelValue"]),s[11]||(s[11]=h("",4)),l(n,{modelValue:i.checked,"onUpdate:modelValue":s[1]||(s[1]=a=>i.checked=a),disabled:""},{default:t(()=>s[6]||(s[6]=[k("备选项")])),_:1},8,["modelValue"]),s[12]||(s[12]=h("",4)),l(n,{modelValue:i.checked,"onUpdate:modelValue":s[2]||(s[2]=a=>i.checked=a),readonly:""},{default:t(()=>s[7]||(s[7]=[k("备选项")])),_:1},8,["modelValue"]),s[13]||(s[13]=h("",4)),l(n,{indeterminate:i.indeterminate},{default:t(()=>s[8]||(s[8]=[k("备选项")])),_:1},8,["indeterminate"]),s[14]||(s[14]=h("",3)),l(n,{modelValue:i.checkAll,"onUpdate:modelValue":s[3]||(s[3]=a=>i.checkAll=a),onChange:E.onChange,indeterminate:i.indeterminate},{default:t(()=>s[9]||(s[9]=[k("全选")])),_:1},8,["modelValue","onChange","indeterminate"]),(p(!0),d(c,null,o(i.renderList,a=>(p(),F(n,{modelValue:i.checkList,"onUpdate:modelValue":s[4]||(s[4]=r=>i.checkList=r),onChange:E.onItemChange,label:a,value:a},null,8,["modelValue","onChange","label","value"]))),256)),s[15]||(s[15]=h("",1))])}const B=g(C,[["render",u]]);export{_ as __pageData,B as default};
