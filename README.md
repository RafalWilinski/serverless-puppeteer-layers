# Serverless Puppeteer using AWS Lambda Layers

<p>
  <img src="https://img.shields.io/badge/version-1.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/rafalwilinski">
    <img alt="Twitter: rafalwilinski" src="https://img.shields.io/twitter/follow/rafalwilinski.svg?style=social" target="_blank" />
  </a>
</p>

> Recently AWS introduced [Layers](https://aws.amazon.com/about-aws/whats-new/2018/11/aws-lambda-now-supports-custom-runtimes-and-layers/) which enables sharing common code between functions and working with large dependencies (such as headless chrome) much easier.

This project example returns a screenshot of page requested via `?address=` query parameter.

![Demo](assets/demo.gif?raw=true 'Demo')

### Usage

_Note_: this project uses `puppeteer-core` package rather than the standard `puppeteer` one. This is done in order to keep the function size in check - without this, your function size would be more than 200MB which is way too much. The difference between the two is [explained here](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteer-vs-puppeteer-core).

Install the project dependencies with `npm install` or `yarn`.

After that, you can simply deploy your function.

```sh
sls deploy

curl <DEPLOYED_ENDPOINT>?address=https://google.com
```

or apply this ARN to your function directly: `arn:aws:lambda:us-east-1:085108115628:layer:chrome:6`

### Bundling latest Chromium on your own

Prerequisites:

- `brotli`

```sh
./download-latest.sh
```

Credits for this solution go to [San Kumar](https://github.com/san-kumar)

### Author

👤 **Rafal Wilinski**

- Twitter: [@rafalwilinski](https://twitter.com/rafalwilinski)
- Github: [@RafalWilinski](https://github.com/RafalWilinski)

### Show your support

Give a ⭐️ if this project helped you!
