# Image
FROM node
WORKDIR /app

# Install deps
COPY package.json .
COPY package-lock.json .
RUN npm install

# Build
COPY . .

# Run
CMD ["node", "app.js"]

# Expose port
EXPOSE 5000