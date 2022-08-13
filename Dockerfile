# GCP Clound Run 배포
FROM node:12.18.1-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm install --production
COPY . .
COPY .env.prod .env
RUN npm run build

ENV NEXT_PUBLIC_NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# RUN sh scripts/generate-sitemap.sh
USER nextjs
EXPOSE 8080

CMD ["npm", "run", "start:production"]