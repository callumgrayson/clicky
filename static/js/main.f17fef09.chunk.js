(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(t,e,a){t.exports=a(309)},188:function(t,e,a){},307:function(t,e,a){},309:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),c=a(22),o=a.n(c),r=(a(188),a(30)),l=a(31),s=a(33),m=a(32),u=a(34),p=a(23),d=a(48),h=a.n(d),g=a(9),f=a(85),v=a.n(f),x=a(12);function b(t){var e=t.classes,a=t.times,n=t.ip;return a.length?i.a.createElement("div",null,i.a.createElement(g.f,{align:"center",gutterBottom:!0},"Your Clicks"),a.map(function(t){var a=t.timestamp.toString(),c=t.count,o=new Date(t.timestamp).toString(),r="".concat(c," : ").concat(o," from ").concat(n);return i.a.createElement(g.c,{key:a,className:e.listItem1},i.a.createElement(g.d,{primary:r}))})):i.a.createElement("div",{className:e.placeholderCl},i.a.createElement(g.f,{align:"center"}))}var y=Object(x.withStyles)(function(t){return{body:{margin:0,padding:0,boxSizing:"content-box"},bigContainerCl:{margin:0,padding:0,width:"100%",minHeight:"97vh",display:"flex",justifyContent:"center"},paperCl:{width:"100%",maxWidth:700,minHeight:"80%",display:"flex",justifyContent:"center",marginTop:"10px"},big1Space:{display:"flex",justifyContent:"center",alignContent:"start",flexWrap:"wrap",width:"100%",height:"auto",padding:"5px 0",margin:"5px"},heading:{width:"100%",marginBottom:"10px",padding:0},countBar:{width:"100%",display:"flex",justifyContent:"space-evenly",padding:"0 20px"},countBox:{display:"flex",justifyItems:"center",alignItems:"center",margin:"0 20px"},countBoxDiv:{display:"flex",margin:"20px"},big2ButtonBox:{display:"flex",alignItems:"center",justifyContent:"center",margin:"0 20px"},listItem1:{textAlign:"center"},list1:{width:"100%",height:"auto",maxHeight:"80vh",overflow:"hidden"}}})(function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(s.a)(this,Object(m.a)(e).call(this,t))).state={count:0,ip:"",timeStamps:[]},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://nxe6l78bx2.execute-api.ap-southeast-1.amazonaws.com/dev/clinc").then(function(e){var a=e.data.currentClickCount;t.setState({count:a})})}},{key:"handleClick",value:function(t){var e=this;t.preventDefault();var a=Date.now(),n={timestamp:a};h.a.post("https://nxe6l78bx2.execute-api.ap-southeast-1.amazonaws.com/dev/clinc",n,{"content-type":"application/json"}).then(function(t){if(t.data.newClickCount>0){var n=[{count:e.state.count+1,timestamp:a}].concat(e.state.timeStamps);e.setState(function(a){return{count:e.state.count+1,timeStamps:n,ip:t.data.sourceIp}})}else console.log("Error: Did not successfully write timestamp")})}},{key:"render",value:function(){var t=this.props.classes;return i.a.createElement("div",{className:t.bigContainerCl},i.a.createElement(g.e,{className:t.paperCl},i.a.createElement("div",{className:t.big1Space},i.a.createElement(g.f,{className:t.heading,variant:"h3",align:"center",gutterBottom:!0},"Clicky"),i.a.createElement(g.f,{className:t.heading,variant:"h6",align:"center",gutterBottom:!0},"Add your click to the count!"),i.a.createElement("div",{className:t.countBar},i.a.createElement("div",{className:t.countBox},i.a.createElement("div",{className:t.countBoxDiv},i.a.createElement(g.f,{variant:"h6",align:"center",gutterBottom:!0},"Current Count:")),i.a.createElement("div",{className:t.countBoxDiv},i.a.createElement(g.f,{variant:"h4",align:"center",gutterBottom:!0},this.state.count))),i.a.createElement("div",{className:t.big2ButtonBox},i.a.createElement(g.a,{variant:"fab",color:"primary","aria-label":"Add",onClick:this.handleClick},i.a.createElement(v.a,null)))),i.a.createElement(g.b,{className:t.list1,disablePadding:!0,dense:!0},i.a.createElement(b,{classes:t,times:this.state.timeStamps,ip:this.state.ip})))))}}]),e}(i.a.Component)),C=(a(307),function(t){function e(){return Object(r.a)(this,e),Object(s.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(y,null)}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[183,2,1]]]);
//# sourceMappingURL=main.f17fef09.chunk.js.map