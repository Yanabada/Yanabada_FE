import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ChakraProvider>
          <RouterProvider router={router} />
        </ChakraProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);
