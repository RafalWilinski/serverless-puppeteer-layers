#!/bin/bash

set -e

rm -fr chrome-aws-lambda
git clone --depth=1 https://github.com/alixaxel/chrome-aws-lambda.git && \
cd chrome-aws-lambda && \
brotli --decompress --rm bin/chromium-*.br && \
npm pack && \
mkdir -p nodejs/node_modules/chrome-aws-lambda/ && \
tar --directory nodejs/node_modules/chrome-aws-lambda/ --extract --file chrome-aws-lambda-*.tgz --strip-components=1 && \
rm chrome-aws-lambda-*.tgz

find bin -name "chromium-*" -exec mv {} ../layer/headless_shell \;
chmod 755 ../layer/headless_shell

echo 'Layer created successfully!'
