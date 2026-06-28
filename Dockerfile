# --- Stage 1: Build Stage ---
# Using slim instead of alpine to avoid the npm exit handler bug
FROM node:20-slim AS build

WORKDIR /app

COPY package*.json ./

# CRITICAL: Include devDependencies so typescript and vite are installed
RUN npm ci --include=dev

COPY . .

# This will now successfully find 'tsc' and 'vite'
RUN npm run build

# --- Stage 2: Production Stage ---
FROM nginx:stable-alpine

# Vite outputs to 'dist' by default, which matches your config
COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]