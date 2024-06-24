import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SidebarProvider } from "./context/SidebarContext.jsx";
import { DashboardProvider } from "./context/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DashboardProvider>
  <ThemeProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </ThemeProvider>
  </DashboardProvider>
);
