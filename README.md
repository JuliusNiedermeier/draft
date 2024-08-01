# Next.js Draft Mode Showcase

This is a minimal Next.js project demonstrating the use of draft mode. When draft mode is enabled, all pages render dynamically, even if they are normally statically generated.

## How to Run

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Create a prodcution build:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

Then run the application:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

Open http://localhost:3000 in your browser to see the application in action.

## What to expect

When not in draft mode, a timestamp generated at build time is served.
When draft mode is enabled, the normally statically rendered page is dynamically rendered on each request.
