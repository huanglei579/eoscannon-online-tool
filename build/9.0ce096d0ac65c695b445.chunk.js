(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"825c48c14234b306773e":function(e,t,a){"use strict";a.r(t);a("07fefdeda9e25f47c51f");var o=a("ee9c7e8693f029641440"),r=(a("e0d4a9723455cd432e2a"),a("51a2031d92053eb533a4")),n=(a("6fe8b0e6cbe1b2dbd768"),a("528d6b723ddc28ff5abf")),s=(a("0ebca53c1b8697ff3082"),a("f4369d707c99f1f35bde")),i=a("38fe40aaedb88490d4df"),c=a.n(i),f=a("87a61a995c44dd45d235"),l=(a("96da8a7155dce770d74d"),a("3e1732693f17cb43c294")),u=a.n(l),d=a("537e9378f1e5205c76aa"),p=a("e8c18121a227016693d8"),g=a("11f2d0f6be39e37bc55d"),b=a("6851e8cfc06988feaf73"),h=Object(f.defineMessages)({VotePageVoterPlaceholder:{id:"VotePage VoterPlaceholder",defaultMessage:"请输入您投票的账户名"},VotePageProducersHelp:{id:"VotePage ProducersHelp",defaultMessage:"注：请选择投票节点！可多选、可搜索、可输入，回车确认！"},VotePageProducersPlaceholder:{id:"VotePage ProducersPlaceholder",defaultMessage:"请选择投票节点！可多选。可输入，回车确认！"},VoterLabel:{id:"VotePage VoterLabel",defaultMessage:"账户名"},ProducersLabel:{id:"VotePage ProducersLabel",defaultMessage:"节点"}}),m=a("9cada3e1a82441d5dc97");a.d(t,"VotePage",function(){return M});var y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},P=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,a,o,r){var n=t&&t.defaultProps,s=arguments.length-3;if(a||0===s||(a={}),a&&n)for(var i in n)void 0===a[i]&&(a[i]=n[i]);else a||(a=n||{});if(1===s)a.children=r;else if(s>1){for(var c=Array(s),f=0;f<s;f++)c[f]=arguments[f+3];a.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:a,_owner:null}}}(),v=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}();var V=s.a.Item,T=n.a.Option,M=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onValuesChange=function(e){var t=e.form.getFieldsValue(),o=t.jsonInfo,r=t.keyProvider,n=t.voter,s=t.producers,i=t.transaction;a.setState({GetTransactionButtonState:o&&r&&n&&s}),a.setState({CopyTransactionButtonState:o&&r&&n&&s&&i})},a.handleGetTransaction=function(){if(a.state.GetTransactionButtonState){a.setState({GetTransactionButtonLoading:!0});var e=a.props.form.getFieldsValue(),t=Object(d.b)(e),o=e.voter,r=e.producers;t.voteproducer({voter:o,proxy:"",producers:r}).then(function(e){a.props.form.setFieldsValue({transaction:JSON.stringify(e.transaction)}),a.setState({GetTransactionButtonLoading:!1,QrCodeValue:JSON.stringify(e.transaction)}),Object(d.f)(a.state.formatMessage)}).catch(function(e){a.setState({GetTransactionButtonLoading:!1}),Object(d.e)(a.state.formatMessage,e.name)})}},a.handleCopyTransaction=function(){if(a.state.CopyTransactionButtonState){var e=a.props.form.getFieldsValue().transaction;u()(e),Object(d.d)(a.state.formatMessage)}},a.state={formatMessage:a.props.intl.formatMessage,GetTransactionButtonLoading:!1,GetTransactionButtonState:!1,CopyTransactionButtonState:!1,QrCodeValue:a.props.intl.formatMessage(m.a.QrCodeInitValue)},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.a.Component),v(t,[{key:"componentWillReceiveProps",value:function(e){this.onValuesChange(e)}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state.formatMessage(h.VotePageVoterPlaceholder),a=this.state.formatMessage(h.VotePageProducersHelp),s=this.state.formatMessage(h.VotePageProducersPlaceholder),i=this.state.formatMessage(h.VoterLabel),f=this.state.formatMessage(h.ProducersLabel);return P(p.b,{},void 0,P(p.c,{},void 0,P(p.a,{},void 0,P(g.a,{form:this.props.form,formatMessage:this.state.formatMessage}),c.a.createElement(V,y({},d.a,{label:i,colon:!0}),e("voter",{rules:[{required:!0,message:t}]})(P(r.a,{prefix:P(o.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:t}))),c.a.createElement(V,y({help:a},d.a,{label:f,colon:!0}),e("producers",{rules:[{required:!0,message:s}]})(P(n.a,{mode:"tags",style:{width:"100%"},placeholder:s},void 0,d.g.map(function(e){return P(T,{},e,e)})))),P(b.a,{form:this.props.form,formatMessage:this.state.formatMessage,GetTransactionButtonClick:this.handleGetTransaction,GetTransactionButtonLoading:this.state.GetTransactionButtonLoading,GetTransactionButtonDisabled:this.state.GetTransactionButtonState,QrCodeValue:this.state.QrCodeValue,CopyTransactionButtonState:this.state.CopyTransactionButtonState,handleCopyTransaction:this.handleCopyTransaction}))))}}]),t}(),O=Object(f.injectIntl)(M),S=s.a.create()(O);t.default=S}}]);