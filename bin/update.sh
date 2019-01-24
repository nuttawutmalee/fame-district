#!/bin/bash

aws cloudformation update-stack \
  --stack-name=$STACK_NAME \
  --template-body=file://cloudformation.yml \
  --capabilities CAPABILITY_IAM \
  --profile $AWS_PROFILE \
  --region $AWS_REGION \
  --parameters \
    ParameterKey=EnvType,ParameterValue=$ENV_TYPE \
    ParameterKey=DomainName,ParameterValue=$DOMAIN_NAME \
    ParameterKey=GitHubOwner,ParameterValue=$GITHUB_OWNER \
    ParameterKey=GitHubRepo,ParameterValue=$GITHUB_REPO \
    ParameterKey=GitHubBranch,ParameterValue=$GITHUB_BRANCH \
    ParameterKey=GitHubToken,ParameterValue=$GITHUB_TOKEN

echo "Updating the $STACK_NAME stack in $ENV_TYPE environment..."

aws cloudformation wait stack-update-complete --stack-name $STACK_NAME