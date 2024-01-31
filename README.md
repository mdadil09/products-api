
# Products API

This API provides endpoints to manage products.

## Endpoints:

| #  | Request Method | Function Name        | URL                                              |
|---|-----------------|----------------------|--------------------------------------------------|
| 1 | GET             | `getAllCategories`   | `http://localhost:5578/api/products/categories`  |
| 2 | GET             | `getProductsByCategory`| `http://localhost:5578/api/products/category/:category`|
| 3 | POST            | `addProducts`        | `http://localhost:5578/api/products/add`        |
| 4 | GET             | `getSingleProduct`   | `http://localhost:5578/api/products/:id`        |
| 5 | GET             | `getAllProducts`     | `http://localhost:5578/api/products/`           |
| 6 | GET             | `searchProducts`     | `http://localhost:5578/api/products/search/:key`|
| 7 | PATCH           | `updateProduct`      | `http://localhost:5578/api/products/update/:id`|
| 8 | DELETE          | `deleteProduct`      | `http://localhost:5578/api/products/delete/:id`|

