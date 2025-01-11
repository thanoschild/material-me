"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[475],{8259:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(4848),t=i(8453);const r={sidebar_position:1},l="App Engine",o={id:"Google-Cloud-Platform/compute-engines/app-engine",title:"App Engine",description:"Google App Engine (GAE) is a fully managed, serverless platform offered by Google Cloud Platform (GCP)",source:"@site/docs/Google-Cloud-Platform/compute-engines/app-engine.md",sourceDirName:"Google-Cloud-Platform/compute-engines",slug:"/Google-Cloud-Platform/compute-engines/app-engine",permalink:"/docs/Google-Cloud-Platform/compute-engines/app-engine",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Google-Cloud-Platform/compute-engines/app-engine.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Google Cloud Platform",permalink:"/docs/category/google-cloud-platform"},next:{title:"Google Compute Engine (GCE)",permalink:"/docs/Google-Cloud-Platform/compute-engines/compute-engine"}},d={},c=[{value:"Key features:",id:"key-features",level:2},{value:"Benefits:",id:"benefits",level:2},{value:"App Engine Pricing",id:"app-engine-pricing",level:2},{value:"Google App Engine Instance Classes",id:"google-app-engine-instance-classes",level:3},{value:"App Engine Commands",id:"app-engine-commands",level:3}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"app-engine",children:"App Engine"})}),"\n",(0,s.jsx)(n.p,{children:"Google App Engine (GAE) is a fully managed, serverless platform offered by Google Cloud Platform (GCP)\nfor developing and hosting web applications. It allows you to focus on your application logic without\nworrying about server management or infrastructure scaling."}),"\n",(0,s.jsx)(n.h2,{id:"key-features",children:"Key features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Platform as a Service (PaaS): GAE falls under the PaaS category, meaning it provides the development,\nruntime environment, and  server management, while you focus on the application code."}),"\n",(0,s.jsx)(n.li,{children:"Supported Languages: Build your application in Node.js, Java, Ruby, C#, Go, Python, or PHP."}),"\n",(0,s.jsx)(n.li,{children:"Automatic Scaling:  A core advantage of GAE is its automatic scaling capability. GAE allocates resources\nbased on your application's traffic, ensuring smooth operation during traffic spikes without manual\nintervention."}),"\n",(0,s.jsxs)(n.li,{children:["Standard vs. Flexible Environment: GAE offers two primary environments:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Standard Environment: This managed environment provides a pre-defined runtime with limited customization\nbut simplifies   development and deployment."}),"\n",(0,s.jsx)(n.li,{children:"Flexible Environment: This environment offers more control and flexibility, allowing you to deploy\ncustom runtimes and    containerized applications."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Application diagnostics: Use Cloud Monitoring and Cloud Logging to monitor the health and performance\nof your app and Error Reporting to diagnose and fix bugs quickly."}),"\n",(0,s.jsx)(n.li,{children:"Application security: Help safeguard your application by defining access rules with App Engine firewall\nand leverage managed SSL/TLS certificates by default on your custom domain at no additional cost."}),"\n",(0,s.jsx)(n.li,{children:"Integration with GCP Services: GAE integrates seamlessly with other GCP services like Cloud Storage,\nCloud SQL, and Cloud Logging, simplifying application development."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"benefits",children:"Benefits:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Reduced Server Management: GAE eliminates the need to manage servers, freeing you to focus on application\ndevelopment."}),"\n",(0,s.jsx)(n.li,{children:"Scalability: Automatic scaling ensures your application can handle varying traffic loads."}),"\n",(0,s.jsx)(n.li,{children:"Cost-Effectiveness: GAE offers a pay-as-you-go pricing model, so you only pay for the resources your\napplication uses."}),"\n",(0,s.jsx)(n.li,{children:"Integration with GCP Services: GAE integrates seamlessly with other GCP services like Cloud Storage,\nCloud SQL, and Cloud  Logging, simplifying application development."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"app-engine-pricing",children:"App Engine Pricing"}),"\n",(0,s.jsx)(n.p,{children:"Google App Engine has a tiered pricing structure based on the environment you choose (Standard or Flexible)\nand the resources your application uses. Here's a breakdown:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Standard Environment:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Free Tier:  This tier offers a limited amount of resources for development and testing purposes. It includes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"F1 instance class (fractional vCPU, 256 MB memory) for a limited duration per day"}),"\n",(0,s.jsx)(n.li,{children:"Outgoing network traffic is free"}),"\n",(0,s.jsx)(n.li,{children:"Limited quotas on other GCP services like Cloud Storage and Cloud Logging"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Paid Tier:  Once you exceed the free tier limits, you'll be charged based on:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Instance class: Hourly billing based on the instance class you select (e.g., B1, B2, B4, etc.). These classes\noffer increasing CPU, memory, and storage capacity."}),"\n",(0,s.jsx)(n.li,{children:"Instance usage: You're billed only for the time your instance is running."}),"\n",(0,s.jsx)(n.li,{children:"Outgoing network traffic: There's a charge for data transferred out of Google's network (usually $0.12 per GB)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Flexible Environment:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Pricing: The Flexible environment uses Compute Engine pricing for resources you use. This means you pay for:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Machine type: You choose a machine type (virtual machine configuration) based on your application's needs."}),"\n",(0,s.jsx)(n.li,{children:"Persistent disks (optional): If you use persistent disks for storage, you'll be billed for the storage\nspace used."}),"\n",(0,s.jsx)(n.li,{children:"Network traffic: Similar to the standard environment, you'll be charged for outgoing network traffic."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Factor"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Standard Environment"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Flexible Environment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Ease of Use"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"High"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Lower"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Cost"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Potentially lower"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Potentially higher"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Scalability"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Automatic"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Manual or Automatic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Customization"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Limited"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"High"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Language Support"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Defined set"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Wider range"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Security"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Good"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Requires more management"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"google-app-engine-instance-classes",children:"Google App Engine Instance Classes"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Instance Class"}),(0,s.jsx)(n.th,{children:"Memory Limit"}),(0,s.jsx)(n.th,{children:"CPU Limit"}),(0,s.jsx)(n.th,{children:"Supported Scaling Types"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"F1 (default)"}),(0,s.jsx)(n.td,{children:"384 MB"}),(0,s.jsx)(n.td,{children:"600 MHz"}),(0,s.jsx)(n.td,{children:"automatic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"F2"}),(0,s.jsx)(n.td,{children:"768 MB"}),(0,s.jsx)(n.td,{children:"1.2 GHz"}),(0,s.jsx)(n.td,{children:"automatic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"F4"}),(0,s.jsx)(n.td,{children:"1536 MB"}),(0,s.jsx)(n.td,{children:"2.4 GHz"}),(0,s.jsx)(n.td,{children:"automatic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"F4_1G"}),(0,s.jsx)(n.td,{children:"3072 MB"}),(0,s.jsx)(n.td,{children:"2.4 GHz"}),(0,s.jsx)(n.td,{children:"automatic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"B1"}),(0,s.jsx)(n.td,{children:"384 MB"}),(0,s.jsx)(n.td,{children:"600 MHz"}),(0,s.jsx)(n.td,{children:"manual, basic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"B2 (default)"}),(0,s.jsx)(n.td,{children:"768 MB"}),(0,s.jsx)(n.td,{children:"1.2 GHz"}),(0,s.jsx)(n.td,{children:"manual, basic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"B4"}),(0,s.jsx)(n.td,{children:"1536 MB"}),(0,s.jsx)(n.td,{children:"2.4 GHz"}),(0,s.jsx)(n.td,{children:"manual, basic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"B4_1G"}),(0,s.jsx)(n.td,{children:"3072 MB"}),(0,s.jsx)(n.td,{children:"2.4 GHz"}),(0,s.jsx)(n.td,{children:"manual, basic"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"B8"}),(0,s.jsx)(n.td,{children:"3072 MB"}),(0,s.jsx)(n.td,{children:"4.8 GHz"}),(0,s.jsx)(n.td,{children:"manual, basic"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"app-engine-commands",children:"App Engine Commands"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gcloud app"})," commands for managing Google App Engine resources."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Service and Version Management:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcloud app create [SERVICE_NAME] [REGION] (flags)"}),": Creates a new App Engine application within your GCP\nproject in the  specified region."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcloud app services list"}),": Lists all the services within your currently selected App Engine application."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcloud app services describe [SERVICE_NAME]"}),": Provides detailed information about a specific App Engine service."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcloud app versions list [SERVICE_NAME]"}),": Lists all the deployed versions of a particular App Engine service."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcloud app versions create [SERVICE_NAME] [VERSION_NAME] (flags)"}),": Creates a new version of an App Engine\nservice, typically   used for deploying code updates."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcloud app versions delete [SERVICE_NAME] [VERSION_NAME]"}),": Deletes a specific version of an App Engine service."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcloud app services set-traffic [SERVICE_NAME] --splits [VERSION1=WEIGHT1,VERSION2=WEIGHT2] (flags)"}),": Controls\nhow traffic is distributed between different versions of a service. Here, WEIGHT1 and WEIGHT2 represent\npercentages."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Deployment:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcloud app deploy [SERVICE_NAME] (flags)"}),": Deploys your local code and configuration to the specified App\nEngine service. This is typically used after creating a new version with gcloud app versions create."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcloud app deploy [app.yaml] (flags)"}),": Deploys your application based on the configuration specified\nin the app.yaml file."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Logs and Monitoring:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcloud app logs tail [SERVICE_NAME] [VERSION_NAME]"}),": Displays logs for a specific version of an App\nEngine service in real-time."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"gcloud app logs read [SERVICE_NAME] [VERSION_NAME] --log-type [request|stdout|stderr]"}),": Reads logs\nfor a specific version, filtered by log type (request, standard output, or standard error)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"4. Other Useful Commands:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gcloud app browse [SERVICE_NAME] [VERSION_NAME]"}),": Opens the deployed App Engine service in a web browser."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gcloud app regions list"}),": Lists available regions for deploying App Engine applications."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gcloud app update [SERVICE_NAME] (flags)"}),": Updates an existing App Engine service configuration, often\nused for scaling or environment changes."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"gcloud app domain-mappings [SERVICE_NAME] [DOMAIN_NAME] (flags)"}),": Manages custom domain mappings for your\nApp Engine service."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var s=i(6540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);