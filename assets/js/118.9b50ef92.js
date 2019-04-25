(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{422:function(t,e,n){"use strict";n.r(e);var a=n(43),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("💡 Learn more : "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("App Service Documentation"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("📺 Watch the video : "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=P7CUEU9c0MM&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=22?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Work with App Settings in Azure App Services"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("h4",{attrs:{id:"intro"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intro","aria-hidden":"true"}},[t._v("#")]),t._v(" Intro")]),t._v(" "),n("p",[t._v("We've recently created a "),n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip19.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("web app"),n("OutboundLink")],1),t._v(" and uploaded it to Azure App Service. We also took a look at "),n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip20.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("multiple ways"),n("OutboundLink")],1),t._v(" to examine those files through the Azure portal interface and how we'd add "),n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip21.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("extensions"),n("OutboundLink")],1),t._v(" and "),n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip22.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("deployment slots"),n("OutboundLink")],1),t._v(" for our web app. We also took a look at a feature called "),n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip23.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Testing in Production"),n("OutboundLink")],1),t._v(" and how to use  "),n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip24.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("PowerShell"),n("OutboundLink")],1),t._v(" to automatically distribute the load between your Production and deployment slot. We wrapped up by looking at the "),n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip25.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Resource Explorer"),n("OutboundLink")],1),t._v(" to explore REST APIs and how to "),n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip26.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("perform load testing"),n("OutboundLink")],1),t._v(". In this post, we'll take advantage of App Settings to store a Key/Value pair securely in Azure and access it in your web app.")]),t._v(" "),n("h4",{attrs:{id:"working-with-app-settings-and-azure-app-services"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#working-with-app-settings-and-azure-app-services","aria-hidden":"true"}},[t._v("#")]),t._v(" Working with App Settings and Azure App Services")]),t._v(" "),n("p",[t._v("App Settings are used to store configurable items without making any changes to the code. The key-value pairs are stored behind the scenes in a configuration store which is nice because sensitive information never shows up in a web.config, etc. file. In order to take advantage of this, you'll need to log into your Azure account and go to your App Service that you created and look under "),n("strong",[t._v("Development Tools")]),t._v(" then you will see "),n("strong",[t._v("Application Settings")]),t._v(". Open it and scroll down and you'll see "),n("strong",[t._v("App Settings")]),t._v(" as shown below.")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/appsettings1.png")}}),t._v(" "),n("p",[t._v("We're going to add an App Setting in Azure. I added one with the "),n("strong",[t._v("key")]),t._v(" of "),n("code",[t._v("Environment")]),t._v(" and the "),n("strong",[t._v("value")]),t._v(" is set to "),n("code",[t._v("Staging")])]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/appsettings2.png")}}),t._v(" "),n("p",[t._v("Open or create your ASP.NET MVC app and modify the "),n("code",[t._v("appSettings")]),t._v(" section of the "),n("strong",[t._v("web.config")]),t._v(" file to add our  "),n("strong",[t._v("Environment")]),t._v(" key/value pair as shown below :")]),t._v(" "),n("div",{staticClass:"language-text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('  <appSettings>\n    <add key="webpages:Version" value="3.0.0.0" />\n    <add key="webpages:Enabled" value="false" />\n    <add key="Environment" value="Production" />\n  </appSettings>\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("Now it is in our web configuration of our app. In order to see the value, we'll need to add it to a page to display the value.")]),t._v(" "),n("p",[t._v("If you're using ASP.NET MVC, then navigate to your "),n("strong",[t._v("appname/Views/Home/Index.cshtml")]),t._v(" file and add the following "),n("strong",[t._v("using")]),t._v(" statement followed by a call to "),n("strong",[t._v("ConfigurationManager")]),t._v(" as shown below :")]),t._v(" "),n("div",{staticClass:"language-html line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v('@using System.Configuration\n@{\n    ViewBag.Title = "Home Page";\n}\n\n'),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jumbotron"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Testing App Settings"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n    @ConfigurationManager.AppSettings["Environment"]\n'),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("p",[t._v("If you run the application locally, then you'll see "),n("strong",[t._v("Production")]),t._v(" as it is coming from the "),n("strong",[t._v("web.config")]),t._v(" file, but if you run it inside of Azure, then you'll see "),n("strong",[t._v("Staging")]),t._v(" as it is coming from the "),n("strong",[t._v("App Settings")]),t._v(" configuration store located in Azure. Neat stuff!")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/appsettings3.png")}})])},[],!1,null,null,null);e.default=s.exports}}]);