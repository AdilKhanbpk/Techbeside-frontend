"use client";

import { ToastContainer } from "react-toastify";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import store from "./redux/store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
const persistor = persistStore(store);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const hideHeader = pathname.startsWith("/admin") || pathname === "/home" || pathname === "/confirmation";
  const hideFooter = pathname === "/home" || pathname === "/confirmation";

  const isAdmin = pathname.startsWith("/admin");

  const appContent = (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />

      {!hideHeader && <Header />}

      <main className="flex-1">{children}</main>

      {!hideFooter && <Footer />}
    </>
  );

  return (
    <Provider store={store}>
      {isAdmin ? (
        <PersistGate persistor={persistor}>
          {appContent}
        </PersistGate>
      ) : (
        appContent
      )}
    </Provider>
  );
};

export default Layout;
