# Kittokinz Portfolio

Một website portfolio cá nhân hiện đại, cao cấp với thiết kế glassmorphism, hiệu ứng động và trải nghiệm người dùng mượt mà.

## ✨ Tính năng nổi bật

- **🌙 Dark/Light Mode Toggle**: Chuyển đổi chế độ sáng/tối với animation mượt mà
- **👤 Profile Avatars**: Hình đại diện với glow effect ở navbar, about section và footer
- **🎨 Dynamic Theming**: Text colors tự động thay đổi theo chế độ sáng/tối
- **Particle Background**: Hiệu ứng particles động với kết nối tương tác
- **Typing Animation**: Hiệu ứng gõ chữ cho tiêu đề hero
- **3D Tilt Cards**: Project cards xoay 3D khi hover
- **Stagger Animations**: Skills xuất hiện theo thứ tự với hiệu ứng stagger
- **Floating Elements**: Các phần tử trong About section float nhẹ nhàng
- **Custom Cursor**: Con trỏ tùy chỉnh tương tác với hover effects
- **Smooth Scrolling**: Cuộn mượt mà giữa các section
- **Glassmorphism**: Thiết kế kính mờ hiện đại

## Công nghệ sử dụng

- React 19 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- React Context (theme management)
- Canvas API (particle background)
- CSS Variables (dynamic theming)

## Cài đặt và chạy

```bash
npm install
npm run dev
```

## Build và Deploy

```bash
npm run build
npm run deploy  # Deploy lên GitHub Pages
```

## Demo

Truy cập: https://kietkag5-jpg.github.io/kittokinzzz

## Cấu trúc dự án

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
```

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
