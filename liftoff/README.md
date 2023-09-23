This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Shadcn UI

Utilizing ShadCN UI as component library. Run the `shadcn-ui` init command to setup the project:

```bash
npx shadcn-ui@latest init
```

You will be asked a few questions to configure `components.json`:

```bash
Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › app/globals.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / yes
```

Here's how it may be structured in a Next.js app. 

```bash
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── main-nav.tsx
│   ├── page-header.tsx
│   └── ...
├── lib
│   └── utils.ts
├── styles
│   └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json

```

## ShadCN Notes:

Changes to golbal.css
1.     /*Army Yellow Primary*/
   --border: 48 100% 59%;
   --input: 48 100% 59%;
   --ring: 48 100% 59%;
2.     /*Army Light Green Secondary*/
   --secondary: 120 18% 53%;
   --secondary-foreground: 0 0% 100%;
3.     /*Army Yellow Primary*/
   --primary: 48 100% 59%;
   /*Army Black*/
   --primary-foreground: 240 2% 23%;
4.     /*Army Dark Green Background App*/
   --background: 120 8% 20%;
   --foreground: 222.2 84% 4.9%;

Buttons 
1. Outline utilizes bg-background, and not bg-transparent  
2. Outline text does not use text-primary  
3. Outline has no variants 
4. Ghost does not use text-primary

Radio
1. No variants for radio
2. Requires "Label" installation and import as well

Inputs
1. No variants
2. Default input does not have placeholder text
2. Requires "Label" installation and import as well
3. Cursor is default to black when active
4. Text color defaults to black
5. Cannot add adornments with inline classnames (might be a me problem)


