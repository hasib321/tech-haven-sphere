## Project name :Tech Haven Sphere
#### This projuct express js and typescript api project
[Api Live link](https://tech-haven-sphere.vercel.app/)
# Run the application locally flow the instructions
#### 1.Clone the Repository
```
git clone https://github.com/hasib321/tech-haven-sphere
npm install
```
#### 2.Install Dependencies
```
npm install
```
#### 3.Set Up Environment Variables
Create a .env file in the root directory of project and configure it with the required environment variables. 
```
PORT=3000
DB_CONNECTION_STR=
```
DB_CONNECTION_STR is youer mongodb connection string use
#### 4.Compile TypeScript 
```
npm run build
```
#### 5.Run the Application
```
npm run stert:dev
```
# API documentation
### Bsae Url : ```https://tech-haven-sphere.vercel.app```
## 1. Create a New Product
- Endpoint: /api/products
- Method: POST
- Sample Request Body:
```
  {
  "name": "iPhone 13",
  "description": "Latest Apple smartphone with advanced features.",
  "price": 999,
  "category": "Electronics",
  "tags": ["smartphone", "apple", "iphone", "mobile"],
  "variants": [
    {
      "type": "Color",
      "value": "Midnight"
    },
    {
      "type": "Storage",
      "value": "256GB"
    }
  ],
  "inventory": {
    "quantity": 100,
    "inStock": true
  }
}

```
- Sample Response:
```
{
	"success": true,
	"message": "Product created successfully!",
	"data": {
		"name": "iPhone 13",
		"description": "Latest Apple smartphone with advanced features.",
		"price": 999,
		"category": "Electronics",
		"tags": [
			"smartphone",
			"apple",
			"iphone",
			"mobile"
		],
		"variants": [{
				"type": "Color",
				"value": "Midnight",
				"_id": "66fbb8b1dbaf3298ab81de87"
			},
			{
				"type": "Storage",
				"value": "256GB",
				"_id": "66fbb8b1dbaf3298ab81de88"
			}
		],
		"inventory": {
			"quantity": 100,
			"inStock": true,
			"_id": "66fbb8b1dbaf3298ab81de89"
		},
		"_id": "66fbb8b1dbaf3298ab81de86",
		"__v": 0
	}
}
```
## 2. Retrieve a List of All Products
- Endpoint: /api/products
- Method: GET
- Sample Response:
```
{
    "success": true,
    "message": "Products fetched successfully!",
    "data": [
        {
            "_id": "66f93fb8e0565e8a97f2606b",
            "name": "Sony Xperia 5 III",
            "description": "Sony's compact phone with high-end camera features.",
            "price": 999,
            "category": "Smartphones",
            "tags": [
                "electronics",
                "mobile",
                "sony",
                "android"
            ],
            "variants": [
                {
                    "type": "Color",
                    "value": "Frosted Black",
                    "_id": "66f93fb8e0565e8a97f2606c"
                },
                {
                    "type": "Storage",
                    "value": "256GB",
                    "_id": "66f93fb8e0565e8a97f2606d"
                }
            ],
            "inventory": {
                "quantity": 10,
                "inStock": false,
                "_id": "66f93fb8e0565e8a97f2606e"
            },
            "__v": 0
        },
        {
            "_id": "66f93fb8e0565e8a97f2606f",
            "name": "Huawei P40 Pro",
            "description": "Huawei's flagship with excellent camera and performance.",
            "price": 899,
            "category": "Smartphones",
            "tags": [
                "electronics",
                "mobile",
                "huawei",
                "android"
            ],
            "variants": [
                {
                    "type": "Color",
                    "value": "Silver Frost",
                    "_id": "66f93fb8e0565e8a97f26070"
                },
                {
                    "type": "Storage",
                    "value": "256GB",
                    "_id": "66f93fb8e0565e8a97f26071"
                }
            ],
            "inventory": {
                "quantity": 9,
                "inStock": true,
                "_id": "66f93fb8e0565e8a97f26072"
            },
            "__v": 0
        },
 // Additional products can be added here...
]
}

```
## 3. Retrieve a Specific Product by ID
- Endpoint: /api/products/:productId
- Method: GET
- Sample Response:
```
{
    "success": true,
    "message": "Product fetched successfully!",
    "data":    {
            "_id": "66f93fb8e0565e8a97f2606b",
            "name": "Sony Xperia 5 III",
            "description": "Sony's compact phone with high-end camera features.",
            "price": 999,
            "category": "Smartphones",
            "tags": [
                "electronics",
                "mobile",
                "sony",
                "android"
            ],
            "variants": [
                {
                    "type": "Color",
                    "value": "Frosted Black",
                    "_id": "66f93fb8e0565e8a97f2606c"
                },
                {
                    "type": "Storage",
                    "value": "256GB",
                    "_id": "66f93fb8e0565e8a97f2606d"
                }
            ],
            "inventory": {
                "quantity": 10,
                "inStock": false,
                "_id": "66f93fb8e0565e8a97f2606e"
            },
            "__v": 0
        }
}
```
## 4. Update Product Information
- Endpoint: /api/products/:productId
- Method: PUT
- Sample Request Body:
```
 {
            "name": "Sony Xperia 5 III",
            "description": "Sony's compact phone with high-end camera features.",
            "price": 999,
            "category": "Smartphones",
            "tags": [
                "electronics",
                "mobile",
                "sony",
                "android"
            ],
            "variants": [
                {
                    "type": "Color",
                    "value": "Frosted Black"
                },
                {
                    "type": "Storage",
                    "value": "256GB",
                    "_id": "66f93fb8e0565e8a97f2606d"
                }
            ],
            "inventory": {
                "quantity": 10,
                "inStock": true
            }
        }
```
- Sample Response:
```
{
    "success": true,
    "message": "Product updated successfully!",
    "data": {
        "_id": "66f93fb8e0565e8a97f2606b",
        "name": "Sony Xperia 5 III",
        "description": "Sony's compact phone with high-end camera features.",
        "price": 999,
        "category": "Smartphones",
        "tags": [
            "electronics",
            "mobile",
            "sony",
            "android"
        ],
        "variants": [
            {
                "type": "Color",
                "value": "Frosted Black",
                "_id": "66fbba81dbaf3298ab81decd"
            },
            {
                "type": "Storage",
                "value": "256GB",
                "_id": "66fbba81dbaf3298ab81dece"
            }
        ],
        "inventory": {
            "quantity": 10,
            "inStock": true,
            "_id": "66fbba81dbaf3298ab81decc"
        },
        "__v": 0
    }
}
```
## 5. Delete a Product
- Endpoint: /api/products/:productId
- Method: DELETE
- Sample Response:
 ```
{
    "success": true,
    "message": "Product deleted successfully!",
    "data": null
}
 ```
## 6. Search a product
- Endpoint: /api/products?searchTerm=iphone
- Method: GET
- Sample Response:
```
{
    "success": true,
    "message": "Products matching search term iphone fetched successfully!",
    "data": [
        {
            "_id": "66f97ac8b2b1a58300f211ab",
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": [
                "smartphone",
                "Apple",
                "iOS"
            ],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue",
                    "_id": "66f97ac8b2b1a58300f211ac"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB",
                    "_id": "66f97ac8b2b1a58300f211ad"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true,
                "_id": "66f97ac8b2b1a58300f211ae"
            },
            "__v": 0
        },
        {
            "_id": "66f97bac02f0bf337b1dd098",
            "name": "iPhone 13",
            "description": "A sleek and powerful smartphone with cutting-edge features.",
            "price": 999,
            "category": "Electronics",
            "tags": [
                "smartphone",
                "Apple",
                "iOS"
            ],
            "variants": [
                {
                    "type": "Color",
                    "value": "Midnight Blue",
                    "_id": "66f97bac02f0bf337b1dd099"
                },
                {
                    "type": "Storage Capacity",
                    "value": "256GB",
                    "_id": "66f97bac02f0bf337b1dd09a"
                }
            ],
            "inventory": {
                "quantity": 50,
                "inStock": true,
                "_id": "66f97bac02f0bf337b1dd09b"
            },
            "__v": 0
        }
}
```
## 7. Create a New Order
- Endpoint: /api/orders
- Method: POST
- Sample Request Body:
```
{
    "email": "abc@gmail.com",
    "productId": "66f93fb8e0565e8a97f2606b",
    "price": 999,
    "quantity": 1
}
```
- Sample Response:
```
{
    "success": true,
    "message": "Order created successfully!",
    "data": {
        "email": "abc@gmail.com",
        "productId": "66f93fb8e0565e8a97f2606b",
        "price": 999,
        "quantity": 1,
        "_id": "66fbbf2b84eb16b7c4cf71a4",
        "__v": 0
    }
}
```
## 8. Retrieve All Orders
- Endpoint: /api/orders
- Method: GET
- Sample Response:
```
{
    "success": true,
    "message": "Orders fetched successfully!",
    "data": [
        {
            "_id": "66fb0f9bfb0e906d89634add",
            "email": "abcddd@gmail.com",
            "productId": "66f93fb8e0565e8a97f2606f",
            "price": 999,
            "quantity": 30,
            "__v": 0
        },
        {
            "_id": "66fb0fccfb0e906d89634adf",
            "email": "abcddd@gmail.com",
            "productId": "66f93fb8e0565e8a97f2606f",
            "price": 999,
            "quantity": 30,
            "__v": 0
        }
}
```
## 9. Retrieve Orders by User Email
- Endpoint: /api/orders?email=abc@gmail.com
- Method: GET
- Sample Response:
```
{
    "success": true,
    "message": "Orders fetched successfully for user abc@gmail.com!",
    "data": [
        {
            "_id": "66fb103bd578a5b67bde4e34",
            "email": "abc@gmail.com",
            "productId": "66f93fb8e0565e8a97f2606f",
            "price": 999,
            "quantity": 30,
            "__v": 0
        },
        {
            "_id": "66fb103ed578a5b67bde4e36",
            "email": "abc@gmail.com",
            "productId": "66f93fb8e0565e8a97f2606f",
            "price": 999,
            "quantity": 30,
            "__v": 0
        }
]
}
```
