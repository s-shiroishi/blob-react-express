FROM node:14

WORKDIR /backend

COPY ./package*.json ./
COPY ./tsconfig.json ./
RUN npm i 

COPY ./src ./src

CMD [ "npm", "run", "dev" ]
