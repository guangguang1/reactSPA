(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(153)),r=c(n(779)),i=c(n(751)),o=c(n(241)),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(154),n(785),n(789),n(240);var s=c(n(0));function c(e){return e&&e.__esModule?e:{default:e}}n(1341);var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleReset=function(){n.setState({fields:{}})},n.handleSubmit=function(){var e=n.state.warnings;e={};var t=!0,a=!1,r=void 0;try{for(var i,o=n.props.fields[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var u=i.value;if(u.validator)try{u.validator(n.state.fields[u.key])}catch(t){e[u.key]=t.message}}}catch(e){a=!0,r=e}finally{try{!t&&o.return&&o.return()}finally{if(a)throw r}}if(Object.keys(e).length)n.setState({warnings:l({},e)});else if(n.setState({warnings:{}}),"onSubmit"in n.props){var s={};for(var c in n.state.fields){var f=n.state.fields[c];null!=f&&(Array.isArray(f)?s[c]=f:("string"==typeof f&&(f=f.trim()),""!==f&&(s[c]=f)))}n.props.onSubmit(s)}},n.state={fields:{},disabled:{},warnings:{}},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.PureComponent),u(t,[{key:"setField",value:function(e,t){var n=this.state,a=n.fields,r=n.warnings,i=t;if(Array.isArray(i)&&0===i.length&&(i=void 0),e.validator)try{i=e.validator(t),r[e.key]=""}catch(t){r[e.key]=t.message}"string"!=typeof e.key?(a[e.key[0]]=i&&i[0],a[e.key[1]]=i&&i[1]):a[e.key]=i,this.setState({fields:l({},a),warnings:l({},r)})}},{key:"generateInputs",value:function(e){var t=this,n=[],a=0,l=function(e){var l=[];e.items&&(l=e.items());var u=null;switch(e.type){case"input":default:u=s.default.createElement(o.default,{value:t.state.fields[e.key],onChange:function(n){return t.setField(e,n.target.value)}});break;case"select":u=s.default.createElement(i.default,{placeholder:"请选择",value:void 0===t.state.fields[e.key]?e.defaultValue&&e.defaultValue.toString():t.state.fields[e.key],multiple:e.multiple,disabled:t.state.disabled[e.key],onChange:function(n){e.onChange&&e.onChange(n),t.setField(e,n)},style:{width:"100%"}},l&&l.map(function(e){var t=e.mean,n=e.value;return s.default.createElement(i.default.Option,{key:n.toString(),value:n.toString()},t)}));break;case"rangePicker":u=s.default.createElement(r.default.RangePicker,{showTime:!0,format:"YYYY-MM-DD",value:[t.state.fields[e.key[0]],t.state.fields[e.key[1]]],disabled:t.state.disabled[e.key],onChange:function(n){t.setField(e,n)},showToday:!1});break;case"datetime":u=s.default.createElement(r.default,{showTime:!0,format:"YYYY-MM-DD HH:mm",value:t.state.fields[e.key],disabled:t.state.disabled[e.key],onChange:function(n){return t.setField(e,n)},placeholder:"请选择时间",showToday:!1})}n.push(s.default.createElement("div",{key:a++,className:"field"},s.default.createElement("div",{className:"input"},s.default.createElement("div",{className:"title",style:{width:e.labelWidth||100}},e.title,":"),s.default.createElement("div",{style:{width:e.width||130},className:"input"},u)),s.default.createElement("div",{className:"warning"},t.state.warnings[e.key])))},u=!0,c=!1,f=void 0;try{for(var d,p=e[Symbol.iterator]();!(u=(d=p.next()).done);u=!0){l(d.value)}}catch(e){c=!0,f=e}finally{try{!u&&p.return&&p.return()}finally{if(c)throw f}}return n}},{key:"render",value:function(){return s.default.createElement("div",{className:"searchbar"},this.generateInputs(this.props.fields),s.default.createElement("div",{className:"buttonGroup"},s.default.createElement(a.default,{onClick:this.handleReset,className:"reset",icon:"reload"},"重置"),s.default.createElement(a.default,{onClick:this.handleSubmit,className:"search",icon:"search"},"搜索")))}}]),t}();t.default=f,f.defaultProps={hasReset:!0}},1341:function(e,t,n){var a=n(1342);"string"==typeof a&&(a=[[e.i,a,""]]);var r={transform:void 0};n(20)(a,r);a.locals&&(e.exports=a.locals)},1342:function(e,t,n){(e.exports=n(21)(!1)).push([e.i,".searchbar {\n  padding: 10px 15px;\n  background-color: #fafafa;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.searchbar .field {\n  height: 47px;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.searchbar .field .input {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n.searchbar .field .input .title {\n  text-align: right;\n  width: 100px;\n  font-size: 14px;\n  margin-right: 5px;\n}\n.searchbar .field .input .input {\n  height: 30px;\n}\n.searchbar .field .warning {\n  color: red;\n  text-align: center;\n  margin-left: 105px;\n}\n.searchbar .buttonGroup {\n  -ms-flex-item-align: center;\n      align-self: center;\n  margin-left: 24px;\n  height: 47px;\n}\n.searchbar .buttonGroup button {\n  margin-right: 23px;\n  height: 30px;\n  border: none;\n  padding: 0;\n}\n.searchbar .buttonGroup .reset {\n  width: 68px;\n  height: 30px;\n  border-radius: 2px;\n  border: solid 1px #fe751a;\n  font-size: 14px;\n  line-height: 1.0;\n  text-align: center;\n  color: #fe751a;\n}\n.searchbar .buttonGroup .reset:hover {\n  width: 68px;\n  height: 30px;\n  border-radius: 2px;\n  border: solid 1px #fe751a;\n  font-size: 14px;\n  line-height: 1.0;\n  text-align: center;\n  color: #fe751a;\n  opacity: 0.3;\n}\n.searchbar .buttonGroup .search {\n  width: 68px;\n  height: 30px;\n  border-radius: 2px;\n  border-color: #fe751a;\n  background-color: #fe751a;\n  color: #fff;\n  font-size: 14px;\n  line-height: 1.0;\n  text-align: center;\n}\n.searchbar .buttonGroup .search:hover {\n  width: 68px;\n  height: 30px;\n  border-radius: 2px;\n  border-color: #fe751a;\n  background-color: #fe751a;\n  opacity: 0.3;\n}\n",""])},1343:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(n(1344)),r=f(n(251)),i=f(n(35)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(1401),n(253),n(110);var u=f(n(0)),s=f(n(242)),c=f(n(1417));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onPageChangeHandler=function(e){n.setState({currentPage:e}),"onChange"in n.props&&n.props.onChange(e)},n.state={currentPage:1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.PureComponent),l(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.header,n=e.action,a=e.data;this.makeColumns(t,n,a)}},{key:"componentWillReceiveProps",value:function(e){this.changeProps(e)}},{key:"changeProps",value:function(e){var t=e.header,n=e.action,a=e.currentPage,r=e.data;this.setState({currentPage:a}),this.makeColumns(t,n,r)}},{key:"makeColumns",value:function(e,t,n){var a=this;this.columns=this.props.noIndex?[]:[{dataIndex:"rowIndex",title:"序号",width:70,fixed:this.props.rowIndexFixed}];var l=!0,s=!1,c=void 0;try{for(var f,d=e[Symbol.iterator]();!(l=(f=d.next()).done);l=!0){var p=f.value;this.columns.push(o({},p))}}catch(e){s=!0,c=e}finally{try{!l&&d.return&&d.return()}finally{if(s)throw c}}if(t){var m=Math.max.apply(Math,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n.map(t).map(function(e){return e?e.length:0})));this.columns.push({key:"x",title:"操作",width:this.props.scroll?230:50*m+10,fixed:this.props.fixed,render:function(e){var n=t(e);if(!n)return u.default.createElement("div",null);var o=n.map(function(t,n){var o=t.color,l=t.name,s=t.key,c=t.icon,f=t.hidden;return u.default.createElement(r.default,{key:n,title:l},u.default.createElement("a",{key:s,onClick:function(t){t.preventDefault(),"onCtrlClick"in a.props&&a.props.onCtrlClick(s,e)},style:{color:o,marginRight:12,display:f?"none":"inline-block",fontSize:14}},u.default.createElement(i.default,{type:c})))});return u.default.createElement("div",null,o)}})}}},{key:"render",value:function(){return u.default.createElement("div",{className:"myy-table"},u.default.createElement(a.default,{rowSelection:this.props.rowSelection,scroll:this.props.scroll,dataSource:this.props.data.map(function(e,t){return o({},e,{rowIndex:t+1,key:t+1})}),columns:this.columns,rowClassName:this.props.getRowClassName,loading:this.props.loading,pagination:!1!==this.props.pagination&&{total:this.props.total,pageSize:this.props.pageSize,current:this.state.currentPage,onChange:this.onPageChangeHandler,showTotal:function(e,t){return u.default.createElement("span",{className:c.default.pageTotal},"共",u.default.createElement("span",{className:c.default.count},e),"条")}},footer:this.props.footer}))}}]),t}();t.default=d,d.propTypes={pageSize:s.default.number},d.defaultProps={pageSize:20}},1417:function(e,t,n){var a=n(1418);"string"==typeof a&&(a=[[e.i,a,""]]);var r={transform:void 0};n(20)(a,r);a.locals&&(e.exports=a.locals)},1418:function(e,t,n){(e.exports=n(21)(!1)).push([e.i,".myy-table .pageTotal .count {\n  margin: 0 4px;\n  color: #fe751a;\n}\n",""])},1419:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormModal=t.Form=void 0;var a=i(n(1420)),r=i(n(908));function i(e){return e&&e.__esModule?e:{default:e}}t.Form=r.default,t.FormModal=a.default},1420:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(894)),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(898);var i=u(n(0)),o=u(n(242)),l=u(n(908));function u(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.PureComponent),r(t,[{key:"render",value:function(){var e=this.props,t=e.modalKey,n=e.visible,r=e.title,o=e.fields,u=e.onCancel,s=e.onOk,c=e.okText;return i.default.createElement(a.default,{wrapClassName:"form",key:t,visible:n,title:r,onCancel:u,footer:null},i.default.createElement(l.default,{fields:o,onOk:s,onCancel:u,showCancel:!0,okText:c}))}}]),t}();t.default=s,s.propTypes={modalKey:o.default.string.isRequired,visible:o.default.bool.isRequired,title:o.default.string.isRequired,fields:o.default.arrayOf(Object).isRequired,onOk:o.default.func.isRequired,onCancel:o.default.func.isRequired}},1428:function(e,t,n){var a=n(1429);"string"==typeof a&&(a=[[e.i,a,""]]);var r={transform:void 0};n(20)(a,r);a.locals&&(e.exports=a.locals)},1429:function(e,t,n){(e.exports=n(21)(!1)).push([e.i,".buttons {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n.buttons button {\n  margin-left: 20px;\n}\n.formWrapper .ant-form-item label {\n  font-size: 14px;\n}\n",""])},1430:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.musicKindList=[{value:2,mean:"热歌榜"},{value:1,mean:"新歌榜"},{value:11,mean:"摇滚榜"},{value:12,mean:"爵士"},{value:16,mean:"流行"},{value:21,mean:"欧美金曲榜"},{value:22,mean:"经典老歌榜"},{value:23,mean:"情歌对唱榜"},{value:24,mean:"情歌对唱榜"},{value:25,mean:"情歌对唱榜"}],t.languageKindList=[{value:0,mean:"全部"},{value:1,mean:"国语"},{value:2,mean:"英语"},{value:3,mean:"粤语"},{value:4,mean:"韩语"},{value:5,mean:"闽南语"}],t.publishCountry=[{value:0,mean:"全部"},{value:1,mean:"内地"},{value:2,mean:"欧美"},{value:3,mean:"港台"},{value:4,mean:"韩国"},{value:5,mean:"其他"}]},1431:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchMusicList=t.receiveMusicList=t.requestMusicList=void 0;var a=n(161),r=n(1432),i=n(910),o=t.requestMusicList=(0,a.createAction)("request music list"),l=t.receiveMusicList=(0,a.createAction)("receive music list");t.fetchMusicList=(0,i.createAjaxAction)(r.music.musicList,o,l)},1432:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.music=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1433));t.music=a},1433:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.musicList=void 0;var a=n(910);t.musicList=a.ajax.fetchJSONByGet("http://tingapi.ting.baidu.com/v1/restserver/ting")},1434:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchJSONByGet=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.fetchJSON=l;var r,i=n(793),o=(r=i)&&r.__esModule?r:{default:r};function l(e,t){return(0,o.default)(e,a({},t))}t.fetchJSONByGet=function(e){return function(t){var n="?";if(t)for(var a in t)n=""+n+a+"="+t[a]+"&";return l(e+(t?n.substring(0,n.length-1):""),{method:"GET"})}}},1435:function(e,t,n){var a=n(1436);"string"==typeof a&&(a=[[e.i,a,""]]);var r={transform:void 0};n(20)(a,r);a.locals&&(e.exports=a.locals)},1436:function(e,t,n){(e.exports=n(21)(!1)).push([e.i,".tableBox {\n  position: relative;\n  margin-top: 10px;\n}\n.tableBox .addButton {\n  position: absolute;\n  background: #169bd5;\n  top: 5px;\n  right: 12px;\n  color: #fff;\n  border: #169bd5;\n}\n.ant-btn:focus {\n  background: #169bd5 !important;\n  color: #fff !important;\n}\n",""])},639:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=y(n(153)),i=y(n(786)),o=y(n(894)),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(154),n(787),n(898);var u=y(n(0)),s=y(n(1331)),c=y(n(1343));n(243);var f=y(n(883)),d=n(1419),p=n(1430),m=n(1431),h=n(111);function y(e){return e&&e.__esModule?e:{default:e}}n(1435);var b=o.default.confirm,v=(0,h.connect)(function(e){return{musicList:e.musicList}})(a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.fetchTableData=function(e){n.props.dispatch((0,m.fetchMusicList)({method:"baidu.ting.billboard.billList",size:100,type:e}))},n.onSearch=function(e){n.setState({searchFields:e})},n.searchFields=function(){return[{title:"歌曲类型",key:"type",type:"select",defaultValue:2,onChange:function(e){return n.fetchTableData(e)},items:function(){return p.musicKindList.map(function(e){return{value:e.value,mean:e.mean}})}},{title:"发行国家",key:"country",type:"select",defaultValue:"全部",items:function(){return p.publishCountry.map(function(e){return{value:e.value,mean:e.mean}})}},{title:"歌曲语种",key:"language",type:"select",defaultValue:"全部",items:function(){return p.languageKindList.map(function(e){return{value:e.value,mean:e.mean}})}},{title:"发行时间段",key:["start","end"],type:"rangePicker"}]},n.tableHeader=function(){return[{dataIndex:"title",title:"歌曲名",width:200},{dataIndex:"author",title:"歌手",width:200},{dataIndex:"country",title:"发行国家",width:200},{dataIndex:"language",title:"语种",width:200},{dataIndex:"publishtime",title:"发行时间",width:200}]},n.add=function(){n.setState({modalShow:!0})},n.onOk=function(e){i.default.success("添加成功"),n.onCancel()},n.onCancel=function(){n.setState({modalShow:!1})},n.onOkEdit=function(e){n.setState({modalShowEdit:!1}),i.default.success("编辑成功")},n.onCancelEdit=function(){n.setState({modalShowEdit:!1})},n.tableAction=function(e,t){"edit"===e?n.setState({item:t,modalShowEdit:!0}):"delete"===e&&b({title:"提示",content:"确定删除吗",onOk:function(){i.default.success("删除成功")},onCancel:function(){}})},n.fields=function(){return[{label:"歌曲名",type:"input",name:"title",options:{rules:[{required:!0,message:"歌曲名必输!"}]}},{label:"歌手名",type:"input",name:"author",options:{rules:[{required:!0,message:"歌手必输!"}]}},{label:"发行国家",type:"select",name:"country",items:function(){return p.publishCountry.map(function(e){return{key:e.value,value:e.mean}})},options:{rules:[{required:!0,message:"发行国家必输!"}]}},{label:"歌曲语种",type:"select",name:"language",items:function(){return p.languageKindList.map(function(e){return{key:e.value,value:e.mean}})},options:{rules:[{required:!0,message:"语种必输!"}]}},{label:"发行时间",type:"datetime",name:"publishTime",options:{rules:[{required:!0,message:"发行时间必输!"}]}}]},n.fieldsEdit=function(){var e=n.state.item;return[{label:"歌曲名",type:"input",name:"title",items:e.title,options:{initialValue:e.title,rules:[{required:!0,message:"歌曲名必输!"}]}},{label:"歌手名",type:"input",name:"author",options:{initialValue:e.author,rules:[{required:!0,message:"歌手必输!"}]}},{label:"发行国家",type:"select",name:"country",items:function(){return p.publishCountry.map(function(e){return{key:e.value,value:e.mean}})},options:{initialValue:e.country,rules:[{required:!0,message:"发行国家必输!"}]}},{label:"歌曲语种",type:"select",name:"language",items:function(){return p.languageKindList.map(function(e){return{key:e.value,value:e.mean}})},options:{initialValue:e.language,rules:[{required:!0,message:"语种必输!"}]}},{label:"发行时间",type:"datetime",name:"publishTime",options:{initialValue:(0,f.default)(e.publishtime),rules:[{required:!0,message:"发行时间必输!"}]}}]},n.state={tData:[],item:{},loading:!0,modalShow:!1,modalShowEdit:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),l(t,[{key:"componentDidMount",value:function(){this.props.dispatch((0,m.fetchMusicList)({method:"baidu.ting.billboard.billList",size:100,type:2}))}},{key:"render",value:function(){var e=this.props.musicList,t=[],n=e.data,a=this.state.searchFields;if(a&&a.country&&"0"!==a.country.toString()&&(n=n.filter(function(e){return e.country===p.publishCountry.find(function(e){return e.value===parseInt(a.country)},10).mean})),a&&a.language&&"0"!==a.language.toString()&&(n=n.filter(function(e){return e.language===p.languageKindList.find(function(e){return e.value===parseInt(a.language)},10).mean})),a&&a.start&&(n=n.filter(function(e){return(0,f.default)(e.publishtime)>=(0,f.default)(a.start)&&(0,f.default)(e.publishtime)<=(0,f.default)(a.end)})),n)for(var i=0;i<n.length;i++)t.push({title:n[i].title,author:n[i].author,country:n[i].country,language:n[i].language,publishtime:n[i].publishtime});return u.default.createElement("div",{id:"wrap"},u.default.createElement(s.default,{onSubmit:this.onSearch,fields:this.searchFields()}),u.default.createElement("div",{className:"tableBox"},u.default.createElement(r.default,{onClick:this.add,className:"addButton"},"添加"),u.default.createElement("div",{style:{paddingTop:43}},u.default.createElement(c.default,{onCtrlClick:this.tableAction,pagination:!0,pageSize:10,header:this.tableHeader(),data:t,loading:e.loading,action:function(e){return[{key:"edit",name:"修改",color:"blue",icon:"edit"},{key:"delete",name:"删除",color:"red",icon:"delete"}]},scroll:{y:385}}))),u.default.createElement(d.FormModal,{modalKey:"add",visible:this.state.modalShow,title:"添加音乐",fields:this.fields(),onOk:this.onOk,onCancel:this.onCancel,okText:"保存"}),u.default.createElement(d.FormModal,{modalKey:"Edit",visible:this.state.modalShowEdit,title:"修改音乐",fields:this.fieldsEdit(),onOk:this.onOkEdit,onCancel:this.onCancelEdit,okText:"保存"}))}}]),t}())||a;t.default=v},908:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=m(n(153)),r=m(n(249)),i=m(n(779)),o=m(n(751)),l=m(n(1421)),u=m(n(241)),s=m(n(791)),c=m(n(245)),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(154),n(252),n(785),n(789),n(1425),n(240),n(906),n(246);var p=m(n(0));function m(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(1428);var y=c.default.Item,b=s.default.Group,v=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,d=Array(c),m=0;m<c;m++)d[m]=arguments[m];return n=a=h(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(d))),a.handleSubmit=function(e){var t=a.props.form;e&&e.preventDefault(),t.validateFieldsAndScroll(function(e,n){if(!e){var r=a.props.onOk;r&&r(n),t.resetFields()}})},a.doCancel=function(){var e=a.props,t=e.onCancel,n=e.form;t&&t(),n.resetFields()},a.generateFormItem=function(e){var t=e.formItemLayout,n=e.label,r=e.hasFeedBack,i=e.name,o=e.options,l=e.component,u=a.props.form.getFieldDecorator;return p.default.createElement(y,f({},t,{key:i,label:n,hasFeedBack:r}),u(i,o)(l))},a.getTextField=function(e){return p.default.createElement("span",{className:"ant-form-text"},e.options&&e.options.initialValue)},a.getInputField=function(e){return p.default.createElement(u.default,null)},a.getInputNumberField=function(e){return p.default.createElement(l.default,{step:e.options.step,formatter:e.options.formatter,style:{width:"100%"}})},a.getTextAreaField=function(e){return p.default.createElement(u.default,{type:"textarea",rows:e.options.rows||4,disabled:e.options.disabled})},a.getSelectField=function(e){return p.default.createElement(o.default,{placeholder:"请选择",style:{width:"100%"},disabled:e.disabled,multiple:e.multiple},e.items().map(function(e){var t=e.key,n=e.value;return p.default.createElement(o.default.Option,{key:t.toString(),value:t.toString()},n)}))},a.getRadioGroupField=function(e){return p.default.createElement(b,null,e.items().map(function(e){var t=e.key,n=e.value;return p.default.createElement(s.default,{key:t.toString(),value:t.toString()},n)}))},a.getDateField=function(e){return p.default.createElement(i.default,{showToday:!1,placeholder:"请选择日期"})},a.getDateTimeField=function(e){return p.default.createElement(i.default,{showTime:!0,format:"YYYY-MM-DD",placeholder:"请选择时间",showToday:!1})},a.getSwitchField=function(e){return p.default.createElement(r.default,{checkedChildren:"开",unCheckedChildren:"关",disabled:e.options.disabled,defaultChecked:e.options.initialValue})},a.getUploadField=function(e){return p.default.createElement("input",{type:"file",ref:e.options.ref,disabled:e.options.disabled,name:"patchFile"})},h(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,p.default.PureComponent),d(t,[{key:"generateFormFields",value:function(e){var t=this.props.formItemLayout||{labelCol:{span:6},wrapperCol:{span:14}},n=[],r=!0,i=!1,o=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var s=l.value,c=null;switch(s.type){case"input":c=this.getInputField(s);break;case"inputNumber":c=this.getInputNumberField(s);break;case"select":c=this.getSelectField(s);break;case"radioGroup":c=this.getRadioGroupField(s);break;case"date":c=this.getDateField(s);break;case"datetime":c=this.getDateTimeField(s);break;case"switch":c=this.getSwitchField(s);break;case"upload":c=this.getUploadField(s);break;case"textarea":c=this.getTextAreaField(s);break;default:c=this.getTextField(s)}c=this.generateFormItem({formItemLayout:t,component:c,label:s.label,name:s.name,options:s.options,hasFeedBack:"input"===s.type}),n.push(c)}}catch(e){i=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}var f=p.default.createElement(y,{key:"control-buttons",wrapperCol:{span:14,offset:6}},p.default.createElement("div",{className:"buttons"},this.props.showCancel&&p.default.createElement(a.default,{onClick:this.doCancel},"取消"),!this.props.noBtn&&p.default.createElement(a.default,{type:"primary",htmlType:"submit"},this.props.okText||"确定")));return n.push(f),n}},{key:"render",value:function(){var e=this.props.fields;return p.default.createElement("div",{className:"formWrapper"},p.default.createElement(c.default,{onSubmit:this.handleSubmit},this.generateFormFields(e)))}}]),t}(),g=c.default.create()(v);t.default=g},910:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createAjaxAction=t.ajax=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1434));t.ajax=a,t.createAjaxAction=function(e,t,n){return function(a,o){return function(l){var u=void 0;return l(t(a)),new Promise(function(t,s){e(a).then(i).then(function(e){return e.json()}).then(function(e){u=e,l(n({req:a,res:e}))}).then(function(){1===u.status&&o&&o(u)}).catch(r)})}}};function r(e){console.log(e)}function i(e){if(e.status>=100&&e.status<300||500===e.status||e.json)return e;var t=new Error(e.statusText);throw t.response=e,t}}}]);
//# sourceMappingURL=9.176a5d0d.chunk.js.map