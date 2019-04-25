(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{334:function(e,t,s){"use strict";s.r(t);var n=s(43),a=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h4",{attrs:{id:"remove-azure-secrets-committed-to-github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-azure-secrets-committed-to-github","aria-hidden":"true"}},[e._v("#")]),e._v(" Remove Azure Secrets committed to GitHub")]),e._v(" "),s("p",[e._v("Writing code day after day means secrets, connection strings and more get added to your code. And if you are like me, they get committed to your GitHub database and then you are embarrassed. In this post, I'll walk you through cleaning up a repo.")]),e._v(" "),s("p",[e._v("Part 1:")]),e._v(" "),s("ul",[s("li",[e._v("Change to the directory where you store your repo or clone a fresh copy with "),s("code",[e._v("git clone https://github.com/something/something.git")]),e._v(".")]),e._v(" "),s("li",[e._v("Clone a fresh copy of your repo using the mirror option, like the following "),s("code",[e._v("git clone --mirror https://github.com/something/something.git")]),e._v(".")]),e._v(" "),s("li",[e._v("You'll now have a bare repo. Below I've listed out the contents to verify.")])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Michaels-MBP:cleanme mbcrump$ ls -l\ntotal 16\n-rw-r--r--   1 mbcrump  staff  189 Apr 16 20:25 appsecrets.json\ndrwxr-xr-x  11 mbcrump  staff  352 Apr 16 20:26 cleanme.git\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("ul",[s("li",[e._v("You see that I have an appsecrets.json which contains some sensitive data that I need to remove:")])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('{\n  "ConnectionStrings": {\n    "StorageAccountAPI": "DefaultEndpointsProtocol=https;AccountName=autotweet;AccountKey=+1234;EndpointSuffix=core.windows.net"\n  }\n}\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("Part 2:")]),e._v(" "),s("ul",[s("li",[e._v("Install BFG with "),s("code",[e._v("brew install bfg")]),e._v(" assuming you have Homebrew installed and using a Mac or "),s("a",{attrs:{href:"https://rtyley.github.io/bfg-repo-cleaner/",target:"_blank",rel:"noopener noreferrer"}},[e._v("download"),s("OutboundLink")],1),e._v(" the JAR file if you are on Windows.")])]),e._v(" "),s("p",[e._v("Part 3:")]),e._v(" "),s("ul",[s("li",[e._v("Build a "),s("code",[e._v("passwords.txt")]),e._v(" file and place and enter the passwords that you'd like to remove.")])]),e._v(" "),s("p",[e._v("Mine was replacing an Azure Storage Table key that I accidentally committed:")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("DefaultEndpointsProtocol=https;AccountName=autotweet;AccountKey=+1234;EndpointSuffix=core.windows.net\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Part 4:")]),e._v(" "),s("ul",[s("li",[e._v("Run "),s("code",[e._v("bfg --replace-text passwords.txt cleanme.git")])]),e._v(" "),s("li",[e._v("Below is output from that command:")])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Cleaning\n--------\n\nFound 7 commits\nCleaning commits:       100% (7/7)\nCleaning commits completed in 253 ms.\n\nUpdating 1 Ref\n--------------\n\n\tRef                 Before     After   \n\t---------------------------------------\n\trefs/heads/master | 1aa1546d | 1aac2fd2\n\nUpdating references:    100% (1/1)\n...Ref update completed in 89 ms.\n\nCommit Tree-Dirt History\n------------------------\n\n\tEarliest      Latest\n\t|                  |\n\t .  D  m D  D  D  m \n\n\tD = dirty commits (file tree fixed)\n\tm = modified commits (commit message or parents changed)\n\t. = clean commits (no changes to file tree)\n\n\t                        Before     After   \n\t-------------------------------------------\n\tFirst modified commit | 2b978e2d | 82b385c5\n\tLast dirty commit     | be1cde85 | 8ddbdf06\n\nChanged files\n-------------\n\n\tFilename          Before & After     \n\t-------------------------------------\n\tappsecrets.json | 5d8bfd89 ⇒ 21cdaeb1\n\n\nIn total, 10 object ids were changed. Full details are logged here:\n\n\t/Users/mbcrump/Documents/GitHub/cleanme/cleanme.git.bfg-report/2018-04-16/21-20-48\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br"),s("span",{staticClass:"line-number"},[e._v("30")]),s("br"),s("span",{staticClass:"line-number"},[e._v("31")]),s("br"),s("span",{staticClass:"line-number"},[e._v("32")]),s("br"),s("span",{staticClass:"line-number"},[e._v("33")]),s("br"),s("span",{staticClass:"line-number"},[e._v("34")]),s("br"),s("span",{staticClass:"line-number"},[e._v("35")]),s("br"),s("span",{staticClass:"line-number"},[e._v("36")]),s("br"),s("span",{staticClass:"line-number"},[e._v("37")]),s("br"),s("span",{staticClass:"line-number"},[e._v("38")]),s("br"),s("span",{staticClass:"line-number"},[e._v("39")]),s("br"),s("span",{staticClass:"line-number"},[e._v("40")]),s("br"),s("span",{staticClass:"line-number"},[e._v("41")]),s("br"),s("span",{staticClass:"line-number"},[e._v("42")]),s("br"),s("span",{staticClass:"line-number"},[e._v("43")]),s("br"),s("span",{staticClass:"line-number"},[e._v("44")]),s("br")])]),s("p",[e._v("Part 5:")]),e._v(" "),s("ul",[s("li",[e._v("Run "),s("code",[e._v("git reflog expire --expire=now --all && git gc --prune=now --aggressive")])]),e._v(" "),s("li",[e._v("Run "),s("code",[e._v("git push")]),e._v(" to push it to your repo.")])])])},[],!1,null,null,null);t.default=a.exports}}]);