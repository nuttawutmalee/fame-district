#!/bin/bash

aws cloudformation create-stack \
  --stack-name=$STACK_NAME \
  --template-body=file://cloudformation.yml \
  --capabilities CAPABILITY_IAM \
  --profile $STACK_AWS_PROFILE \
  --region $STACK_AWS_REGION \
  --parameters \
    ParameterKey=EnvType,ParameterValue=$ENV_TYPE \
    ParameterKey=DomainName,ParameterValue=$DOMAIN_NAME \
    ParameterKey=CodePipelineName,ParameterValue=$CODEPIPELINE_NAME \
    ParameterKey=GitHubOwner,ParameterValue=$GITHUB_OWNER \
    ParameterKey=GitHubRepo,ParameterValue=$GITHUB_REPO \
    ParameterKey=GitHubBranch,ParameterValue=$GITHUB_BRANCH \
    ParameterKey=GitHubToken,ParameterValue=$GITHUB_TOKEN \
    ParameterKey=SiteTitle,ParameterValue=$SITE_TITLE \
    ParameterKey=SiteUrl,ParameterValue=$SITE_URL \
    ParameterKey=PrismicRepo,ParameterValue=$PRISMIC_REPO \
    ParameterKey=PrismicToken,ParameterValue=$PRISMIC_TOKEN

echo "Creating the $STACK_NAME stack in $ENV_TYPE environment..."

aws cloudformation wait stack-create-complete --stack-name $STACK_NAME
