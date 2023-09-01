<h1 align="center">SacHacks 2022 Landing Applcation</h1>

<p align="center">
    SacHacks 2022 landing web application built with <strong>NextJS, TypeScript, and TailwindCSS</strong> as took-kits along with developmental tools such as 
    <strong>Git, Github, Yarn, Husky(*NOTYET?), and Link-staged(*NOTYET?)</strong>
</p>

### Original Development By

<ul>
    <li>
        <a href="https://github.com/haneulab">Haneul Choi</a>
    </li>
        <li>
        <a href="https://www.linkedin.com/in/mukta-jaiswal/">Mukta Jaiswal</a>
    </li>
</ul>

### Further Development By
<ul>
    <li>
        <a href="https://www.linkedin.com/in/adityaaravi6">Adityaa Ravi</a>
    </li>
        <li>
        <a href="https://www.linkedin.com/in/anirudhvee/">Anirudh Venkatachalam</a>
    </li>
</ul>

### Technical Guidelines

From the root directory, please comprehend the following guidelines, to make modifications or redesigning processes.

For using proper `types` is required in this application, any `type` related content should have been declared within `src/<dirname>.d.ts` with keyword `declare type ...`. If you need to modify (add, remove, update) such contents, it is recommended that you first statically declare them in `src/<dirname>.d.ts` that the file you modify lives in.

- **`pages`** : The files here match the route that the application will be presented in production. For example `pages/index.tsx` mirrors the `https://example.com/` route whereas `pages/api/someEndPoint.ts` mirrors the **API** end-point of at `https://example.com/api/someEndPoint`. Any route that is not within `pages/api` directory should be user interface routes corresponding its filename in production. \_In our application as for 2022, we did not have any api end-point necessary. So there is no `pages/api` defined.

- **`styles`** : This application uses [TailwindCSS](https://tailwindcss.com), a utility CSS framework. The only file that needs to be declared & imported within our NextJS application is `styles/tailwind.css`. Thus, if you are NOT going to use the tailwind framework anymore, you can simply remove that `import style/tailwind.css` in the `pages/_app.tsx` file as well as deleting the `styles/tailwind.css` file. `tailwind.config.js` file is the configuration file used for our application. If you are going to continue using the same style as made by us, you should NOT remove or update the content that is already there. For more information about configuration specs, please go to TailwindCSS documentation page. Also google font APIs has been integrated. You can find its import declaration & usage within `styles/font.css`.

- **`src`** : The `src` directory contains all the necessary `react` and `typescript` utilities for the applications such as `components`, `data`, and `utils`.
  - **`src/components`** : component gateway directory that contains React component types & React components. Please make sure that you keep the fileanme made here end with `.tsx` extension and NOT `.ts`. This will cause syntactic error caught by both `eslint` and configurations seed on `tsconfig.json` file in the root directory.
  - **`src/data`** : is gateway for static data used throughout the application such as routes, links, and displayable text contents. -**`src/utils`** : is where the utility functions for react components live in. Please refer to their declaration files in order to fully know their usage. `src/utils/utils.d.ts`

#### Start Development Server

Depending on the package type you use `yarn` or `npm`, run the following command to start development server on your local machine (after you properly clone & install them)

```shell
# in the root directory
npm run dev
# or using yarn
yarn dev
```

### Preview Production Server

You can also view the production server by running the following command

```shell
npm start
# or using yarn
yarn start
```

### Build Process

After the modifications & updates made, you can build the project by running the following

```shell
npm run build
# or using yarn
yarn build
```

### In Production

This application in production uses a bundled static JavaScript file built within `./.next` directory which is not published in the Github repository. You need an invitation to this repository in order for you to copy exact bundles, but you can always clone & rebuild using `git clone ...` -> `cd ./<repo-name>` -> `yarn install` or `npm install` -> `yarn build` or `npm run build`.

It is currently hosted in [Vercel](https://vercel.com). If you are going to continue using React based framework like NextJs, I recommend that you stick with host organizations like `Vercel` or `Netlify` for your front-end application as it is free, fast, and automatic deployable using CLIs at build time.

The original domain access is not on us. We are just using their name-server. Thus you should contact the original domain purchaser for neccessary cases.
