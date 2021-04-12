(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[0],{52:function(e,t,i){},68:function(e,t,i){"use strict";i.r(t);var s,n,a,r,o,c=i(0),l=i.n(c),h=i(27),p=i.n(h),d=(i(51),i(52),i(16)),f=i(11),u=i(7),j=i(75),m=i(74),b=i(1),v=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(f.b,{to:"/",children:Object(b.jsx)(j.a.Brand,{href:"/",children:"Ultimate Frisbee Playbook"})}),Object(b.jsxs)(j.a.Collapse,{className:"justify-content-end",children:[Object(b.jsx)(f.b,{to:"/learn",children:Object(b.jsx)(m.a.Link,{href:"/",children:"Learn"})}),Object(b.jsx)(f.b,{to:"/quiz",children:Object(b.jsx)(m.a.Link,{href:"/",children:"Quiz"})})]})]})})},x=i(70),g=function(e){var t=e.text,i=e.link;return Object(b.jsx)(f.b,{to:i,children:Object(b.jsx)(x.a,{variant:"success",size:"lg",children:t})})},O=i(71),k=i(72),w=i(73),y=i(38),D=i.n(y),z=i(43),S=i(9),M=i(10),T=M.a.div(s||(s=Object(S.a)(["\n    position: absolute;\n    width: 2rem;\n    height: 2rem;\n    border-radius: 50%;\n    background-color: red;\n    border: ",";\n    top: ",";\n    left: ",";\n    transition: top 2s, left 2s;\n\n    text-align: center;\n"])),(function(e){return e.highlight?"4px solid yellow":"none"}),(function(e){return"".concat(e.top,"rem")}),(function(e){return"".concat(e.left,"rem")})),L=M.a.div(n||(n=Object(S.a)(["\n    position: absolute;\n    width: 1rem;\n    height: 0.5rem;\n    border-radius: 50%;\n    background-color: white;\n    top: ",";\n    left: ",";\n    transition: top 2s, left 2s;\n"])),(function(e){return"".concat(e.top+.75,"rem")}),(function(e){return"".concat(e.left+1.5,"rem")})),q=function(e){var t=e.playerMoves,i=e.move,s=e.index;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(T,{top:t.initialTop,left:t.initialLeft,highlight:t.firstMover,onClick:function(){return i(s)}}),t.hasDisc&&Object(b.jsx)(L,{top:t.initialTop,left:t.initialLeft})]})},N=M.a.div(a||(a=Object(S.a)(["\n    width: 30rem;\n    height: 40rem;\n    background-color: green;\n"]))),I=M.a.div(r||(r=Object(S.a)(["\n    position: absolute;\n    width: 30rem;\n    top: 5rem;\n    border-bottom: 1px solid white;\n"]))),W=M.a.div(o||(o=Object(S.a)(["\n    position: absolute;\n    width: 30rem;\n    top: 35rem;\n    border-bottom: 1px solid white;\n"]))),C=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var H,F,E,A,V,Z=function(e){var t=e.playData,i=Object(c.useState)(t),s=Object(d.a)(i,2),n=s[0],a=s[1],r=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),i=(t[0],t[1]);return function(){return i((function(e){return e+1}))}}();function o(){var e=n;e.players[e.discMove[0]].hasDisc=!1,e.players[e.discMove[1]].hasDisc=!0,a(e)}var l=function(){var e=Object(z.a)(D.a.mark((function e(t){var i,s;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(i=n).players[t].firstMover=!1,a(i),s=0;case 4:if(!(s<i.players[t].moves.length)){e.next=15;break}return o(),i.players[t].initialTop=i.players[t].moves[s].top,i.players[t].initialLeft=i.players[t].moves[s].left,a(i),r(),e.next=12,C(2e3);case 12:s++,e.next=4;break;case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)(N,{children:[Object(b.jsx)(I,{}),n.players.map((function(e,t){return Object(b.jsx)(q,{playerMoves:e,pass:o,move:l,index:t})})),Object(b.jsx)(W,{})]})},P=function(){return Object(b.jsxs)(O.a,{children:[Object(b.jsxs)(k.a,{className:"text-center mt-5",children:[Object(b.jsx)("h1",{className:"m-auto",children:"Welcome to the Ultimate Frisbee Playbook!"}),Object(b.jsx)("h3",{children:"Learn about 5 common frisbee plays, and take an interactive quiz to assess your knowledge"})]}),Object(b.jsxs)(k.a,{className:"mt-5",children:[Object(b.jsx)(w.a,{className:"text-center",children:Object(b.jsx)(g,{link:"/learn",text:"Learn"})}),Object(b.jsx)(w.a,{className:"text-center",children:Object(b.jsx)(g,{link:"/quiz",text:"Quiz"})})]})]})},B=i(77),_={"Vertical Stack":{players:[{initialTop:10,initialLeft:15,moves:[{top:15,left:25},{top:25,left:15}],firstMover:!0,hasDisc:!1,getsDisc:!0},{initialTop:13,initialLeft:15,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:16,initialLeft:15,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:19,initialLeft:15,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:22,initialLeft:15,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:33,initialLeft:9,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:30,initialLeft:19,moves:[],firstMover:!1,hasDisc:!0,getsDisc:!1}],discMove:[6,0]},"Horizontal Stack":{players:[{initialTop:12,initialLeft:5,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!0},{initialTop:12,initialLeft:12,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:12,initialLeft:18,moves:[{top:25,left:18}],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:12,initialLeft:25,moves:[{top:2,left:25}],firstMover:!0,hasDisc:!1,getsDisc:!1},{initialTop:30,initialLeft:5,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:33,initialLeft:15,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:30,initialLeft:25,moves:[],firstMover:!1,hasDisc:!0,getsDisc:!1}],discMove:[6,3]},"Endzone Offense":{players:[{initialTop:0,initialLeft:15,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!0},{initialTop:2.25,initialLeft:15,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:4.5,initialLeft:15,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:6.75,initialLeft:15,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:9,initialLeft:15,moves:[{top:2,left:25}],firstMover:!0,hasDisc:!1,getsDisc:!1},{initialTop:20,initialLeft:15,moves:[],firstMover:!1,hasDisc:!0,getsDisc:!1},{initialTop:23,initialLeft:5,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1}],discMove:[5,4]},"Side Stack":{players:[{initialTop:12,initialLeft:2,moves:[{top:18,left:17},{top:25,left:15}],firstMover:!0,hasDisc:!1,getsDisc:!0},{initialTop:15,initialLeft:2,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:18,initialLeft:2,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:21,initialLeft:2,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:24,initialLeft:2,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:33,initialLeft:9,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:30,initialLeft:19,moves:[],firstMover:!1,hasDisc:!0,getsDisc:!1}],discMove:[6,0]},Scallywag:{players:[{initialTop:14,initialLeft:12,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!0},{initialTop:14,initialLeft:18,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:16,initialLeft:15,moves:[{top:3,left:18}],firstMover:!0,hasDisc:!1,getsDisc:!1},{initialTop:19,initialLeft:15,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:22,initialLeft:15,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:33,initialLeft:9,moves:[],firstMover:!1,hasDisc:!1,getsDisc:!1},{initialTop:30,initialLeft:19,moves:[],firstMover:!1,hasDisc:!0,getsDisc:!1}],discMove:[6,2]}},Q=[{id:"1",name:"Vertical Stack",img:"https://ui-design-final.s3.amazonaws.com/vert-stack.png",description:"One by one, the receivers make their runs for a pass (cuts). For each \n            receiver to have an open space to cut into, the other five receivers have to stay out of the way. \n            Knowing who will cut and who will stay requires the players to have a good awareness of one another. \n            The simplest way of cutting is for the person on the front of the stack to cut first, and then the \n            second and so on until the disc is received.",faqs:[{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."},{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."},{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."}],play_moves:_["Vertical Stack"]},{id:"2",name:"Horizontal Stack",img:"https://ui-design-final.s3.amazonaws.com/horizontal-stack.png",description:"Instead of setting up in a vertical line (the vertical stack), the Horizontal Stack \n            (a.k.a \u2018ho stack\u2019) has two horizontal lines, 3 handlers and 4 receivers up field. This creates passing \n            space in front and behind the receivers.",faqs:[{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."},{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."},{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."}],play_moves:_["Horizontal Stack"]},{id:"3",name:"Endzone Offense",img:"https://ui-design-final.s3.amazonaws.com/endzone.png",description:"This play is used when we are close to the endzone. The 'iso' cuts away from the stack,\n            which is situated at the back of the endzone. This gives them space to recieve the disc in a \n            relatively tight area. Make sure to indicate who the 'iso' is as you set up this play.",faqs:[{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."},{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."},{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."}],play_moves:_["Endzone Offense"]},{id:"4",name:"Side Stack",img:"https://ui-design-final.s3.amazonaws.com/side-stack.png",description:"The side stack is very similar to a vertical stack, but it is set up on the\n            side of the field to leave more space in the middle. The first cutter can either cut \n            deep on cut in towards the handlers.",faqs:[{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."},{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."},{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."}],play_moves:_["Side Stack"]},{id:"5",name:"Scallywag",img:"https://ui-design-final.s3.amazonaws.com/scallywag.png",description:"Scallywag allows us to open up space for a regular cut or for a deep cut. The\n            back of the stack cuts in to either the open or the break side. The next person in \n            the stack cuts in to the opposite side. Third in the stack cuts deep as a continue \n            cut or deep look.\n        ",faqs:[{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."},{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."},{question:"Why is this useful?",answer:"It organizes players to make sure one person has space to recieve the disc."}],play_moves:_.Scallywag}],X=function(){return Object(b.jsxs)(O.a,{children:[Object(b.jsxs)(k.a,{className:"mt-5",children:[Object(b.jsx)("h1",{children:"Click on a play to learn more!"}),Object(b.jsxs)("h4",{children:["Or go to the "," ",Object(b.jsx)(f.b,{to:"/glossary",children:"glossary of terms"})," ","to brush up on your ultimate terms!"]})]}),Object(b.jsx)(k.a,{className:"mt-5",children:Q.map((function(e,t){return Object(b.jsx)(w.a,{children:Object(b.jsx)(f.b,{to:"/learn/".concat(t),children:Object(b.jsxs)(B.a,{className:"m-auto",children:[Object(b.jsx)(B.a.Img,{variant:"top",src:e.img}),Object(b.jsx)(B.a.Body,{children:Object(b.jsx)(B.a.Title,{children:e.name})})]})})})}))})]})},U=M.a.div(H||(H=Object(S.a)(["\n    .hvr-icon-forward {\n        display: inline-block;\n        vertical-align: middle;\n        -webkit-transform: perspective(1px) translateZ(0);\n        transform: perspective(1px) translateZ(0);\n        box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n        -webkit-transition-duration: 0.1s;\n        transition-duration: 0.1s;\n    }\n    .hvr-icon-forward .hvr-icon {\n        -webkit-transform: translateZ(0);\n        transform: translateZ(0);\n        -webkit-transition-duration: 0.1s;\n        transition-duration: 0.1s;\n        -webkit-transition-property: transform;\n        transition-property: transform;\n        -webkit-transition-timing-function: ease-out;\n        transition-timing-function: ease-out;\n    }\n    .hvr-icon-forward:hover .hvr-icon, .hvr-icon-forward:focus .hvr-icon, .hvr-icon-forward:active .hvr-icon {\n        -webkit-transform: translateX(4px);\n        transform: translateX(4px);\n    }\n\n    .hvr-icon-back {\n        display: inline-block;\n        vertical-align: middle;\n        -webkit-transform: perspective(1px) translateZ(0);\n        transform: perspective(1px) translateZ(0);\n        box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n        -webkit-transition-duration: 0.1s;\n        transition-duration: 0.1s;\n    }\n    .hvr-icon-back .hvr-icon {\n        -webkit-transform: translateZ(0);\n        transform: translateZ(0);\n        -webkit-transition-duration: 0.1s;\n        transition-duration: 0.1s;\n        -webkit-transition-property: transform;\n        transition-property: transform;\n        -webkit-transition-timing-function: ease-out;\n        transition-timing-function: ease-out;\n    }\n    .hvr-icon-back:hover .hvr-icon, .hvr-icon-back:focus .hvr-icon, .hvr-icon-back:active .hvr-icon {\n        -webkit-transform: translateX(-4px);\n        transform: translateX(-4px);\n    }\n"]))),G=M.a.span(F||(F=Object(S.a)(["\n    margin: 0 1rem;\n"]))),J=function(e){var t=e.text,i=e.link,s=e.forward;return Object(b.jsx)(U,{children:Object(b.jsx)(f.b,{to:i,children:s?Object(b.jsxs)(x.a,{variant:"success",className:"hvr-icon-forward",children:[Object(b.jsx)(G,{children:t}),Object(b.jsx)("i",{className:"fas fa-arrow-right hvr-icon"})]}):Object(b.jsxs)(x.a,{variant:"success",className:"hvr-icon-back",children:[Object(b.jsx)("i",{className:"fas fa-arrow-left hvr-icon"}),Object(b.jsx)(G,{children:t})]})})})},K=(M.a.img(E||(E=Object(S.a)(["\n    width: 30rem;\n"]))),function(){var e=Object(u.g)().id,t=Q[e];return Object(b.jsxs)(O.a,{fluid:!0,children:[Object(b.jsx)(k.a,{className:"mt-3 px-5",children:Object(b.jsx)("h2",{children:t.name})}),Object(b.jsxs)(k.a,{className:"mt-2 px-5",children:[Object(b.jsxs)(w.a,{children:[Object(b.jsx)("h6",{children:"Click on the yellow highlighted dot to see the play in action!"}),Object(b.jsx)(Z,{playData:t.play_moves})]}),Object(b.jsxs)(w.a,{children:[Object(b.jsx)("h4",{children:"Description:"}),Object(b.jsx)("p",{children:t.description}),Object(b.jsx)("h4",{children:"Frequently asked questions"}),t.faqs.map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("strong",{children:e.question}),Object(b.jsx)("p",{children:e.answer})]})}))]})]}),Object(b.jsx)(k.a,{className:"mt-2 px-5",children:Object(b.jsx)(J,{link:"/learn",text:"Back to Plays",forward:!1})})]})}),R=i(76),Y=[{img:"https://ui-design-final.s3.amazonaws.com/vert-stack-quiz.png",options:["Horizontal Stack","Vertical Stack","Endzone Offense","Side Stack"],answer:"Vertical Stack",firstMover:"0",explination:"Vertical Stack is the most common offensive play in ultimate. \n            We use it to organize our offense and make space for players to recieve the disk."},{img:"https://ui-design-final.s3.amazonaws.com/horizontal-stack-quiz.png",options:["Vertical Stack","Side Stack","Endzone Offense","Horizontal Stack"],firstMover:"3",answer:"Horizontal Stack",explination:"Horizontal Stack creates passing space for the recievers."},{img:"https://ui-design-final.s3.amazonaws.com/endzone-quiz.png",options:["Vertical Stack","Side Stack","Endzone Offense","Horizontal Stack"],answer:"Endzone Offense",firstMover:"4",explination:"We use this play in a tight space in the endzone."},{img:"https://ui-design-final.s3.amazonaws.com/side-stack-quiz.png",options:["Horizontal Stack","Endzone Offense","Side Stack","Scallywag"],firstMover:"0",answer:"Side Stack",explination:"The side stack opens up most of the field for big cuts."},{img:"https://ui-design-final.s3.amazonaws.com/scallywag-quiz.png",options:["Horizontal Stack","Endzone Offense","Side Stack","Scallywag"],answer:"Scallywag",firstMover:"2",explination:"Scallywag makes space for deep cuts."}],$=M.a.img(A||(A=Object(S.a)(["\n    width: 30rem;\n"]))),ee=function(e){var t=e.correctAnswers,i=e.setCorrectAnswers,s=Object(u.f)(),n=Object(c.useState)(0),a=Object(d.a)(n,2),r=a[0],o=a[1],l=Object(c.useState)(-1),h=Object(d.a)(l,2),p=h[0],f=h[1],j=Object(c.useState)(""),m=Object(d.a)(j,2),v=m[0],g=m[1],y=Object(c.useState)(!1),D=Object(d.a)(y,2),z=D[0],S=D[1],M=Object(c.useState)(!1),T=Object(d.a)(M,2),L=T[0],q=T[1];return Object(b.jsxs)(O.a,{fluid:!0,children:[Object(b.jsx)(k.a,{className:"mt-2 px-5",children:Object(b.jsx)("h2",{children:"Quiz"})}),L&&Object(b.jsxs)(R.a,{variant:z?"success":"danger",children:[Object(b.jsxs)("strong",{children:[z?"Correct!":"Incorrect.","This play is a ",Y[r].answer,". Player ",Y[r].firstMover," makes the first cut."]}),Object(b.jsx)("div",{children:Y[r].explination})]}),Object(b.jsxs)(k.a,{className:"mt-2 px-5",children:[Object(b.jsx)(w.a,{children:Object(b.jsx)($,{src:Y[r].img,alt:Y[r]})}),Object(b.jsxs)(w.a,{className:"text-center",children:[Object(b.jsx)("h5",{children:"Match the image with the play name describing it"}),Y[r].options.map((function(e,t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x.a,{className:"my-3",variant:"outline-dark",size:"lg",onClick:function(){return f(e)},active:p===e,children:e}),Object(b.jsx)("br",{})]})})),Object(b.jsx)("h5",{className:"mt-4",children:"Which player cuts first? Enter their number here:"}),Object(b.jsx)("input",{type:"text",value:v,onChange:function(e){return g(e.target.value)}})]})]}),Object(b.jsx)(k.a,{className:"px-5 float-right",children:L?Object(b.jsx)(x.a,{className:"my-3",variant:"success",size:"lg",onClick:function(){r+1<Y.length?(o(r+1),f(-1),q(!1)):s.push("/quiz-end")},children:"Next Question"}):Object(b.jsx)(x.a,{className:"my-3",variant:"success",size:"lg",onClick:function(){return S(p===Y[r].answer&&v===Y[r].firstMover),g(""),p===Y[r].answer&&v===Y[r].firstMover&&i(t+1),void q(!0)},children:"Submit"})})]})},te=M.a.main(V||(V=Object(S.a)(["\n    padding: 2rem 5rem;\n"]))),ie=function(){return Object(b.jsxs)(te,{children:[Object(b.jsx)("h3",{children:"Glossary of Ultimate Frisbee Terms"}),Object(b.jsx)("p",{children:"Stack: A line of players ready to make cuts"}),Object(b.jsx)("p",{children:"Handler: Person who throws the disk"}),Object(b.jsx)("p",{children:"Cutter: Person who receives the disk"}),Object(b.jsx)("p",{children:"Cut: Sharp movement out to the spot in the field where the player expects to receive the disk"}),Object(b.jsx)("p",{children:"Force: Forcing means to make the opposing thrower throw a certain way. For example to force backhand would mean to stand on their right side completely giving them the ability to backhand"}),Object(b.jsx)("p",{children:"Open Side: The side of the field that the handler can throw to (so the force)"}),Object(b.jsx)("p",{children:"Break Side: The side of the field that throws are being guarded against"}),Object(b.jsx)("p",{children:"Huck: A deep throw"}),Object(b.jsx)("div",{className:"mt-5",children:Object(b.jsx)(J,{link:"/learn",text:"Back to Learn",forward:!1})})]})},se=function(e){var t=e.correctAnswers;return Object(b.jsxs)(O.a,{children:[Object(b.jsx)(k.a,{className:"text-center mt-5",children:Object(b.jsxs)("h1",{className:"m-auto",children:["Congratulations, you got ",t," plays correct."]})}),Object(b.jsxs)(k.a,{className:"mt-5",children:[Object(b.jsx)(w.a,{className:"text-center",children:Object(b.jsx)(g,{link:"/learn",text:"Go back to review the plays"})}),Object(b.jsx)(w.a,{className:"text-center",children:Object(b.jsx)(g,{link:"/quiz",text:"Take the quiz again"})})]})]})};var ne=function(){var e=Object(c.useState)(0),t=Object(d.a)(e,2),i=t[0],s=t[1];return Object(b.jsxs)(f.a,{basename:"/ultimate-playbook",children:[Object(b.jsx)(v,{}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{exact:!0,path:"/",component:P}),Object(b.jsx)(u.a,{exact:!0,path:"/learn",component:X}),Object(b.jsx)(u.a,{path:"/learn/:id",component:K}),Object(b.jsx)(u.a,{exact:!0,path:"/quiz",children:Object(b.jsx)(ee,{correctAnswers:i,setCorrectAnswers:s})}),Object(b.jsx)(u.a,{exact:!0,path:"/quiz-end",children:Object(b.jsx)(se,{correctAnswers:i})}),Object(b.jsx)(u.a,{exact:!0,path:"/glossary",component:ie})]})]})};p.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(ne,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.35bbad2d.chunk.js.map