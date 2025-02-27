# NestJS Nats Microservices Architecture

This project demonstrates a microservices architecture using NestJS, Nats for message transport, and MongoDB for data storage.

## Architecture

- **API Gateway**: HTTP entry point that routes requests to microservices
- **Microservices**:
  - Users Service: Manages user data
  - Products Service: Manages product data
  - Orders Service: Manages order data
- **Message Broker**: Nats for inter-service communication
- **Databases**: Each microservice has its own MongoDB instance


## Install Docker and Colima
Note: Podman is still an issue on macOS, so I decided to use docker (not desktop) with Colima

- brew install docker docker-compose colima
- colima start will create a VM on MacOS on which docker can then run out of the box.


## Running the Application

```bash
# Start all services with Docker Compose
docker-compose up

# The API will be available at http://localhost:3000
```

## API Endpoints

### Users
- `POST /users` - Create a new user
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID

### Products
- `POST /products` - Create a new product
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID

### Orders
- `POST /orders` - Create a new order
- `GET /orders` - Get all orders
- `GET /orders/:id` - Get order by ID

## Development

```bash
# Install dependencies
npm install

# Start development server for a specific service
npm run start:dev api-gateway
npm run start:dev users-service
npm run start:dev products-service
npm run start:dev orders-service
```