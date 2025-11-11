FROM node:22-alpine AS builder

WORKDIR /app

COPY frontend ./frontend

WORKDIR /app/frontend

RUN npm install
RUN npm run build 

FROM node:22-alpine 

WORKDIR /app
COPY backend .
COPY --from=builder /app/frontend/dist ./dist-frontend

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]