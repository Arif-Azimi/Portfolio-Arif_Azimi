# Arif — Software Developer Portfolio (React + Vite + TypeScript)

## Project Structure

```
arif-portfolio/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    └── components/
        ├── Navbar.tsx
        ├── Hero.tsx          ← Contains the 3D Robot
        ├── Sections.tsx      ← Services, Skills, Projects, Contact
        └── ui/
            ├── SplineScene.tsx   ← 3D Robot loader component
            └── Spotlight.tsx     ← Light effect behind the robot
```

---

## How to Run (Step by Step)

### 1. Open the folder in VS Code
- Extract the zip
- Open VS Code → File → Open Folder → select `arif-portfolio`

### 2. Open the terminal in VS Code
- Press **Ctrl + `** (backtick) to open the terminal

### 3. Install dependencies
```bash
npm install
```

### 4. Start the dev server
```bash
npm run dev
```

### 5. Open in browser
Go to → **http://localhost:5173**

---

## Customise Your Info

| What | File | Where |
|---|---|---|
| Your name | `src/components/Hero.tsx` | Find `Arif` in the `<span>` |
| Email | `src/components/Sections.tsx` | Find `arif@email.com` |
| GitHub / LinkedIn | `src/components/Sections.tsx` | Contact section links |
| Skills list | `src/components/Sections.tsx` | `Skills` component array |
| Projects | `src/components/Sections.tsx` | `projects` array |
| Services | `src/components/Sections.tsx` | `items` array |
| Robot scene | `src/components/Hero.tsx` | The `scene=` prop on `<SplineScene>` |

---

## Change the 3D Robot Scene

In `src/components/Hero.tsx`, find this line:

```tsx
<SplineScene
  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
  className="w-full h-full"
/>
```

Replace the `scene` URL with any Spline scene URL from [spline.design](https://spline.design).

---

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy to Vercel, Netlify, etc.
