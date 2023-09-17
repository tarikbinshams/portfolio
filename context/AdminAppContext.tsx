import { createContext, useContext, useState } from "react";
// Creating the user context
const AdminAppContext = createContext<any>({});

// Making the function which will wrap the whole app using Context Provider
export default function AdminAppStore({ children }: any) {

  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <AdminAppContext.Provider value={{ isExpanded, setIsExpanded, mobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </AdminAppContext.Provider>
  );
}

export function useAdminAppContext() {
  return useContext(AdminAppContext);
}