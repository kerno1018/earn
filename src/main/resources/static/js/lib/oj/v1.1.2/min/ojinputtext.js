/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojeditablevalue"],function(a,f){a.Da("oj.inputBase",f.oj.editableValue,{version:"1.0.0",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"",_WIDGET_CLASS_NAMES:"",_ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES:"",_GET_INIT_OPTIONS_PROPS:[{X:"disabled",ra:!1,rc:!0},{X:"pattern",ra:""},{X:"placeholder",ra:""},{X:"value",ra:null},{X:"readonly",option:"readOnly",ra:!1,rc:!0},{X:"required",ra:!1,je:!0,rc:!0},{X:"title",ra:""}],_INPUT_HELPER_KEY:"",xM:"blur",lN:"keydown",dN:"input",
OM:"drop",options:{converter:void 0,placeholder:void 0,rawValue:void 0,readOnly:void 0},xt:function(a){var b=this._superApply(arguments);this.Nba();return b},ae:function(d,b){this._super(d,b);a.Be.vl(this._GET_INIT_OPTIONS_PROPS,b,this)},_ComponentCreate:function(){var a=this.element,b=this._superApply(arguments),c=this.XM(a),e=this.options.readOnly;this.Oi="rtl"===this.hc();"boolean"===typeof e&&this.element.prop("readonly",e);this.jt()&&(this.Pea(),this.PM()&&this.Oea());"pattern"in c&&a.removeAttr("pattern");
this.WE={};this.Yc=null;return b},Ug:function(){var a=this._superApply(arguments),b=this;this._CLASS_NAMES&&this.element.addClass(this._CLASS_NAMES);this.FO();this.WC();f.each(["disabled","readOnly"],function(a,d){b.options[d]&&b.zU(d,b.options[d])});return a},zU:function(a,b){"disabled"===a&&this.element.prop("disabled",b);"readOnly"===a&&(this.element.prop("readonly",b),this.mA("readOnly",b));"disabled"!==a&&"readOnly"!==a||this.FO()},_setOption:function(d,b){var c=this._superApply(arguments);"disabled"!==
d&&"readOnly"!==d||this.zU(d,b);"pattern"===d&&(this.WE[a.Vc.VALIDATOR_TYPE_REGEXP]=this.xR(),this.Yp());return c},_destroy:function(){var d=this._superApply(arguments);this.element.off("blur drop keydown input");this.cH&&this.cH.remove();this.jt()&&(this.PM()?a.C.unwrap(this.element,this.Wr):a.C.unwrap(this.element));return d},FO:function(){if(!this.options.readOnly&&!this.options.disabled){this.Yc={};var a=f.proxy(this.yH,this),b=f.proxy(this.cA,this),c=f.proxy(this.oba,this),e=function(){this.focus()};
this.element.on("blur",a);this.element.on("keydown",b);this.element.on("input",c);this.element.on("drop",e);this.Yc[this.xM]=a;this.Yc[this.lN]=b;this.Yc[this.dN]=c;this.Yc[this.OM]=e}else if(this.Yc)for(a=[this.xM,this.lN,this.dN,this.OM],b=0,c=a.length;b<c;b++)this.Yc[a[b]]&&(this.element.off(a[b],this.Yc[a[b]]),delete this.Yc[a[b]])},dm:{readOnly:"oj-read-only"},Nba:function(){for(var a=this._ATTR_CHECK,b=0,c=a.length;b<c;b++){var e=a[b].attr;"setMandatory"in a[b]&&this.element.attr(e,a[b].setMandatory)}},
yH:function(a){this.tc(this.og(),a)},cA:function(a){a.keyCode===f.ui.keyCode.ENTER&&this.tc(this.og(),a)},oba:function(a){this.yD(a,this.Ff().val())},jt:function(){return this._WIDGET_CLASS_NAMES},PM:function(){return this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES},Pea:function(){f(this.element).wrap(f("\x3cdiv\x3e").addClass(this._WIDGET_CLASS_NAMES));this.Wr=this.element.parent()},Oea:function(){f(this.element).wrap(f("\x3cdiv\x3e").addClass(this._ELEMENT_TRIGGER_WRAPPER_CLASS_NAMES))},WC:function(){if(this._INPUT_HELPER_KEY&&
this.jt()){var a=this.element.attr("aria-describedby")||"",b=this.Wl(this._INPUT_HELPER_KEY);this.element.attr("aria-describedby",a+(" "+b));this.cH=f("\x3cdiv class\x3d'oj-helper-hidden-accessible' id\x3d'"+b+"'\x3e"+this.qj(this.D(this._INPUT_HELPER_KEY))+"\x3c/div\x3e");this.XC().append(this.cH)}},qj:function(a){return f("\x3cspan\x3e"+a+"\x3c/span\x3e").text()},XC:function(){return this.widget()},lt:function(){var d=this._superApply(arguments);this.options.pattern&&(this.WE[a.Vc.VALIDATOR_TYPE_REGEXP]=
this.xR());return f.extend(this.WE,d)},mA:function(a,b){-1!=Object.keys(this.dm).indexOf(a)&&this.widget().toggleClass(this.dm[a],!!b)},xR:function(){if(!this.options.pattern)return null;var d={pattern:this.options.pattern,label:this.TF()};f.extend(d,this.options.translations.regexp||{});return a.na.Kp(a.Vc.VALIDATOR_TYPE_REGEXP).createValidator(d)},Wl:function(a){return this.uuid+"_"+a},bia:function(){return this.Oi},refresh:function(){var a=this._superApply(arguments);this.Oi="rtl"===this.hc();
return a},getNodeBySubId:function(a){return this._super(a)},widget:function(){return this.jt()?this.Wr:this.element}},!0);a.Da("oj.ojInputText",f.oj.inputBase,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"text"}],_CLASS_NAMES:"oj-inputtext-input",_WIDGET_CLASS_NAMES:"oj-inputtext oj-form-control oj-component",options:{pattern:void 0},getNodeBySubId:function(a){var b=this._superApply(arguments),c;b||(c=a.subId,"oj-inputtext-input"===
c&&(b=this.element?this.element[0]:null));return b||null},_GetDefaultStyleClass:function(){return"oj-inputtext"},tx:function(){return"oj-inputBase"}});a.Da("oj.ojTextArea",f.oj.inputBase,{version:"1.0.0",defaultElement:"\x3ctextarea\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[],_CLASS_NAMES:"oj-textarea-input",_WIDGET_CLASS_NAMES:"oj-textarea oj-form-control oj-component",options:{pattern:void 0},getNodeBySubId:function(a){var b=this._superApply(arguments),c;b||(c=a.subId,"oj-textarea-input"===c&&(b=
this.element?this.element[0]:null));return b||null},_GetDefaultStyleClass:function(){return"oj-textarea"},tx:function(){return"oj-inputBase"}});a.Da("oj.ojInputPassword",f.oj.inputBase,{version:"1.0.0",defaultElement:"\x3cinput\x3e",widgetEventPrefix:"oj",_ATTR_CHECK:[{attr:"type",setMandatory:"password"}],_CLASS_NAMES:"oj-inputpassword-input",_WIDGET_CLASS_NAMES:"oj-inputpassword oj-form-control oj-component",options:{pattern:void 0},getNodeBySubId:function(a){var b=this._superApply(arguments),c;
b||(c=a.subId,"oj-inputpassword-input"===c&&(b=this.element?this.element[0]:null));return b||null},_GetDefaultStyleClass:function(){return"oj-inputpassword"}})});