# 🛒 BazarDor - বাজার দর

## 📌 About The Project

BazarDor is a modern market price tracking web application built with **Next.js, TypeScript, Tailwind CSS, daisyUI, and Better Auth**. The application helps users explore daily prices of essential products in Bangladesh through a clean, responsive, and user-friendly interface.

The project focuses on practicing modern Next.js concepts, API integration, authentication, dynamic routing, responsive UI development, and product data management.

## 🛠️ Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- daisyUI
- Better Auth
- react-hot-toast

## ✨ Key Features

### 🛍️ Product Management

- Display essential products with their names, prices, and units.
- Show product details and market-wise prices.
- Organize products into different categories.
- Display product information using responsive cards.

### 📊 Market Price Tracking

- Display products with increasing and decreasing prices.
- Show daily price changes with percentage indicators.
- Compare minimum, maximum, and average prices.
- Display a scrolling market price ticker.

### 🗂️ Category & Sorting

- Browse products by category.
- Sort products by price from low to high.
- Sort products by price from high to low.
- Display loading skeletons while fetching data.

### 🔐 Authentication

- User registration and login.
- Authentication using Better Auth.
- Google and GitHub social login when configured.
- Protected product detail pages.
- Toast notifications for authentication success and errors.

### 👤 User Profile

- View user profile information.
- Update user information.
- Manage authentication sessions.

### 📱 Responsive Design

- Responsive layout for mobile, tablet, and desktop.
- Mobile-friendly navigation.
- Modern UI built with Tailwind CSS and daisyUI.
- Custom 404 page for invalid routes.

## 🔌 API Integration

The application uses the BazarDor REST API to fetch product and category information.

**Primary API:**
`https://api.api-store.workers.dev/api/bazardor`

**Alternative API:**
`https://api.abcz.workers.dev/api/bazardor`

### Available Endpoints

- `/products` — Get all products.
- `/products?category=chal` — Filter products by category.
- `/products/1` — Get a single product.
- `/categories` — Get all categories.
- `/categories/chal` — Get a single category.

## 🚀 Getting Started

```bash
git clone YOUR_REPOSITORY_URL
cd bazar-dor
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

## 🌍 Deployment

The application can be deployed using Vercel or another platform that supports Next.js. Configure the required environment variables for Better Auth and the database before deployment.

## 👨‍💻 Developer

**MD. Jenodine Islam Rifat**

Frontend Developer | React.js | Next.js | TypeScript | Tailwind CSS


