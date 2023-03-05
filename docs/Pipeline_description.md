# _Automation Pipeline_ : `CI/CD Workflow`,
### _The basic **_Automation_** steps needed by the **[CircleCi](https://circleci.com/)** to automatically build and deploy the full-stack application_.

- _**Configuration**_ :
    - we need to create a **_.circleci_** forlder including a config.yml file in which we specify the workflow of the **_CI/CD_** process. 
    - In root folder we create :
        
            <root>/.circleci/config.yml

- _**Repository connection**_ :
    - We must connect the **_.circleci_** project to the deployed project Repository in order to maintain the **_CI/CD_** process and detect and change in the selected branch.
    - After creating a successful connection we can navigate to the projects list and see this :
![Alt text](../images/Screenshot%202023-03-05%20171602.png)
    
    <br>

- _**Workflow details**_ :
    - In the **_config.yml_** we specify the steps and jobs ( **_Orbs_** ) to be excuted.
        - Installing **_.circleci_** server dependencies :

                orbs:
                    node: circleci/node@5.0.2
                    aws-cli: circleci/aws-cli@3.1.1
                    eb: circleci/aws-elastic-beanstalk@2.0.1
        - The first **_Job_** is to Build the app.

                Build
                    docker:
                        - image: "cimg/node:14.15"
                    steps:
                    - node/install:
                    - checkout
                    - aws-cli/setup
                    - eb/setup

                    -----------------------------------------

                    - run:
                        name: Install Front-End Dependencies
                        command: |
                            npm run frontend:install
                    - run:
                        name: Front-End Build
                        command: |
                            npm run frontend:build
                    - checkout
                    - run:
                        name: Install Backend API Dependencies
                        command: |
                            npm run api:install
                    - run:
                        name: Backend API Build
                        command: |
                            npm run api:build
            
        - The second **_Job_** is to deploy the app.

                deploy:
                    docker:
                    - image: "cimg/base:stable"
                    steps:
                    - run:
                        name: Backend API Deployment
                        command: |
                        npm run api:deploy
                    - run:
                        name: Front-End Deploy
                        command: |
                        npm run frontend:deploy
        
        - The last (Optional ) step is to specify the **_Workflow_** itself as a sequence :

                workflows:
                    udagram:
                        jobs:
                        - build
                        - deploy

- _**Running the automation cycle**_ :
    - After any change happens in the specified branch, you can see the workflow status and health in the **_.circleci project status table_** like this :
![Alt text](../images/Screenshot%202023-03-05%20171455.png)