# Setting up SageMaker endpoint in AWS

## Step 1: Create SageMaker domain

Create SageMaker Domain may take more than 30 mins. 

## Step 2: Deploy Stable Diffusion model

https://aws.amazon.com/blogs/machine-learning/generate-images-from-text-with-the-stable-diffusion-model-on-amazon-sagemaker-jumpstart/ 


## Step 3: Run notebook to test the model 


## Step 4: Write lambda to call endpoint 
Select Runtime `Python 3.7` and use x86_64 architecture.

1. Add AWSLambda-Python37-SciPy1x layer 
2. Add Matplotlib layer 
3. Add the function code.
## Step 5: Create api gateway 

## Step 6: Create Amplify project and invoke api 