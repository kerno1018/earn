define(["jquery","knockout","ckeditor","jqueryui-amd/sortable"],function(e,t,a,i){var n=function(e){var a="report_text_editor_"+Math.floor(1e8*Math.random());return this.afterRender=function(){var i=[{name:"clipboard",groups:["undo"],items:["Undo","Redo"]},{name:"insert",items:["Table"]},{name:"basicstyles",groups:["basicstyles"],items:["Bold","Italic"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi"],items:["NumberedList","BulletedList","-","Outdent","Indent"]}],n=[{name:"clipboard",groups:["clipboard","undo"],items:["Cut","Copy","Paste","Undo","Redo"]},{name:"insert",items:["Table"]},{name:"tools",items:["Maximize"]},{name:"basicstyles",groups:["basicstyles"],items:["Bold","Italic","Underline","Strike"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi"],items:["NumberedList","BulletedList","-","Outdent","Indent","-","Blockquote"]},{name:"links",items:["Link","Unlink"]},{name:"format",items:["Format"]},{name:"size",items:["FontSize"]},{name:"colors",items:["TextColor"]}],r=[{name:"format",items:["Format"]},{name:"basicstyles",groups:["basicstyles"],items:["Bold","Italic","Underline"]}],s=[],o={};e.width&&(o.width=e.width),e.height&&(o.height=e.height),"full"==e.mode?o.toolbar=n:"title"==e.mode?(o.toolbar=r,o.height="55"):o.toolbar="standard"==e.mode?i:n,e.read_only&&(o.readOnly=e.read_only,o.toolbar=s),o.extraPlugins="divarea";var d=CKEDITOR.instances[a];d&&d.destroy(!0),d=CKEDITOR.replace(a,o);var l;t.isObservable(e.value)&&(d.on("change",function(t){l&&l.dispose(),e.value(t.editor.getData()),l=e.value.subscribe(function(e){d.setData(e,{noSnapshot:!0})})}),l=e.value.subscribe(function(e){d.setData(e,{noSnapshot:!0})})),d.setData(t.unwrap(e.value))},{afterRender:this.afterRender,randomId:a}};return{viewModel:{createViewModel:n},template:'<textarea data-bind="attr:{id: randomId}" rows="10" cols="80">                </textarea>                <span data-bind="template: { afterRender: afterRender }">'}});