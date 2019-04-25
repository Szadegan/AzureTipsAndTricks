(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{327:function(t,e,r){"use strict";r.r(e);var i=r(43),o=Object(i.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h4",{attrs:{id:"a-multi-part-series-showing-an-end-to-end-possibility"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-multi-part-series-showing-an-end-to-end-possibility","aria-hidden":"true"}},[t._v("#")]),t._v(" A multi-part series showing an end-to-end possibility")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.linkedin.com/in/crystal-tenn-6a0b9b67/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crystal Tenn"),r("OutboundLink")],1),t._v(" and I teamed up to bring an E2E blog series that features an Azure App Service website that communicates with an API project, which communicates to an Azure SQL back-end. The app is a traditional To-Do application based on an existing sample that used ADO.NET, but adapted for Azure deploy and to Visual Studio 2017. The technology/tooling stack is Visual Studio, VSTS, C#, Angular, and SQL.")]),t._v(" "),r("p",[t._v("The process for the app is described below. In Visual Studio, you will start out with a working To Do list application. You will push the code to VSTS (Visual Studio Team Services). Then you will create a CI/CD (Continuous Integration/Continuous Delivery) process in order to deploy to Azure. In Azure you will create 3 resources: Azure Web App, Azure API App, and an Azure SQL Server through this exercise.")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip101.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Local Setup - SQL Server"),r("OutboundLink")],1),t._v(" - Locally connect a front-end website to an API, and connect the API to a SQL Server.")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip102.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Local Setup - Visual Studio and Swagger"),r("OutboundLink")],1),t._v(" - Continue Part 1 and use a local instance of Visual Studio and Swagger to communicate to our db.")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip103.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swagger - Learn how to use Swagger for API management"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip104.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Deployment - Deploy the SQL database to Azure manually"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip105.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Deployment - Deploy the front-end Web App and API App to Azure manually"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip107.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Adding the project to VSTS with Git"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip108.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSTS Continuous Integration - Setup a CI Process in VSTS"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip109.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("VSTS Continuous Deployment - Setup a CD Process in VSTS"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip110.html?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cleanup - Cleanup and delete the Azure resources created in this tutorial"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("Keep in mind : While we won't be going into the deep specifics of how to code, you should be able to use this guide to look at several parts of the Azure technology stack and how you can best implement them in your organization.")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/todolist-diagram.png")}}),t._v(" "),r("p",[r("strong",[t._v("Pre-requisite:")]),t._v(" Install "),r("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"create-the-vsts-account"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-the-vsts-account","aria-hidden":"true"}},[t._v("#")]),t._v(" Create the VSTS Account")]),t._v(" "),r("p",[t._v("1.) Sign up for VSTS if you do not have an account by clicking the "),r("a",{attrs:{href:"https://www.visualstudio.com/team-services/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sign Up button"),r("OutboundLink")],1),t._v(" on the homepage.")]),t._v(" "),r("p",[t._v("Make sure to use the same email address that you used for Azure.")]),t._v(" "),r("p",[t._v("2.) Create a new VSTS Account by hitting the button on the top right.")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/blog5-00.png")}}),t._v(" "),r("p",[t._v("3.) After your account is created, then you'll see the following:")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/blog5-mc1.png")}}),t._v(" "),r("p",[t._v("4.) You can optionally rename the project by clicking on the "),r("strong",[t._v("Gear")]),t._v(" icon and clicking on the "),r("strong",[t._v("Project Name")]),t._v(". Note that if you do this, it updates all of your version control paths, work items, queries, and other team project artifacts to reflect the new name.")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/blog5-mc2.png")}}),t._v(" "),r("p",[t._v("5.) Click on the "),r("strong",[t._v("push an existing repository from the command line")]),t._v(" and copy the copy to notepad.")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/blog5-mc3.png")}}),t._v(" "),r("p",[t._v("6.) If you've already installed "),r("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),r("OutboundLink")],1),t._v(", then run navigate to your Visual Studio solution and run the following commands in order. You'll need to change the 4th command to the URL you copied earlier")]),t._v(" "),r("div",{staticClass:"language-text line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('git init\ngit add .\ngit commit -m "Initial commit"\ngit remote add origin https://YOURPROJECT.visualstudio.com/_git/AzureWebApp\ngit push -u origin --all\n')])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br")])]),r("img",{attrs:{src:t.$withBase("/files/blog5-mc04.png")}}),t._v(" "),r("p",[t._v("7.) Go to VSTS and click "),r("strong",[t._v("Code")]),t._v(", you should see your code there:")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/blog5-mc05.png")}})])},[],!1,null,null,null);e.default=o.exports}}]);