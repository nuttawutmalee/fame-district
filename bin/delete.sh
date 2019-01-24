#!/bin/bash

aws cloudformation delete-stack \
  --profile $AWS_PROFILE \
  --region $AWS_REGION \
  --stack-name=$STACK_NAME

echo "Deleting the $STACK_NAME stack..."

aws cloudformation wait stack-delete-complete --stack-name $STACK_NAME