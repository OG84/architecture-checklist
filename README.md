# Principles and best practices of good software architecture

This list has been created for educational purposes. 

## Installation
- npm i -g angular-cli
- npm i
- ng serve
- open localhost:4200

## 1 Dependecy Management
- do not rely on libraries or tools that are (or not) part of the execution environment
- better pull all deps at build time
- use a dependency management framework

## 2 Configuration and Credentials
- do not hardcode configuration properties (if dev then…else...)
- put configuration in environment variables
- never put credentials in the code or any other files which are managed by your version control
- for storing credentials use environmenet variables or user secrets 
- e.g. https://github.com/aspnet/UserSecrets

## 3 resource swapping on-the-fly
- switching database servers or other services should happen without any code changes and without a redeployment
- should be possible on the fly in a matter of seconds
- use environment variables for defining endpoints

## 4 Deployment pipeline
- kepp the following flow in mind
- [build stage] CI tool should pull code out of git and build the code (at a certain commit)
- [release stage] CI tool is using this build and creates a release by applying the relevant configurations
- [run stage] CI tool is deploying this release to the execution or runtime environment
- do not make any code changes to any of those stages after the build
- use languages which provide a REPL shell so your deployment tools can trigger e.g. build by commandline

## 5 processes are stateless
- every process should always persist its data to the backing system(s)
- do not rely on in-memory data as processes can be terminated at every moment

## 6 Self contained systems
- Your services should be self contained and loosely coupled to other systems
- each service has its own webserver
- each service exports http by bindung to a certain port
- self contained also means each service should have its own database with the data transformed to meet its requirements
- self contained systems usually apply when using a micro service architecture

## 7 fast startup and graceful shutdown
- each processor service should be up in a matter of seconds
- when a service is shut down, it should dispose its resources and close any connections

## 8 development vs production
- keep development and production environments as similar as possible (same os, db etc.)
- deployment should be fully automated and simple
- every developer should be able to deploy on his own

## 9 Logging
- treat logs as event streams (write to stdout)
- a service should not manage or write its own logfiles
- logfiles are managed by the execution environment
- use tools like hive

## 10 Agile and extensible
- keep your architecture extensible and start off simple
- developers should be able to develop incrementally (e.g. scrum)
- try to involve every potential customer to the architecture and design process
- do not create a god architecture which serves all possible use cases
- create an architecture which fits your customers needs

## 11 Cohesion and domain driven
- try to establish an ubiquitous language which is used throughout all parties
- domain driven design can help you with that
- cut you services and components in domain specific responsibilities
- see self contained systems

## 12 code versioning
- always use a version control system like git to get code history, tagging and be able to work with multiple developers at one code base

## 13  Information Hiding
- each component should expose as less as possible code to the ouside
- each public class should be defined by an interface
- use facades to hide business logic to third parties 

## 14 Separation of Concerns
- each component should have a single (higher) responsibility
- each class or service should have a single responsibility
- each method should only have a single responsibility

## 15  Clean and self documenting code
- keep methods as short as possible (10 lines should be enough)
- use distinct naming for components, classes, methods and variables
- new developers should be able to understand the system just by reading the code without having much insight into the business processes

## 16 Non functional requirements
- do not rely on customers functional requirements only
- ask your customers AND developers for non functional requirements
- those have a huge impact on customer AND developer acceptance

Keep those 16 recommendations in mind when designing an architecture