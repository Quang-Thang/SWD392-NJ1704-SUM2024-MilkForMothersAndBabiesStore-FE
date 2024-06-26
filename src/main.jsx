import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "../src/features/store.jsx";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
      <ToastContainer />
    </ThemeProvider>
=======

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
>>>>>>> 21cee698bdf498db9170a9bb1a97d0af9538ffa2
  </Provider>
);
