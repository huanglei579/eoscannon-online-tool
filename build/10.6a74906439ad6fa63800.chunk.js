(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"47eedf4f6744b24aaf33":function(e,t,a){"use strict";a("d0412dc14390ed739732");var o,r=a("debcade008ca58960500"),n=(a("1ca67b639199cb765139"),a("2688cdc98aed61204a0c")),s=(a("071298eee1e85f371cb3"),a("8ca0435fe92d5e05db5b")),i=(a("d0b22e7450f404c3c82d"),a("c4ebd3259ab3503eb095")),c=a("8af190b70a6bc55c6f1b"),l=(a("8a2d1b95e05b6a321e74"),a("c34c7d5c307e1dafdb1e")),f=a.n(l),u=a("f607f491151ddcb274e0"),d=a.n(u),p=a("9cada3e1a82441d5dc97"),b=a("537e9378f1e5205c76aa"),h=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,a,r){var n=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&n)for(var i in n)void 0===t[i]&&(t[i]=n[i]);else t||(t=n||{});if(1===s)t.children=r;else if(s>1){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+3];t.children=c}return{$$typeof:o,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}),g=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}();var y=i.a.Item,m=s.a.TextArea,v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleCopyTransaction=function(){if(a.props.GetTransactionButtonState){var e=a.props.form.getFieldsValue().transaction;d()(e),Object(b.f)(a.props.formatMessage)}},a.state={CopyTransactionButtonState:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c["Component"]),g(t,[{key:"componentWillReceiveProps",value:function(e){e.transaction&&this.setState({CopyTransactionButtonState:e.GetTransactionButtonState&&!!e.transaction})}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.props.formatMessage(p.a.GetTransactionFormItemButtonName),a=this.props.formatMessage(p.a.CopyAlertMessage),o=this.props.formatMessage(p.a.CopyAlertDescription),s=this.props.formatMessage(p.a.TransactionTextAreaPlaceholder),i=this.props.formatMessage(p.a.CopyTransactionButtonName);return h("div",{},void 0,h(y,{},void 0,h(n.a,{type:"primary",className:"form-button",onClick:this.props.GetTransactionButtonClick,disabled:!this.props.GetTransactionButtonState},void 0,t)),h(y,{},void 0,h(r.a,{message:a,description:o,type:"info",closable:!0})),h(y,{},void 0,e("transaction",{rules:[{required:!0,message:s}]})(h(m,{disabled:"true",placeholder:s}))),h(y,{},void 0,h("div",{style:{textAlign:"center"}},void 0,h(f.a,{value:this.props.QrCodeValue,size:256}))),h(y,{},void 0,h(n.a,{type:"primary",className:"form-button",disabled:!this.props.GetTransactionButtonState,onClick:this.handleCopyTransaction},void 0,i)))}}]),t}();t.a=v},"825c48c14234b306773e":function(e,t,a){"use strict";a.r(t);a("1b31afae7a42ff36d602");var o=a("8417e7e7c48584b19c37"),r=(a("071298eee1e85f371cb3"),a("8ca0435fe92d5e05db5b")),n=(a("26c2044b4286ee97e970"),a("14ba9fe1962fa8709415")),s=(a("d0b22e7450f404c3c82d"),a("c4ebd3259ab3503eb095")),i=a("8af190b70a6bc55c6f1b"),c=a.n(i),l=a("ab039aecd4a1d4fedc0e"),f=(a("8a2d1b95e05b6a321e74"),a("f607f491151ddcb274e0")),u=a.n(f),d=a("537e9378f1e5205c76aa"),p=a("e8c18121a227016693d8"),b=a("11f2d0f6be39e37bc55d"),h=a("47eedf4f6744b24aaf33"),g=Object(l.defineMessages)({VotePageVoterPlaceholder:{id:"VotePage VoterPlaceholder",defaultMessage:"请输入您投票的账户名"},VotePageProducersHelp:{id:"VotePage ProducersHelp",defaultMessage:"注：请选择投票节点！可多选、可搜索、可输入，回车确认！"},VotePageProducersPlaceholder:{id:"VotePage ProducersPlaceholder",defaultMessage:"请选择投票节点！可多选。可输入，回车确认！"},VoterLabel:{id:"VotePage VoterLabel",defaultMessage:"账户名"},ProducersLabel:{id:"VotePage ProducersLabel",defaultMessage:"节点"}}),y=a("9cada3e1a82441d5dc97");a.d(t,"VotePage",function(){return V});var m,v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},T=(m="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,a,o){var r=e&&e.defaultProps,n=arguments.length-3;if(t||0===n||(t={}),t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});if(1===n)t.children=o;else if(n>1){for(var i=Array(n),c=0;c<n;c++)i[c]=arguments[c+3];t.children=i}return{$$typeof:m,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}),P=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}();var S=s.a.Item,C=n.a.Option,V=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onValuesChange=function(e){var t=e.form.getFieldsValue(),o=t.voter,r=t.producers,n=t.transaction;a.setState({GetTransactionButtonState:o&&r}),a.setState({CopyTransactionButtonState:o&&r&&n})},a.handleGetTransaction=function(){if(a.state.GetTransactionButtonState){a.setState({GetTransactionButtonLoading:!0});var e=a.props.form.getFieldsValue(),t=Object(d.b)(e),o=e.voter,r=e.producers;t.voteproducer({voter:o,proxy:"",producers:r},{sign:!1,broadcast:!1}).then(function(e){a.props.form.setFieldsValue({transaction:JSON.stringify(e.transaction)}),a.setState({transaction:transaction,GetTransactionButtonLoading:!1,QrCodeValue:JSON.stringify(e.transaction)}),Object(d.h)(a.state.formatMessage)}).catch(function(e){a.setState({GetTransactionButtonLoading:!1}),Object(d.g)(a.state.formatMessage,e.name)})}},a.handleCopyTransaction=function(){if(a.state.CopyTransactionButtonState){var e=a.props.form.getFieldsValue().transaction;u()(e),Object(d.f)(a.state.formatMessage)}},a.state={formatMessage:a.props.intl.formatMessage,GetTransactionButtonLoading:!1,GetTransactionButtonState:!1,CopyTransactionButtonState:!1,QrCodeValue:a.props.intl.formatMessage(y.a.QrCodeInitValue)},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.a.Component),P(t,[{key:"componentWillReceiveProps",value:function(e){this.onValuesChange(e)}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state.formatMessage(g.VotePageVoterPlaceholder),a=this.state.formatMessage(g.VotePageProducersHelp),s=this.state.formatMessage(g.VotePageProducersPlaceholder),i=this.state.formatMessage(g.VoterLabel),l=this.state.formatMessage(g.ProducersLabel);return T(p.b,{},void 0,T(p.c,{},void 0,T(p.a,{},void 0,c.a.createElement(S,v({},d.a,{label:i,colon:!0}),e("voter",{rules:[{required:!0,message:t}]})(T(r.a,{prefix:T(o.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:t}))),c.a.createElement(S,v({help:a},d.a,{label:l,colon:!0}),e("producers",{rules:[{required:!0,message:s}]})(T(n.a,{mode:"tags",style:{width:"100%"},placeholder:s},void 0,d.i.map(function(e){return T(C,{},e,e)})))),T(h.a,{form:this.props.form,formatMessage:this.state.formatMessage,GetTransactionButtonClick:this.handleGetTransaction,GetTransactionButtonLoading:this.state.GetTransactionButtonLoading,GetTransactionButtonState:this.state.GetTransactionButtonState,QrCodeValue:this.state.QrCodeValue,CopyTransactionButtonState:this.state.CopyTransactionButtonState,handleCopyTransaction:this.handleCopyTransaction}),T(b.a,{form:this.props.form,formatMessage:this.state.formatMessage,GetTransactionButtonState:this.state.GetTransactionButtonState,UnSignedTransaction:this.state.transaction,SelectedNetWork:this.props.SelectedNetWork}))))}}]),t}(),O=Object(l.injectIntl)(V),B=s.a.create()(O);t.default=B}}]);