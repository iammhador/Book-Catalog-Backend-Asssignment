### Create Order =>

Route: /api/v1/orders/create-order (POST)

Request Headers: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3NDgzOWQ5LTY4YzktNDJjMy1iZmE0LWEyNmE1Nzk5ZTBiNyIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY5MzcxNzU2NSwiZXhwIjoxNzI1MjUzNTY1fQ.H882HgSSt_Wl6XjTr2LZ1DutFKmttYMSlWDvME4JFjU"

Request Body:

```json
{
  "userId": "397957bf-4c4a-4451-b152-4c3d260ed0d1",
  "status": "pending"
}
```

### Order A Book =>

Route: /api/v1/orders/order-book (POST)

Request Headers: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3NDgzOWQ5LTY4YzktNDJjMy1iZmE0LWEyNmE1Nzk5ZTBiNyIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY5MzcxNzU2NSwiZXhwIjoxNzI1MjUzNTY1fQ.H882HgSSt_Wl6XjTr2LZ1DutFKmttYMSlWDvME4JFjU"

Request Body:

```json
{
  "orderId": "cd576c01-3ec3-4c8f-ad22-63296efed17e",
  "bookId": "dc11febd-09d1-41d6-96dc-652b269deb3d",
  "quantity": 2
}
```

#### User

- api/v1/auth/signup (POST)
- api/v1/auth/signIn (POST)
- api/v1/users (GET)
- api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders/order-book (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)
