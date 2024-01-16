import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import theme from "themes/theme";
import "./main.css";
import { Global, ThemeProvider } from "@emotion/react";
import globalStyles from "styles/globalStyles";
import { requestPermission } from "./firebase-messaging-sw.js";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
});

// 커밋용 주석
requestPermission();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <RouterProvider router={router} />
    </ThemeProvider>
  </QueryClientProvider>
);
