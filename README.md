This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# SwiftSail 
SwiftSail is simple ecommerce app built using Next.js 14 . Styled with TailwindCSS. It uses formik and yup for form validation on checkout page. Products are fetched from custom supabase database which is edited using **[SwiftSailCMS](https://github.com/maricd7/SwiftSailCMS)**. 
It has all the core ecommerce features such as all products page(home), cart,navigation,product page, checkout page etc. Cart and all its methods are  built using Context react hook (displaying cart products, removing from cart,adding products to cart). Checkout page has form validation built with [Formik](https://formik.org/) and [yup](https://www.npmjs.com/package/yup) which is used for defining schema validation. 
