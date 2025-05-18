# 🧼 CLEAN — Frontend
🌐 Description
This interface allows users to:
Explore types of cleaning services
Choose a service and a cleaner
Book a date and time
Enjoy a simple and fast UX

🚀 Tech Stack Used
React.js + Vite
TypeScript
Redux Toolkit — state management
React Router DOM — routing
Axios — HTTP requests to the backend
FullCalendar, React Calendar/Datepicker — date selection
React Select / Icons — user-friendly UI components



src/
├── assets/ #This folder contains static assets such as SVG files used throughout the application.
├	
├── components/ This folder contains the main **reusable UI components** that make up the interactive parts of the user interface.
├	├──BookWindow.tsx # Displays available cleaners for a selected date.
├	├──Calendar.tsx #  An interactive calendar component built with `FullCalendar`.
├	├──NavBar.tsx # The top navigation bar component.
├── hooks/ # This folder contains **custom typed hooks** that simplify working with Redux in a TypeScript environment.
├	├──hooks.ts #provides strongly typed custom hooks for accessing and dispatching Redux state in a TypeScript-safe way.
├── pages/ # This folder contains the main page components of the application, each representing a different route in the app.
├	├──BookPage.tsx # This is the booking page where users can select a cleaning service type and a date from the calendar.
├	├──Home.tsx # This is the landing page of the application that introduces the cleaning service.
├	├──InfoPage.tsx # This page presents detailed descriptions of different cleaning service types.
├	├──LoginPage.tsx # A placeholder for the login or sign-up functionality.
├── routes/ # This folder contains the route configuration for the application using react-router-dom
├	├──PublicRoute.tsx # Defines all the publicly accessible routes in the app. It includes paths for the home page, service info, booking page, and login page. 
├── store/ # This folder contains the Redux Toolkit setup for managing application state, including slices and store configuration.
├	├──clinnersSlice.ts # Defines a Redux slice for managing cleaners (clinners) data.
├	├	# Includes a Clinner interface to describe each cleaner's structure.
├	├	# Implements an asynchronous thunk fetchClinnersByType to fetch cleaners from the backend API based on the selected cleaning type.
├	├	# Manages three states (idle, loading, succeeded, failed) to track fetch status.
├	├	# Uses extraReducers to handle the thunk’s lifecycle actions (pending, fulfilled, rejected).
├	├──store.ts # Initializes the Redux store using configureStore from Redux Toolkit.
├	├	# Combines reducers (currently only clinners) into a root reducer.
├	├	# Exports the RootState and AppDispatch types for typed usage with useSelector and useDispatch hooks.
├── ui/ # This folder contains CSS Modules used for styling React components with locally scoped styles.
	├──book.module.css # Provides the layout and design for the booking page, ensuring a clean and responsive user interface.
	├──home.module.css # Defines the layout and visual style for the home (landing) page, creating a welcoming and visually appealing first impression for users.
	├──info.module.css # Defines the styling for the informational page, focusing on content layout, responsive design, and visual clarity using clean typography and structured sections.
	├──navBar.module.css # Provides styles for the top navigation bar used on the homepage and other views.


## ⚙️ Scripts
npm install        # Install dependencies
npm run dev        # Start local development server
npm run build      # Build for production
npm run preview    # Preview production build

🌍 Deployment
Frontend is deployed at: render.com
https://frontend-qkly.onrender.com/

👤 Author
Crafted by Illia Andrienko

 
	




# React + TypeScript + Vite




This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```


