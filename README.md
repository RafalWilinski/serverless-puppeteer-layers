# Serverless Puppeteer using AWS Lambda Layers

Recently AWS introduced [Layers](https://aws.amazon.com/about-aws/whats-new/2018/11/aws-lambda-now-supports-custom-runtimes-and-layers/) which enables sharing common code between functions and working with large dependencies (such as headless chrome) much easier.

This project example returns a screenshot of page requested via `?address=` query parameter.

![Demo](assets/demo.gif?raw=true "Demo")

### Usage

It is very important to tell NPM to skip installing chromium from `puppeteer` package. To do so, installing dependencies should be done using this command: 

```sh
PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 npm install
```

Without this, your function size would be more than 200MB which is way too much.

After that, you can simply deploy your funciton.

```sh
serverless deploy

curl <DEPLOYED_ENDPOINT>?address=https://google.com
```

or apply this ARN to your function directly: `arn:aws:lambda:us-east-1:085108115628:layer:chrome:6`
