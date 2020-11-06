(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{418:function(t,s,a){"use strict";a.r(s);var e=a(42),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),a("h3",{attrs:{id:"ios10-3系统安装mitmproxy证书后仍无法抓取https接口数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios10-3系统安装mitmproxy证书后仍无法抓取https接口数据"}},[t._v("#")]),t._v(" IOS10.3系统安装mitmproxy证书后仍无法抓取https接口数据")]),t._v(" "),a("blockquote",[a("p",[t._v("IOS10.3 升级了ssl证书验证机制。 如果只是安装了证书而没有在关于里添加信任，客户端会主动关闭连接。\n（10.2安装了证书，在升级到10.3时，默认是信任的）")])]),t._v(" "),a("p",[a("strong",[t._v("解决办法：")])]),t._v(" "),a("p",[t._v("在安装了相关证书后，需要到设置 → 通过 → 关于本机 → 证书信任设置,选择对应的证书，启用完全信任。")]),t._v(" "),a("h3",{attrs:{id:"执行setup-sh时-提示ssl证书验证失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行setup-sh时-提示ssl证书验证失败"}},[t._v("#")]),t._v(" 执行setup.sh时，提示SSL证书验证失败")]),t._v(" "),a("blockquote",[a("p",[t._v("在pip安装依赖库的时候提示“There was a problem confirming the ssl certificate: [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed”")])]),t._v(" "),a("p",[a("strong",[t._v("解决办法1：")])]),t._v(" "),a("p",[t._v("当前https请求使用了未认证的ssl证书，请检查当前环境是不是在代理环境下，如果是，请关闭代理服务，中心执行setup即可。")]),t._v(" "),a("p",[a("strong",[t._v("解决办法2：")])]),t._v(" "),a("p",[t._v("如果仍要在此环境下使用，需在setup.sh中做如下修改：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -r ./requirements.txt --trusted-host pypi.python.org\n")])])]),a("h3",{attrs:{id:"执行setup时报错-没有执行虚拟环境中的pip3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行setup时报错-没有执行虚拟环境中的pip3"}},[t._v("#")]),t._v(" 执行setup时报错，没有执行虚拟环境中的pip3")]),t._v(" "),a("blockquote",[a("p",[t._v("由于本地python3环境中没有pip，创建虚拟环境中不包含pip命令，从而导致虚拟环境变量没有覆盖系统的pip。")])]),t._v(" "),a("p",[a("strong",[t._v("解决办法：")])]),t._v(" "),a("p",[t._v("重新安装python3")]),t._v(" "),a("ul",[a("li",[t._v("如果使用brew安装的可以使用brew uninstall python3卸载")]),t._v(" "),a("li",[t._v("如果使用其他方式安装的可以直接删除python安装的目录。")]),t._v(" "),a("li",[t._v("然后再使用brew install python3安装python3")])]),t._v(" "),a("p",[a("strong",[t._v("注意：")]),t._v(" 不要误删/System目录下的python2")]),t._v(" "),a("h3",{attrs:{id:"使用brew时提示安装权限问题或安装其他依赖失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用brew时提示安装权限问题或安装其他依赖失败"}},[t._v("#")]),t._v(" 使用brew时提示安装权限问题或安装其他依赖失败")]),t._v(" "),a("blockquote",[a("p",[t._v("由于macos10.12后进行了安全机制更新，旧版本的brew即使在更新后仍无法正常工作。需要卸载后重新安装即可。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("uninstall\nruby -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v("\nhomebrew doc\n")])])]),a("h3",{attrs:{id:"执行setup报错-pip-install-pyyaml失败"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行setup报错-pip-install-pyyaml失败"}},[t._v("#")]),t._v(" 执行setup报错，pip install PyYAML失败")]),t._v(" "),a("blockquote",[a("p",[t._v("错误提示: 使用xcode build 失败。")])]),t._v(" "),a("p",[a("strong",[t._v("解决办法：")])]),t._v(" "),a("p",[t._v("需要切换xcode sdk")]),t._v(" "),a("p",[t._v("在xcode preferences中选择8.0以上的xcode command line tools，然后重新build。")]),t._v(" "),a("h3",{attrs:{id:"提示无法找到lyrebird命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示无法找到lyrebird命令"}},[t._v("#")]),t._v(" 提示无法找到lyrebird命令")]),t._v(" "),a("blockquote",[a("p",[t._v("Python安装到系统Library目录下时，没有足够的权限。\n可以尝试使用虚拟环境。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("python3 -m venv venv\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" venv/bin/activate\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" lyrebird    \n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);