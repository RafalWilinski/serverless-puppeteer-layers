#!/bin/bash

set -e

rm -fr chrome-aws-lambda
git clone --depth=1 https://github.com/alixaxel/chrome-aws-lambda.git && \
cd chrome-aws-lambda && \
make ../layer/chrome.zip
echo 'Layer created successfully!'
