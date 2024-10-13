---
sidebar_position: 1
---

# App Engine

Google App Engine (GAE) is a fully managed, serverless platform offered by Google Cloud Platform (GCP) 
for developing and hosting web applications. It allows you to focus on your application logic without 
worrying about server management or infrastructure scaling.

## Key features:

- Platform as a Service (PaaS): GAE falls under the PaaS category, meaning it provides the development, 
  runtime environment, and  server management, while you focus on the application code.
- Supported Languages: Build your application in Node.js, Java, Ruby, C#, Go, Python, or PHP.
- Automatic Scaling:  A core advantage of GAE is its automatic scaling capability. GAE allocates resources 
  based on your application's traffic, ensuring smooth operation during traffic spikes without manual 
  intervention.
- Standard vs. Flexible Environment: GAE offers two primary environments:
  - Standard Environment: This managed environment provides a pre-defined runtime with limited customization 
    but simplifies   development and deployment.
  - Flexible Environment: This environment offers more control and flexibility, allowing you to deploy 
    custom runtimes and    containerized applications.
- Application diagnostics: Use Cloud Monitoring and Cloud Logging to monitor the health and performance 
  of your app and Error Reporting to diagnose and fix bugs quickly.
- Application security: Help safeguard your application by defining access rules with App Engine firewall 
  and leverage managed SSL/TLS certificates by default on your custom domain at no additional cost.
- Integration with GCP Services: GAE integrates seamlessly with other GCP services like Cloud Storage, 
  Cloud SQL, and Cloud Logging, simplifying application development.

## Benefits:
- Reduced Server Management: GAE eliminates the need to manage servers, freeing you to focus on application 
  development.
- Scalability: Automatic scaling ensures your application can handle varying traffic loads.
- Cost-Effectiveness: GAE offers a pay-as-you-go pricing model, so you only pay for the resources your 
  application uses.
- Integration with GCP Services: GAE integrates seamlessly with other GCP services like Cloud Storage, 
  Cloud SQL, and Cloud  Logging, simplifying application development.

## App Engine Pricing

Google App Engine has a tiered pricing structure based on the environment you choose (Standard or Flexible) 
and the resources your application uses. Here's a breakdown:

**Standard Environment:**

- Free Tier:  This tier offers a limited amount of resources for development and testing purposes. It includes:

  - F1 instance class (fractional vCPU, 256 MB memory) for a limited duration per day
  - Outgoing network traffic is free
  - Limited quotas on other GCP services like Cloud Storage and Cloud Logging

- Paid Tier:  Once you exceed the free tier limits, you'll be charged based on:

  - Instance class: Hourly billing based on the instance class you select (e.g., B1, B2, B4, etc.). These classes 
    offer increasing CPU, memory, and storage capacity.
  - Instance usage: You're billed only for the time your instance is running.
  - Outgoing network traffic: There's a charge for data transferred out of Google's network (usually $0.12 per GB).

**Flexible Environment:**

- Pricing: The Flexible environment uses Compute Engine pricing for resources you use. This means you pay for:
  - Machine type: You choose a machine type (virtual machine configuration) based on your application's needs.
  - Persistent disks (optional): If you use persistent disks for storage, you'll be billed for the storage 
    space used.
  - Network traffic: Similar to the standard environment, you'll be charged for outgoing network traffic.

|Factor	            | Standard Environment	 | Flexible Environment    |
| :---:             | :---:                  | :---:                   |
|Ease of Use	      | High	                 | Lower                   |
|Cost	              | Potentially lower	     | Potentially higher      |
|Scalability	      | Automatic	             | Manual or Automatic     |
|Customization	    | Limited	               | High                    |
|Language Support   | Defined set	           | Wider range             |
|Security	          | Good	                 | Requires more management|

### Google App Engine Instance Classes

| Instance Class | Memory Limit | CPU Limit | Supported Scaling Types |
|---|---|---|---|
| F1 (default) | 384 MB | 600 MHz | automatic |
| F2 | 768 MB | 1.2 GHz | automatic |
| F4 | 1536 MB | 2.4 GHz | automatic |
| F4_1G | 3072 MB | 2.4 GHz | automatic |
| B1 | 384 MB | 600 MHz | manual, basic |
| B2 (default) | 768 MB | 1.2 GHz | manual, basic |
| B4 | 1536 MB | 2.4 GHz | manual, basic |
| B4_1G | 3072 MB | 2.4 GHz | manual, basic |
| B8 | 3072 MB | 4.8 GHz | manual, basic |


### App Engine Commands

`gcloud app` commands for managing Google App Engine resources.

**1. Service and Version Management:**

- `gcloud app create [SERVICE_NAME] [REGION] (flags)`: Creates a new App Engine application within your GCP 
   project in the  specified region.
- `gcloud app services list`: Lists all the services within your currently selected App Engine application.
- `gcloud app services describe [SERVICE_NAME]`: Provides detailed information about a specific App Engine service.
- `gcloud app versions list [SERVICE_NAME]`: Lists all the deployed versions of a particular App Engine service.
- `gcloud app versions create [SERVICE_NAME] [VERSION_NAME] (flags)`: Creates a new version of an App Engine 
   service, typically   used for deploying code updates.
- `gcloud app versions delete [SERVICE_NAME] [VERSION_NAME]`: Deletes a specific version of an App Engine service.
- `gcloud app services set-traffic [SERVICE_NAME] --splits [VERSION1=WEIGHT1,VERSION2=WEIGHT2] (flags)`: Controls 
   how traffic is distributed between different versions of a service. Here, WEIGHT1 and WEIGHT2 represent 
   percentages.

**2. Deployment:**

- `gcloud app deploy [SERVICE_NAME] (flags)`: Deploys your local code and configuration to the specified App 
   Engine service. This is typically used after creating a new version with gcloud app versions create.
- `gcloud app deploy [app.yaml] (flags)`: Deploys your application based on the configuration specified 
   in the app.yaml file.

**3. Logs and Monitoring:**

- `gcloud app logs tail [SERVICE_NAME] [VERSION_NAME]`: Displays logs for a specific version of an App 
   Engine service in real-time.
- `gcloud app logs read [SERVICE_NAME] [VERSION_NAME] --log-type [request|stdout|stderr]`: Reads logs 
   for a specific version, filtered by log type (request, standard output, or standard error).

**4. Other Useful Commands:**

- `gcloud app browse [SERVICE_NAME] [VERSION_NAME]`: Opens the deployed App Engine service in a web browser.
- `gcloud app regions list`: Lists available regions for deploying App Engine applications.

- `gcloud app update [SERVICE_NAME] (flags)`: Updates an existing App Engine service configuration, often 
   used for scaling or environment changes.
- `gcloud app domain-mappings [SERVICE_NAME] [DOMAIN_NAME] (flags)`: Manages custom domain mappings for your 
   App Engine service.