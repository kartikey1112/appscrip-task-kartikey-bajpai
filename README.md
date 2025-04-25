# Appscrip Task – Kartikey Bajpai
# Deployed URL:https://appscrip-kartikey-bajpai.netlify.app/
A responsive, SSR-ready product listing page built with Next.js for Appscrip.

## Project Overview

This project is a demonstration of building a modern e-commerce Product Listing Page (PLP) using Next.js. It features:

*   **Product Display:** Fetches and displays product data from the [FakeStore API](https://fakestoreapi.com/).
*   **Server-Side Rendering (SSR):** Initial product data is fetched on the server for improved performance and SEO, with client-side hydration for interactivity. (Note: Current implementation uses client-side fetching via `useEffect` in `page.js`, but leverages Next.js API route caching).
*   **Responsive Design:** Adapts layout for desktop and mobile views, including a mobile hamburger menu for filters.
*   **Filtering & Sorting:** Client-side filtering options (Categories, Ideal For, Occasion, etc.) and sorting functionality (Recommended, Price, etc.).
*   **JWT Authentication:** Implements login/logout using the FakeStore API's `/auth/login` endpoint. JWT tokens are stored in `localStorage`.
*   **Conditional Rendering:** Product details (name, price, rating) are hidden for logged-out users, showing only the image and a "Sign in" prompt. Logged-in users see full details.
*   **Custom Fonts:** Uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load the local font "Simplo Norm" (via `--font-simplo-norm` CSS variable) and the Google Font "Inter" (via `--font-inter`) as a fallback.

## Getting Started

First, ensure you have Node.js and npm (or yarn/pnpm/bun) installed.

Then, run the development server:

```bash
npm install # Install dependencies first if you haven't already
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

### Login Functionality

*   Click the profile icon in the header to access the Login/Logout dropdown.
*   Use the demo credentials provided in the login modal (Username: `johnd`, Password: `m38rmF$`) to log in via the FakeStore API.
*   Observe how product cards display full details when logged in and hide them when logged out.

## Learn More

To learn more about Next.js, take a look at the following resources:

*   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
*   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
