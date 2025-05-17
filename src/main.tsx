// Импорт строгого режима React — помогает выявлять потенциальные проблемы в приложении
// Import React StrictMode – helps identify potential issues in an application
import { StrictMode } from "react";

// Импорт метода для создания корня приложения
// Import the method to create a root for the application
import { createRoot } from "react-dom/client";

// Глобальные стили
// Global styles
import "./index.css";

// Основной компонент приложения
// Main application component
import App from "./App.tsx";

// Подключение маршрутизации
// Connecting the routing system
import { BrowserRouter } from "react-router-dom";

// Импорт Redux Provider и хранилища
// Importing Redux Provider and the store
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

// Rendering the application
createRoot(document.getElementById("root")!).render(
  // Redux Provider makes the global store available to all components
  <Provider store={store}>
    {/* BrowserRouter позволяет использовать маршруты в приложении */}
    {/* BrowserRouter enables routing in the application */}
    <BrowserRouter>

       {/* StrictMode помогает отлавливать потенциальные ошибки и предупреждения */}
      {/* StrictMode helps catch potential bugs and warnings */}
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
