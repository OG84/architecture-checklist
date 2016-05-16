import { Injectable } from '@angular/core';
import { CheckItem } from './check-item';

export class ChecklistService {
    constructor() {

    }

    getCheckItems(): Array<CheckItem> {
        return [
            {
                title: 'Dependecy Management',
                infos: [
                    'do not rely on libraries or tools that are (or not) part of the execution environment',
                    'better pull all deps at build time',
                    'use a dependency management framework'
                ]
            },            
            {
                title: 'Configuration and Credentials',
                infos: [
                    'do not hardcode configuration properties (if dev then…else...)',
                    'put configuration in environment variables',
                    'never put credentials in the code or any other files which are managed by your version control',
                    'for storing credentials use environmenet variables or user secrets'
                ]
            },            
            {
                title: 'Resource swapping on-the-fly',
                infos: [
                    'switching database servers or other services should happen without any code changes and without a redeployment',
                    'should be possible on the fly in a matter of seconds',
                    'use environment variables for defining endpoints'
                ]
            },            
            {
                title: 'Deployment pipeline',
                infos: [
                    'keep the following flow in mind',
                    '[build stage] CI tool should pull code out of git and build the code (at a certain commit)',
                    '[release stage] CI tool is using this build and creates a release by applying the relevant configurations',
                    '[run stage] CI tool is deploying this release to the execution or runtime environment',
                    'do not make any code changes to any of those stages after the build',
                    'use languages which provide a REPL shell so your deployment tools can trigger e.g. build by commandline'
                ]
            },            
            {
                title: 'Processes are stateless',
                infos: [
                    'every process should always persist its data to the backing system(s)',
                    'do not rely on in-memory data as processes can be terminated at every moment'
                ]
            },            
            {
                title: 'Self contained systems',
                infos: [
                    'Your services should be self contained and loosely coupled to other systems',
                    'each service has its own webserver',
                    'each service exports http by binding to a certain port',
                    'self contained also means each service should have its own database with the data transformed to meet its requirements',
                    'self contained systems usually apply when using a micro service architecture'
                ]
            },            
            {
                title: 'Fast startup and graceful shutdown',
                infos: [
                    'each processor service should be up in a matter of seconds',
                    'when a service is shut down, it should dispose its resources and close any connections'
                ]
            },            
            {
                title: 'Development vs production',
                infos: [
                    'keep development and production environments as similar as possible (same os, db etc.)',
                    'deployment should be fully automated and simple',
                    'every developer should be able to deploy on his own'
                ]
            },            
            {
                title: 'Logging',
                infos: [
                    'treat logs as event streams (write to stdout)',
                    'a service should not manage or write its own logfiles',
                    'logfiles are managed by the execution environment',
                    'use tools like hive for log management and monitoring'
                ]
            },            
            {
                title: 'Agile and extensible',
                infos: [
                    'keep your architecture extensible and start off simple',
                    'developers should be able to develop incrementally (e.g. scrum)',
                    'try to involve every potential customer into the architecture and design process',
                    'do not create a god architecture which serves all possible (but not needed) use cases',
                    'create an architecture which fits your customers needs'
                ]
            },            
            {
                title: 'Cohesion and domain driven',
                infos: [
                    'try to establish an ubiquitous language which is used throughout all parties',
                    'domain driven design can help you with that',
                    'cut you services and components in domain specific responsibilities',
                    'see self contained systems'
                ]
            },            
            {
                title: 'code versioning',
                infos: [
                    'always use a version control system like git to get code history, tagging and be able to work with multiple developers at one code base'
                ]
            },            
            {
                title: 'Information Hiding',
                infos: [
                    'each component should expose as less as possible code to the ouside',
                    'each public class should be defined by an interface',
                    'use facades to hide business logic to third parties'
                ]
            },            
            {
                title: 'Separation of Concerns',
                infos: [
                    'each component should have a single (higher) responsibility',
                    'each class or service should have a single responsibility',
                    'each method should only have a single responsibility'
                ]
            },            
            {
                title: 'Clean and self documenting code',
                infos: [
                    'keep methods as short as possible (10 lines should be enough)',
                    'use distinct naming for components, classes, methods and variables',
                    'new developers should be able to understand the system just by reading the code without having much insight into the business processes'
                ]
            },            
            {
                title: 'Non functional requirements',
                infos: [
                    'do not rely on customers functional requirements only',
                    'ask your customers AND developers for non functional requirements',
                    'those have a huge impact on customer AND developer acceptance',
                    'keep those 16 recommendations in mind when designing an architecture'
                ]
            }
        ];
    }
}