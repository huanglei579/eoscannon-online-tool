(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"74089a2aeaffee8cdbcb":function(e,t,a){"use strict";a.r(t);a("231ba9f9720ad1fe5385");var n=a("32fbdcbb748a5301264b"),o=(a("88b403c8b36763f1da89"),a("65929ca351a8cfbf6429")),c=(a("e80c07f98a2f62fcd0c2"),a("ff1fc1434f2cc2efb5fb")),r=(a("0ebca53c1b8697ff3082"),a("f4369d707c99f1f35bde")),i=a("38fe40aaedb88490d4df"),l=a.n(i),s=a("87a61a995c44dd45d235"),f=(a("96da8a7155dce770d74d"),a("3e1732693f17cb43c294"),a("f9b08d9b58702b596430")),d=a("45f569ed10adf086745a"),u=a("9c46063cff2d7d561477"),g=a("191e6578136ab57477d1"),p=a("537e9378f1e5205c76aa"),b=a("e8c18121a227016693d8"),h=a("11f2d0f6be39e37bc55d"),m=(a("6851e8cfc06988feaf73"),Object(s.defineMessages)({DelegateSwitchCheckedName:{id:"StakePage DelegateSwitchCheckedName",defaultMessage:"质押"},DelegateSwitchUnCheckedName:{id:"StakePage DelegateSwitchUnCheckedName",defaultMessage:"解质押"},DelegateFromAccountNamePlaceholder:{id:"StakePage DelegateFromAccountNamePlaceholder",defaultMessage:"请输入用于质押的账户名"},UnDelegateFromAccountNamePlaceholder:{id:"StakePage UnDelegateFromAccountNamePlaceholder",defaultMessage:"请输入用于解质押的账户名"},DelegateReceiverAccountNamePlaceholder:{id:"StakePage DelegateReceiverAccountNamePlaceholder",defaultMessage:"请输入接受质押的账户名，不填，则默认使用用于质押的账户名"},UnDelegateReceiverAccountNamePlaceholder:{id:"StakePage UnDelegateReceiverAccountNamePlaceholder",defaultMessage:"请输入接受解质押的账户名，不填，则默认使用用于解质押的账户名"},DelegateReceiverAccountNameHelp:{id:"StakePage DelegateReceiverAccountNameHelp",defaultMessage:"注：该账户名若与用于质押的账户名不一致，则为质押给别人"},UnDelegateReceiverAccountNameHelp:{id:"StakePage UnDelegateReceiverAccountNameHelp",defaultMessage:"注：该账户名若与用于解质押的账户名不一致，则为解质押给别人"},DelegateStakeNetQuantityPlaceholder:{id:"StakePage DelegateStakeNetQuantityPlaceholder",defaultMessage:"请输入质押的Net数量"},UnDelegateStakeNetQuantityPlaceholder:{id:"StakePage UnDelegateStakeNetQuantityPlaceholder",defaultMessage:"请输入解质押的Net数量"},DelegateStakeCpuQuantityPlaceholder:{id:"StakePage DelegateStakeCpuQuantityPlaceholder",defaultMessage:"请输入质押的Cpu数量"},UnDelegateStakeCpuQuantityPlaceholder:{id:"StakePage UnDelegateStakeCpuQuantityPlaceholder",defaultMessage:"请输入解质押的Cpu数量"},FromLabel:{id:"StakePage FromLabel",defaultMessage:"质押账户"},ReceiverLabel:{id:"StakePage ReceiverLabel",defaultMessage:"接收账户"},NetQuantityLabel:{id:"StakePage NetQuantityLabel",defaultMessage:"Net数量"},CpuQuantityLabel:{id:"StakePage CpuQuantityLabel",defaultMessage:"Cpu数量"}})),k=a("9cada3e1a82441d5dc97");a.d(t,"SendMessagePage",function(){return N});var y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,a,n,o){var c=t&&t.defaultProps,r=arguments.length-3;if(a||0===r||(a={}),a&&c)for(var i in c)void 0===a[i]&&(a[i]=c[i]);else a||(a=c||{});if(1===r)a.children=o;else if(r>1){for(var l=Array(r),s=0;s<r;s++)l[s]=arguments[s+3];a.children=l}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:a,_owner:null}}}(),S=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var P=r.a.Item,v=c.a.confirm,N=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.sendMessage=function(){console.log("this.state.netWork====",a.state.netWork),("main"==a.state.netWork?Object(p.b)():Object(p.c)()).pushTransaction(JSON.parse(a.props.form.getFieldsValue().jsonInfo)).then(function(e){o.a.success("发送报文成功,请在页尾查看transaction_id="+e.transaction_id),a.setState({transaction_id:e.transaction_id})}).catch(function(e){console.log("Err:",e),v({title:"错误信息",content:e+"",onOk:function(){},onCancel:function(){}})})},a.state={formatMessage:a.props.intl.formatMessage,isDelegatebw:!0,GetTransactionButtonLoading:!1,GetTransactionButtonState:!1,CopyTransactionButtonState:!1,transaction_id:"",netWork:"",QrCodeValue:a.props.intl.formatMessage(k.a.QrCodeInitValue)},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.a.Component),S(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({netWork:e.netWork})}},{key:"componentWillMount",value:function(){f.a.getNetwork();this.setState({netWork:this.props.netWork})}},{key:"render",value:function(){this.props.form.getFieldDecorator,this.state.formatMessage(m.DelegateSwitchCheckedName);return y(b.b,{},void 0,y(b.c,{},void 0,y(b.a,{},void 0,y(h.a,{form:this.props.form,formatMessage:this.state.formatMessage})),y(b.a,{},void 0,y(n.a,{type:"primary",className:"form-button",onClick:this.sendMessage},void 0,"发送")),y(b.a,{},void 0,y(P,{style:{textAlign:"center"}},void 0,"txid:",this.state.transaction_id))))}}]),t}(),D=Object(u.b)({netWork:Object(g.b)()}),M=Object(s.injectIntl)(N),w=r.a.create()(M);t.default=Object(d.connect)(D)(w)}}]);