# Serverless Puppeteer using AWS Lambda Layers

Recently AWS introduced [Layers](https://aws.amazon.com/about-aws/whats-new/2018/11/aws-lambda-now-supports-custom-runtimes-and-layers/) which enables sharing common code between functions and working with large dependencies (such as headless chrome) much easier.

This project example returns a screenshot of page requested via `?address=` query parameter.

![Demo](assets/demo.gif?raw=true 'Demo')

### Usage

```sh
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn # This will NOT install headless chrome from Puppeteer library, we want it from layer instead

sls deploy

curl <DEPLOYED_ENDPOINT>?address=https://google.com
```

or apply this ARN to your function directly: `arn:aws:lambda:us-east-1:085108115628:layer:chrome:6`
