This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Installation
### To run the project locally, follow these steps:
1. Clone the repository from GitHub.
2. Navigate to the project directory.
3. Install dependencies using npm or yarn.
4. Set up environment variables for Supabase credentials. (contact my email for env).
5. Run the development server.

# Database Structure
### Customers Table

| Field       | Type        | Description           |
|-------------|-------------|-----------------------|
| id          | UUID        | Unique identifier     |
| name        | Text        | Name                  |
| email       | Text        | Email address         |
| city        | Text        | City                  |
| Postal Code | Text        | Users Postal Code     |
| Phone number| Text        | Phone number          |
| Address     | Text        | Users address         |
| created_at  | TIMESTAMP   | Creation timestamp    |
| updated_at  | TIMESTAMP   | Last update timestamp |

### Products Table
| Field       | Type        | Description           |
|-------------|-------------|-----------------------|
| id          | UUID        | Unique identifier     |
| name        | Text        | Product name          |
| description | Text        | Product description   |
| price       | Text        | Product price         |
| images      | Text        | Product image         |
| category    | Text        | Product category      |
| status      | bool        | Product category      |
| stock       | numeric     | Product stock status  |
| sold        | numeric     | How many are sold     |
| discount    | numeric     | Discount in %         |

### Orders Table
| Field       | Type        | Description           |
|-------------|-------------|-----------------------|
| id          | UUID        | Unique identifier     |
| customer_id | UUID        | Customer Id           |
| value       | numeric     | Total order value     |
| created_at  | TIMESTAMP   | Creation timestamp    |

### Order Product Table
| Field       | Type        | Description           |
|-------------|-------------|-----------------------|
| id          | UUID        | Unique identifier     |
| order_id    | UUID        | Order  Id             |
| product_id  | UUID        | Product  Id           |
| quantity    | Numeric     | How many are ordered  |


# Project Structure (App directory)
```plaintext
.app
├── _components/         # React components
├── categories/          # Page
├── checkout/            # Page
├── login/               # Page
├── register/            # Page
├── profile/             # Page
├── products/            # Page
├── wishlist/            # Page
├── contexts/            # useContext Hook file
├── supabase.js          # Supabase config file
├── layout.js            # Shared components layout
├── page.js              # Home Page
├── favicon.ico          # Favicon
```
# Introduction to SwiftSail
SwiftSail is a comprehensive ecommerce platform  with features including cart management, checkout process, product browsing, category filtering, search functionality, user authentication, and wishlist management. Its kitted with its own custom built CMS (SwiftSailCMS) for fast and easy content management and tracking.

# Technologies Used
### Next.js: 
A React framework for building server-side rendered and statically generated applications.

### Supabase: 
An open-source Firebase alternative. It provides a suite of tools for building scalable applications with built-in authentication, real-time database, and more.

### Tailwind CSS: 
A utility-first CSS framework for rapidly building custom designs.

# Features

### Cart
The cart component (toggled with cart icon gadget) allows users to add, remove, or update the quantity of items.

### Checkout Page
The checkout page facilitates the order process. Users can review their items, enter shipping and payment information, and place orders.

### Product Page
Product pages display detailed information about individual products. Users can view product images, descriptions, prices, and add them to their cart.

### Categories
Products are organized into categories for easy browsing. Users can filter products based on categories to find what they're looking for more efficiently.

### Search
The search functionality enables users to search for products by keywords. Search results are displayed dynamically as users type.

### Authentication
The authentication system allows users to register new accounts or log in to existing ones. Authenticated users can access their order history, view wishlisted items and more.

### Wishlist
Users can add products to their wishlist for future reference. Wishlist items can be easily managed, including adding to cart or removing from the wishlist.

# Contact
For questions or support, contact : dejanmaric259@gmail.com

