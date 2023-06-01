FROM node:18

WORKDIR /usr

COPY . .
RUN npm install --production
RUN npm run build
CMD ["npm", "start"]