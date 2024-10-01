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

  ## 1. Create a New Product
- Endpoint: /api/products
- Method: POST
- Sample Request Body:
  ```

  ```
- Sample Response:
  ```

  ```
