(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(20)},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),s=n.n(l),c=(n(18),n(3)),i=n(2),o=n(6),h=n(7),p=n(10),u=n(8),d=n(11),g=n(1),y=(n(19),n(9)),m=function(e,t){for(var n=e.replace(/ /g,"_").split(""),a=t.length,r=[],l=0;l<t.length;l++)r[l]=[];n.map(function(e,t,n){var l=2*a-2;t<n.length&&t%l<l&&(t%l<a?r[t%l].push(e):r[l-t%l].push(e))});for(var s=t.split(""),c=[],i=0;i<s.length;i++)c[i]=r[s[i]-1];return c},f=function(e,t){var n=e.replace(/_/g," ").split(""),a=v(n,t),r=[];return w(r,a),r},v=function(e,t){var n=[],a=2*t.length-2,r=[],l=Math.floor(e.length/a),s=2*Math.floor(e.length/a),c=t.length-2;r.push(l);for(var i=0;i<c;i++)r.push(s);e.length%a&&(r=r.map(function(t,n){return n<e.length-1&&(t+=1),r[n]=t}));var o=e.length-r.reduce(function(e,t){return e+t});r.push(o);for(var h=t.split(""),p=[],u=0;u<h.length;u++)p[u]=r[h[u]-1];p.reduce(function(t,a){var r=e.slice(t,t+a);return n.push(r),t+a},0);for(var d=[],g=0;g<h.length;g++)d[h[g]-1]=n[g];return d},w=function e(t,n){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=[].concat.apply([],n).join("").length;if(console.log(r),a)for(var l=0;l<n.length;l++)t.push(n[l][0]),n[l]=n[l].slice(1);else for(var s=n.slice(1),c=0;c<s.length;c++)s[c][0]&&t.push(s[c][0]),n[c+1]=n[c+1]&&n[c+1].slice(1);if(r>0)return e(t,n.reverse(),!1)},_=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={encrypt:{task_text:"",result_text:"",key:""},decrypt:{task_text:"",result_text:"",key:""},error:!1},n.updatePlainText=n.updatePlainText.bind(Object(g.a)(Object(g.a)(n))),n.updateCipherText=n.updateCipherText.bind(Object(g.a)(Object(g.a)(n))),n.cryptHandler=n.cryptHandler.bind(Object(g.a)(Object(g.a)(n))),n.updatePlainKey=n.updatePlainKey.bind(Object(g.a)(Object(g.a)(n))),n.updateCipherKey=n.updateCipherKey.bind(Object(g.a)(Object(g.a)(n))),n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"updatePlainText",value:function(e){this.setState({encrypt:Object(i.a)({},this.state.encrypt,{task_text:e.target.value})})}},{key:"updateCipherText",value:function(e){this.setState({decrypt:Object(i.a)({},this.state.decrypt,{task_text:e.target.value})})}},{key:"updatePlainKey",value:function(e){this.setState({encrypt:Object(i.a)({},this.state.encrypt,{key:e.target.value})})}},{key:"updateCipherKey",value:function(e){this.setState({decrypt:Object(i.a)({},this.state.decrypt,{key:e.target.value})})}},{key:"cryptHandler",value:function(e){var t=function(e){return e.text.length?e.key.length?e.text.length<e.key.length?"Text should be longer than number or rows":Math.max.apply(Math,Object(y.a)(e.key.split("")))>e.key.length&&"Row id could not be greater than number of rows":"You should provide key":"You should provide text"}({text:this.state[e].task_text,key:this.state[e].key});if(t)this.setState(Object(c.a)({},e,Object(i.a)({},this.state[e],{error:t})));else{var n=("encrypt"===e?m:f)(this.state[e].task_text,this.state[e].key);console.log(n),this.setState(Object(c.a)({},e,Object(i.a)({},this.state[e],{result_text:n,error:!1})))}}},{key:"renderZigZag",value:function(e,t){for(var n=[],a=t.split(""),l=[],s=0;s<a.length;s++)l[a[s]-1]=e[s];return console.log(l),l.map(function(t,a,l){var s=[];t.map(function(t,n,c){var i=2*l.length-2-1;if(0===n){for(var o=0;o<a;o++)s.push(r.a.createElement("div",{className:"zigzag_cell"}));s.push(r.a.createElement("div",{className:"zigzag_cell"},t))}else if(n%2&&a!==l.length-1){for(var h=0;h<i-2*a;h++)s.push(r.a.createElement("div",{className:"zigzag_cell"}));s.push(r.a.createElement("div",{className:"zigzag_cell"},t))}else if(n%2===0&&0===a){for(var p=0;p<i-2*a;p++)s.push(r.a.createElement("div",{className:"zigzag_cell"}));s.push(r.a.createElement("div",{className:"zigzag_cell"},t))}else{for(var u=0;u<2*a-1;u++)s.push(r.a.createElement("div",{className:"zigzag_cell"}));s.push(r.a.createElement("div",{className:"zigzag_cell"},t))}if(n===c.length-1)for(var d=[].concat.apply([],e).join("").length,g=s.length;g<d;g++)s.push(r.a.createElement("div",{className:"zigzag_cell"}))}),n.push(r.a.createElement("div",{className:"zigzag_row"},s))}),n}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"main"},r.a.createElement("div",{className:"encrypt_block"},r.a.createElement("p",null,"read this please"),r.a.createElement("input",{placeholder:"Type plain text",value:this.state.encrypt.task_text,onChange:this.updatePlainText}),r.a.createElement("input",{placeholder:"Type key",value:this.state.encrypt.key,onChange:this.updatePlainKey}),r.a.createElement("button",{onClick:function(){return e.cryptHandler("encrypt")}},"Encrypt"),this.state.encrypt.error&&r.a.createElement("div",{className:"error"},this.state.encrypt.error),r.a.createElement("div",{className:"result_text"},this.state.encrypt.result_text),r.a.createElement("div",{className:"zigzag_text"},this.state.encrypt.result_text&&this.renderZigZag(this.state.encrypt.result_text,this.state.encrypt.key)),r.a.createElement("div",{className:"code_examples"},r.a.createElement("pre",null,"\n    const formatted = text.replace(/ /g, '_').split('');\n    const number_of_rows = key.length;\n    const rows = []\n    for (let i = 0; i < key.length; i++) {\n        rows[i] = []\n    }\n    formatted.map((el, ind, arr) => {\n        const cycle = number_of_rows * 2 - 2;\n        if (ind < arr.length && ind % cycle < cycle) {\n            if (ind % cycle < number_of_rows) {\n                rows[ind % cycle].push(el)\n            }\n            else {\n                rows[cycle - ind % cycle].push(el)\n            }\n        }\n    });\n"))),r.a.createElement("div",{className:"decrypt_block"},r.a.createElement("p",{className:"fake_dot"}," ."),r.a.createElement("input",{placeholder:"Type cipher text",value:this.state.decrypt.task_text,onChange:this.updateCipherText}),r.a.createElement("input",{placeholder:"Type key",value:this.state.decrypt.key,onChange:this.updateCipherKey}),r.a.createElement("button",{onClick:function(){return e.cryptHandler("decrypt")}},"Decrypt"),this.state.decrypt.error&&r.a.createElement("div",{className:"error"},this.state.decrypt.error),r.a.createElement("div",{className:"result_text"},this.state.decrypt.result_text),r.a.createElement("div",{className:"zigzag_text"}),r.a.createElement("div",{className:"code_examples"},r.a.createElement("pre",null,"\nconst recursiveDecrypt = (plain_text, cipherRows, firstRow = true) => {\n    const totalLength = [].concat.apply([], cipherRows).join('').length;\n    console.log(totalLength)\n    if (firstRow) {\n        for (let i = 0; i < cipherRows.length; i++) {\n            plain_text.push(cipherRows[i][0])\n            cipherRows[i] = cipherRows[i].slice(1)\n        }\n    }\n    else {\n        const tmpSlicedCipherRows = cipherRows.slice(1);\n        for (let i = 0; i < tmpSlicedCipherRows.length; i++) {\n            tmpSlicedCipherRows[i][0] && plain_text.push(tmpSlicedCipherRows[i][0])\n            cipherRows[i + 1] = cipherRows[i + 1] && cipherRows[i + 1].slice(1)\n        }\n    }\n    if (totalLength > 0) {\n        return recursiveDecrypt(plain_text, cipherRows.reverse(), false)\n    }\n};"),r.a.createElement("pre",null,"\nconst sliceCipherText = (cipher_text, key) => {\n    const result = [];\n    const cycle = key.length * 2 - 2;\n    let rowsLength = [];\n    const firstRowLength = Math.floor(cipher_text.length / cycle);\n\n    const middleRowsLength = Math.floor(cipher_text.length / cycle) * 2;\n    const numberOfMiddleRows = key.length - 2;\n\n    rowsLength.push(firstRowLength);\n    for (let i = 0; i < numberOfMiddleRows; i++) {\n        rowsLength.push(middleRowsLength)\n    }\n    if (cipher_text.length % cycle) {\n        rowsLength = rowsLength.map((el, ind) => {\n            if (ind < cipher_text.length - 1) {\n                el += 1;\n            }\n            return rowsLength[ind] = el;\n        })\n    }\n    const lastRowLength = cipher_text.length - rowsLength.reduce((acc, currentValue)\n        => acc + currentValue);\n    rowsLength.push(lastRowLength);\n\n    const sortingKeys = key.split('');\n    const sortedRowsLength = [];\n    for (let i = 0; i < sortingKeys.length; i++) {\n        sortedRowsLength[i] = rowsLength[sortingKeys[i] - 1];\n    }\n\n\n    sortedRowsLength.reduce((acc, currentValue) => {\n        // console.log(acc)\n        const row = cipher_text.slice(acc, acc + currentValue);\n        // console.log(row)\n        result.push(row);\n        return acc + currentValue\n    }, 0);\n\n    const sortedResult = [];\n    for (let i = 0; i < sortingKeys.length; i++) {\n        sortedResult[sortingKeys[i] - 1] = result[i];\n    }\n\n    return sortedResult;\n};\n")),r.a.createElement("div",null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.62c5d092.chunk.js.map