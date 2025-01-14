# Reactify TS: Mastering Advanced TypeScript in React (alx-project-0x03-setup)

This project demonstrates advanced TypeScript usage within a React application built with Next.js.  It covers several key concepts and best practices:

## Features

* **Shared Layout:** Implements a reusable layout component for consistent header and footer across multiple pages, adhering to the DRY (Don't Repeat Yourself) principle.
* **Custom Styling:** Integrates Google Fonts and leverages Tailwind CSS for efficient and maintainable styling.
* **Imperative Routing:** Utilizes the `useRouter` hook from `next/router` for dynamic navigation between mini-applications within the project.
* **Optimized Project Structure:** Organizes code into well-defined directories for improved maintainability and scalability.
* **Custom 404 Error Handling:** Implements a custom 404 error page for a better user experience.
* **TypeScript Interfaces:**  Leverages TypeScript interfaces for improved type safety and code clarity.

## Getting Started

1. **Clone the repository:**
```bash
git clone https://github.com/yuslove1/alx-project-0x03-setup.git
```
2. **Install dependencies:**
```bash
cd alx-project-0x03-setup
npm install
```
3. **Run the development server:**
```bash
npm run dev
```
Open http://localhost:3000 with your browser to see the result.

## Project Structure

alx-project-0x03-setup/
├── components/          *Reusable React components*
│   ├── common/         *Common components (e.g., Button, Card)*
│   │   └── ...
│   └── layout/         *Layout components (e.g., Header, Footer)*
│       └── ...
├── interfaces/          *TypeScript interfaces for type safety*
│   └── index.ts       
├── pages/              *Next.js pages and routes*
│   ├── _app.tsx        *Custom App component*
│   ├── index.tsx       *Home page*
│   ├── 404.tsx        *Custom 404 page*
│   └── ...            *Other pages (e.g., /users, /posts)*
├── styles/             *Global stylesheets*
│   └── globals.css
├── public/              *Public assets*
│   └── ...
├── package.json
├── next.config.js      *Next.js configuration*
└── ...                 *Other project files*


## Technologies Used
**Next.js:** React framework for server-side rendering and static site generation.
**TypeScript:** Superset of JavaScript that adds static typing.
**Tailwind CSS:** Utility-first CSS framework for rapid UI development.
**React:** JavaScript library for building user interfaces.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
MIT license