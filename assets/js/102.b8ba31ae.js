(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{622:function(t,e,s){"use strict";s.r(e);var n=s(6),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"embedding-redux-into-your-theme-or-plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#embedding-redux-into-your-theme-or-plugin"}},[t._v("#")]),t._v(" Embedding Redux into Your Theme or Plugin")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Due to security concerns, we strongly discourage this method of using Redux without your projects.  We update our software monthly, which may")]),t._v(" "),s("p",[t._v("include pathes to plug security holes.  Unless you plan on updating Redux within your project regularly, the Redux plugin installed via "),s("a",{attrs:{href:"http://tgmpluginactivation.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TGM"),s("OutboundLink")],1),t._v(" is the\npreferred method.")])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("Never, ever, EVER modify any files in `redux-core`. There are hooks, filters, etc. to bypass nearly anything.")]),t._v(" "),s("p",[t._v("Modifying files within "),s("code",[t._v("redux-core")]),t._v(" (including dropping in extensions) will only serve to make your life harder should you\never choose to update.")])]),t._v(" "),s("p",[t._v("So you have this really cool Theme or Plugin. And of course you love Redux because, let’s face it, who doesn't? You\nunderstand how the Redux plugin works, but the concept of a theme or plugin installing another plugin escapes you. Or perhaps\nyou might not care for "),s("a",{attrs:{href:"http://tgmpluginactivation.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TGM"),s("OutboundLink")],1),t._v(" or any of its variations. What's one to do?")]),t._v(" "),s("p",[t._v("You've come to the right place. Embedding Redux into your theme or plugin is as easy as 1, 2, 3. You may wonder...what if your client also installs the\nRedux plugin? Will it conflict? The answer is no. Even better, the Redux plug-in will "),s("strong",[t._v("always")]),t._v(" supersede your theme’s require of Redux.\nThis means your clients could - hypothetically - receive updates to Redux without any theme update from you. Pretty cool, eh?")]),t._v(" "),s("p",[t._v("Let's begin, shall we?")]),t._v(" "),s("h2",{attrs:{id:"step-1-get-the-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-get-the-source"}},[t._v("#")]),t._v(" Step 1: Get the Source")]),t._v(" "),s("p",[t._v("There are a variety of methods in which to acquire the Redux Framework source code. Please refer to the\n"),s("RouterLink",{attrs:{to:"/guides/basics/install.html"}},[t._v("Basics: Installing")]),t._v(" guide. Once you've acquired the source, only the "),s("code",[t._v("redux-core")]),t._v(" folder matters\n(Note: in 3.x, this folder was called "),s("code",[t._v("ReduxCore")]),t._v(", but has been re-named to conform with WordPress naming standards.)\nYou can rename it to anything you prefer. It’s important to choose a name for the folder in which Redux will be contained\nnow, as it will be challenging to change the name later. Redux may be placed into any directory or in any path\n(such as ~/admin or ~/framework).")],1),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("class_exists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ReduxFramework'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file_exists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__FILE__")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/ReduxFramework/redux-core/framework.php'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require_once")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__FILE__")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/ReduxFramework/redux-core/framework.php'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$redux_demo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file_exists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__FILE__")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/ReduxFramework/sample/sample-config.php'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require_once")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__FILE__")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'/ReduxFramework/sample/sample-config.php'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Be sure to update the relative path in relation to the file in which the code is executed. It's suggested to place this\ncode at the top of your "),s("code",[t._v("functions.php")]),t._v(" file.")]),t._v(" "),s("p",[t._v("Here is where the true magic of Redux comes into play. Suppose a user has Redux installed by itself via a plugin. Your\ntheme is now using the plugin class and "),s("strong",[t._v("not")]),t._v(" the embedded version you included with your theme or\nplug-in! Put another way, your project will just work out of the box, no questions asked! Redux, when installed as a\nplug-in takes priority. Any references that include Redux in your own "),s("code",[t._v("framework.php")]),t._v(" will be ignored. Redux - installed\nas a plug-in - can be forever updated by the user, and your theme receives the benefit without you ever needing to push\nany code update! What other option framework can claim the same?")]),t._v(" "),s("p",[t._v("The answer: None!")])])}),[],!1,null,null,null);e.default=a.exports}}]);