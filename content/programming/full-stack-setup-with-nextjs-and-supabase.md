---
title: "Full Stack Setup With Next.js and Supabase"
summary: "A documentation of the process to setup a full stack application with Next.js and Supabase. As a bonus, I will include setting up Shadcn UI and enabling darkmode."
publishedAt: "2025-12-01T05:08:24.131242+00:00"
category: "programming"
---

### Next.js

We'll start by installing Next.js. At the time of this writing, the latest Next.js version is v16.0.5. Copy and paste the code below into your terminal to install it:

    npx create-next-app@latest

You should accept the sensible defaults:

-   **Enable TypeScript** (enable it even if you won't use TypeScript—it doesn't prevent you from using JavaScript)
-   **Enable ESLint**
-   **React Compiler** is your choice
-   **Tailwind CSS** is compulsory!
-   Placing your code inside a `src` folder is also highly recommended
-   **App Router** is highly recommended
-   **Yes** for `import alias` as well

Install!

After the installation completes, open your app's folder in your code editor.

Go to `next.config.ts` and enable `cacheComponents`:

    import type { NextConfig } from "next";

    const nextConfig: NextConfig = {
      /* config options here */
      /* Add this line */
      cacheComponents: true
    };

    export default nextConfig;

You can learn more about `cacheComponents` [here](https://nextjs.org/docs/app/getting-started/cache-components "https://nextjs.org/docs/app/getting-started/cache-components").

Another thing you might want to do is clear your `global.css` file (but do not delete it!).

### Supabase

// to be continued
