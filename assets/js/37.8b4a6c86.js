(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{344:function(e,t,a){"use strict";a.r(t);var o=a(43),n=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h4",{attrs:{id:"iot-exploration-so-far"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iot-exploration-so-far","aria-hidden":"true"}},[e._v("#")]),e._v(" IoT Exploration so Far")]),e._v(" "),a("p",[e._v("Back in "),a("router-link",{attrs:{to:"./tip96/"}},[e._v("post #96")]),e._v(", I started exploring the Azure IoT DevKit that included the new "),a("a",{attrs:{href:"http://mxchip.com/az3166",target:"_blank",rel:"noopener noreferrer"}},[e._v("MXChip"),a("OutboundLink")],1),e._v(". While I was exploring the device with my son, we eventually made the device send a tweet every time the button was pressed and I haven't done much with it until recently. So what does that have to do with Azure IoT Central? Well, we'll be exploring the SaaS offering and connecting the same MXChip to it.")],1),e._v(" "),a("h4",{attrs:{id:"getting-started-with-azure-iot-central"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-azure-iot-central","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting Started with Azure IoT Central")]),e._v(" "),a("p",[e._v("Azure IoT Central (as defined by Microsoft) is a fully managed SaaS solution that makes it easy to connect, monitor and manage your IoT assets at scale. It simplifies the initial setup of your IoT solution and reduces the management burden, operational costs, and overhead of a typical IoT project. So, when I think of this, my initial reaction is that I can setup different roles and manage an IoT project without getting too deep into the weeds. Obviously, I can if I want, but this should get me up and running fast.")]),e._v(" "),a("p",[e._v("Head over to the "),a("a",{attrs:{href:"https://aka.ms/iotcentral?WT.mc_id=akams-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure IoT Central Application Manager page"),a("OutboundLink")],1),e._v(" and sign in (using a MSA) and you'll be presented with an option to create a new application. Since we're using our MX Chip, we'll select the following:")]),e._v(" "),a("ul",[a("li",[e._v("Choose the Free Trial Application.")]),e._v(" "),a("li",[e._v("Choose the Sample DevKit template.")]),e._v(" "),a("li",[e._v("Give it a name and Azure will generate a unique URL for you (which you can change later).")]),e._v(" "),a("li",[e._v("Then choose Create.")])]),e._v(" "),a("p",[e._v("Your app will spin up and you'll see the following:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/iotcentral1.png")}}),e._v(" "),a("p",[e._v("Go to Device Explorer -> MX Chip -> + New -> Real -> Connect this device -> and copy the Connection String.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/iotcentral3.png")}}),e._v(" "),a("h4",{attrs:{id:"setting-up-the-mx-chip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-the-mx-chip","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting up the MX Chip")]),e._v(" "),a("p",[e._v("Before proceeding, I'd like to load the IoT Central firmware to the MX Chip.")]),e._v(" "),a("p",[e._v("Download the "),a("a",{attrs:{href:"https://github.com/Azure/iot-central-firmware/releases?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest Azure IoT Central firmware for the MXChip"),a("OutboundLink")],1),e._v(". Using the USB device, connect the DevKit device to your development machine. Look for a drive that has been added called "),a("code",[e._v("AZ3166")]),e._v(" and copy the "),a("code",[e._v("iotCentral.bin")]),e._v(" file onto the drive window. The device will reboot once the file is copied. You should see a Access Point on the screen on the MX Chip that you can connect to. Go ahead and connect to it and go to the "),a("a",{attrs:{href:"http://192.168.0.1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("following url"),a("OutboundLink")],1),e._v(". You'll see the following:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/iotcentral2.png")}}),e._v(" "),a("p",[e._v("Click on the here button and add the name of your "),a("strong",[e._v("WiFi network")]),e._v(", your "),a("strong",[e._v("password")]),e._v(", the "),a("strong",[e._v("Pin code")]),e._v(" on your device, and the "),a("strong",[e._v("connection string")]),e._v(" which we copied earlier and select all the available "),a("strong",[e._v("telemetry")]),e._v(" measurements. Now click "),a("strong",[e._v("Configure Device")]),e._v(".")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/iotcentral4.png")}}),e._v(" "),a("p",[e._v("If everything is correct, you'll be able to see data being sent. Here is an example of mine being on for a couple of days:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/iotcentral5.png")}}),e._v(" "),a("p",[e._v("Yep, 70K sent! 😃")]),e._v(" "),a("h4",{attrs:{id:"back-to-azure-iot-central"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back-to-azure-iot-central","aria-hidden":"true"}},[e._v("#")]),e._v(" Back to Azure IoT Central")]),e._v(" "),a("p",[e._v("Back in the "),a("a",{attrs:{href:"https://aka.ms/iotcentral?WT.mc_id=akams-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure IoT Central Application Manager page"),a("OutboundLink")],1),e._v(", if we go to Device and look for our MX Chip (this one should Not say Simulated), then you'll begin to see data for the telemetry measurements that we selected when setting it up.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/iotcentral6.png")}}),e._v(" "),a("p",[e._v("You can also do things such as setup Rules to act on a certain condition and notify you via email. Here is a rule that I setup in case the temp gets to high in the room that I'm monitoring.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/iotcentral7.png")}}),e._v(" "),a("p",[e._v("And you can even create a custom dashboard, like this one to show relevant information about the device and you can fully customize this page to show any data that you want.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/iotcentral8.png")}})])},[],!1,null,null,null);t.default=n.exports}}]);