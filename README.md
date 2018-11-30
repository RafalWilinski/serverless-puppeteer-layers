# Serverless Puppeteer using AWS Lambda Layers

Recently AWS introduced [Layers](https://aws.amazon.com/about-aws/whats-new/2018/11/aws-lambda-now-supports-custom-runtimes-and-layers/) which enables sharing common code between functions and working with large dependencies (such as headless chrome) much easier.

This project example returns a screenshot of page requested via `?address=` query parameter.

![Demo](assets/demo.gif?raw=true "Demo")

### Usage
```sh
serverless deploy

curl <DEPLOYED_ENDPOINT>?address=https://google.com
```

