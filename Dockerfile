FROM node:18-alpine
WORKDIR /app

# Copy app files into container
COPY . /app

# Install node packages
RUN yarn

CMD yarn dev
EXPOSE 4050