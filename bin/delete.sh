#!/bin/bash

aws cloudformation delete-stack \
  --profile $STACK_AWS_PROFILE \
  --region $STACK_AWS_REGION \
  --stack-name=$STACK_NAME

echo "Deleting the $STACK_NAME stack..."

aws cloudformation wait stack-delete-complete --stack-name $STACK_NAME