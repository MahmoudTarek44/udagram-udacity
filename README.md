# Project : Deployment process **( Hosting Full-stack Application )**. 

## Quick overview

- It's the third test project in **FWD initiative** sponsered by the **Egyptian Government** for the _Advanced Wep development track_ at **UDACITY**.

- This project requires to complete a **Deployment process** in order to illustrate the steps needed to deploy a full stack app in **AWS**.

### Project main sections : 
- Back-end project built using **[Node](https://nodejs.org) , [Express](https://expressjs.com/) and [postgres](https://www.postgresql.org/)** database.
- Front-end project built using **[Ionic framework](https://ionicframework.com/docs/angular/your-first-app) : [Angular](https://angular.io/)**.
- Deployment using **[AWS](https://aws.amazon.com/)** and **[AWS CLI](https://aws.amazon.com/cli/)**.
- Deployment automation and **CI/CD** using **[CircleCi](https://circleci.com/)**.

## The Auther:

- ### _Mahmoud Tarek Mahmoud Ali_.

# Table of Contents:

### Project Description in depth :
1. _In this project you will learn how to take a newly developed Full-Stack application built for a retailer and deploy it to a cloud service provider so that it is available to customers. You will use the aws console to start and configure the services the application needs such as a database to store product information and a web server allowing the site to be discovered by potential customers. You will modify your package.json scripts and replace hard coded secrets with environment variables in your code._

2. _After the initial setup, you will learn to interact with the services you started on aws and will deploy manually the application a first time to it. As you get more familiar with the services and interact with them through a CLI, you will gradually understand all the moving parts._

3. _You will then register for a free account on CircleCi and connect your Github account to it. Based on the manual steps used to deploy the app, you will write a config.yml file that will make the process reproducible in CircleCi. You will set up the process to be executed automatically based when code is pushed on the main Github branch._

4. _The project will also include writing documentation and runbooks covering the operations of the deployment process. Those runbooks will serve as a way to communicate with future developers and anybody involved in diagnosing outages of the Full-Stack application._

### The provided starter code : **_Udagram project_**.

- _This application is provided to you as an alternative starter project if you do not wish to host your own code done in the previous courses of this nanodegree. The udagram application is a fairly simple application that includes all the major components of a Full-Stack web application._

- ### Technologies and Services :
    - Node v14.15.1 (LTS) or more recent

    - AWS CLI v2, and EB CLI.

    - A RDS database running Postgres.

    - A S3 bucket for hosting the static website files.

    - CI/CD using CircleCi for automation.

- ### Installation and Locally testing : 
    - _Provision the necessary AWS services needed for running the application:_
        - In AWS, provision a publicly available RDS database running Postgres.
        - In AWS, provision a s3 bucket for hosting the uploaded files.
        - Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv).
        - From the root of the repo, navigate udagram-api folder `cd udagram/udagram_api` to install the node_modules `npm install or yarn`. 
        - After installation is done start the api in dev mode with `npm run dev`.
        - Without closing the terminal in step 1, navigate to the udagram_frontend `cd udagram/udagram_frontend` to intall the node_modules `npm install or yarn`.
        - After installation is done start the api in dev mode with `npm run start`.

### Testing the source code before deployment :
- This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.
    - `cd udagram/udagram_frontend`
    - `npm run test`
    - `npm run e2e`

- Unit Tests:
    - Unit tests are using the Jasmine Framework.
    - The e2e tests are using Protractor and Jasmine.

<hr />

### You can check the project from this link:
**_[http://mahmoud-7673-1891-3084.s3-website-us-east-1.amazonaws.com/home](http://mahmoud-7673-1891-3084.s3-website-us-east-1.amazonaws.com/home)_**
