(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{407:function(t,s,e){t.exports=e.p+"assets/img/raw_full_width.52d22ecf.png"},501:function(t,s,e){t.exports=e.p+"assets/img/raw_sectioned.cdd956b1.png"},502:function(t){t.exports=JSON.parse('{"type":"raw","name":"Raw","description":null,"icon":null,"groups":{"Global":["id","type","title","desc","subtitle","class"],"Advanced":["attributes","data","compiler","output","output_variables","permissions","required","default","validate"]},"fields":{"id":{"name":"id","title":"ID","type":"input","inputType":"text","description":"","order":0},"title":{"name":"title","title":"Title","type":"input","inputType":"text","description":"","order":5},"subtitle":{"name":"subtitle","title":"Subtitle","type":"input","inputType":"text","description":"","order":10},"desc":{"name":"desc","title":"Desc","type":"input","inputType":"text","description":"","order":15},"class":{"name":"class","title":"Class","type":"input","inputType":"text","description":"","order":20},"required":{"name":"required","title":"Required","fieldClasses":"full-width","type":"array","description":"Field visibility requirements.","order":20},"full_width":{"name":"full_width","title":"Full Width","type":"bool","default":true,"order":25},"markdown":{"name":"markdown","title":"Markdown","type":"bool","default":false,"order":30},"content":{"name":"content","title":"Content","type":"input","inputType":"text","description":"","order":35},"content_path":{"name":"content_path","title":"Content Path","type":"input","inputType":"text","description":"","order":40}}}')},565:function(t,s,e){"use strict";e.r(s);var a=e(502),n={data:function(){return{builder:a,defaults:{}}}},r=e(6),o=Object(r.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"raw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raw"}},[t._v("#")]),t._v(" Raw")]),t._v(" "),a("p",[t._v("The Raw field provides the ability to output raw HTML directly into the options panel both full width and sectioned.")]),t._v(" "),a("p",[a("span",{staticStyle:{display:"block","text-align":"center"}},[a("img",{attrs:{src:e(407),alt:""}})])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#arguments"}},[t._v("Arguments")])]),a("li",[a("a",{attrs:{href:"#build-config"}},[t._v("Build Config")])]),a("li",[a("a",{attrs:{href:"#example-config-with-relative-file"}},[t._v("Example Config with Relative File")])]),a("li",[a("a",{attrs:{href:"#example-config-with-php-output"}},[t._v("Example Config with PHP Output")])]),a("li",[a("a",{attrs:{href:"#display-options"}},[t._v("Display Options")]),a("ul",[a("li",[a("a",{attrs:{href:"#full-width-true"}},[t._v("Full Width => True")])]),a("li",[a("a",{attrs:{href:"#full-width-false"}},[t._v("Full Width => False")])])])])])]),a("p")]),t._v(" "),a("h2",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("type")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[a("code",[t._v("raw")])]),t._v(" "),a("td",[t._v("Value identifying the field type.")])]),t._v(" "),a("tr",[a("td",[t._v("full_width")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Flag to set denote if the field is full width or sectioned.")])]),t._v(" "),a("tr",[a("td",[t._v("markdown")]),t._v(" "),a("td",[t._v("bool")]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Flag to set the markdown of standard line-break and tab characters to HTML.")])]),t._v(" "),a("tr",[a("td",[t._v("content")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("String/HTML content to display. String values or file output may be used.")])]),t._v(" "),a("tr",[a("td",[t._v("content_path")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Full path to a file that will have the content parsed for output.")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Also See")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/configuration/fields/arguments.html"}},[t._v("Global Field Arguments")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/configuration/fields/permissions.html"}},[t._v("Using the "),a("code",[t._v("permissions")]),t._v(" Argument")])],1)])]),t._v(" "),a("h2",{attrs:{id:"build-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-config"}},[t._v("#")]),t._v(" Build Config")]),t._v(" "),a("builder",{attrs:{builder_json:t.builder,builder_defaults:t.defaults}}),t._v(" "),a("h2",{attrs:{id:"example-config-with-relative-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-config-with-relative-file"}},[t._v("#")]),t._v(" Example Config with Relative File")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'SECTION_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-raw'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'raw'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Raw output'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'subtitle'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Subtitle text goes here.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'desc'")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'This is the description field for additional info.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'content_path'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file_get_contents")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__FILE__")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/myfile.txt'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"example-config-with-php-output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-config-with-php-output"}},[t._v("#")]),t._v(" Example Config with PHP Output")]),t._v(" "),a("p",[t._v("Sometimes you want to do more than just a flat file with raw, and actually output the results of some PHP code. You\ncan easily do that with this approach.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v('ob_start( ); // This tells PHP to start putting all output in a buffer.\necho "HERE I AM";\n?>\nNow we\'re in HTML mode! Everything here will be saved as text,\nincluding line breaks!\n'),a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// And back to PHP mode")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Remember to use a full php here, the shortcode `<?` will get you in trouble!!!")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"Now i\'m here"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$output")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ob_get_clean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now everything is in our variable.")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Redux")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set_field")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'OPT_NAME'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'SECTION_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'id'")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'opt-raw'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'raw'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Raw output'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'subtitle'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Subtitle text goes here.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'desc'")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("esc_html__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'This is the description field for additional info.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your-textdomain-here'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'content'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$output")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now let's set that in the raw field.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),a("h2",{attrs:{id:"display-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display-options"}},[t._v("#")]),t._v(" Display Options")]),t._v(" "),a("p",[t._v('These are two modes for the raw field. Full width and "sectioned." Below, you will see an example of each.')]),t._v(" "),a("h3",{attrs:{id:"full-width-true"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-width-true"}},[t._v("#")]),t._v(" Full Width => True")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'full_width'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),t._v("`\n")])])]),a("p",[a("span",{staticStyle:{display:"block","text-align":"center"}},[a("img",{attrs:{src:e(407),alt:""}})])]),t._v(" "),a("h3",{attrs:{id:"full-width-false"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#full-width-false"}},[t._v("#")]),t._v(" Full Width => False")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'full_width'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("false")]),t._v("`\n")])])]),a("p",[a("span",{staticStyle:{display:"block","text-align":"center"}},[a("img",{attrs:{src:e(501),alt:""}})])])],1)}),[],!1,null,null,null);s.default=o.exports}}]);