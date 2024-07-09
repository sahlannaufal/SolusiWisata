# Base image
FROM --platform=linux/amd64 node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]