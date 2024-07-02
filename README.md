![Momentum Tiptap Editor](https://res.cloudinary.com/dpzh9dbnh/image/upload/v1719909574/g1sfir4pvlajk8oqhpie.png)

# Momentum Tiptap Editor

A powerful and customizable rich text editor built with Tiptap, Shadcn, Next.js, emoji-picker-react, and Cloudinary. This editor combines the flexibility of Tiptap with modern UI components, robust framework support, expressive emoji integration, and seamless image management.

## Features

- Rich text editing powered by Tiptap
- Modern UI components from Shadcn
- Next.js framework integration
- Emoji support via emoji-picker-react
- Image management through Cloudinary
- Customizable toolbar and extensions

## Installation

Before using Momentum Tiptap Editor, install the following packages:

```bash
npx create-next-app@latest editor --typescript --tailwind --eslint
cd editor
npm install next-cloudinary next-themes

npm install @tiptap/extension-bubble-menu @tiptap/extension-color @tiptap/extension-image @tiptap/extension-link @tiptap/extension-table @tiptap/extension-table-cell @tiptap/extension-table-header @tiptap/extension-table-row @tiptap/extension-text-align @tiptap/extension-text-style @tiptap/extension-youtube

npm install tiptap-extension-auto-joiner tiptap-extension-global-drag-handle tiptap-extension-resize-image

npx shadcn-ui@latest init
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add toggle
```

## Environment Varaibles

Before using the image upload feature, add the following environment variables. You can get those variables from Cloudiary after signing up:

- NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
- NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
