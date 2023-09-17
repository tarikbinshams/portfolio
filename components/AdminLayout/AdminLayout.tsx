import React, { useEffect } from "react";
import AdminSideMenu from "./SideMenu";
import Header from "./Header";
import { isLoggedIn } from "@helpers/authHelper";
import { useRouter } from "next/router";
import { useAdminAppContext } from "../../context/AdminAppContext";

export default function AdminLayout({ children }: { children: any }) {
  const router = useRouter();
  const [isLogged, setIsLogged] = React.useState(false);
  const { isExpanded } = useAdminAppContext();
  useEffect(() => {
    const logged = isLoggedIn();
    if (logged) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
      router.push("/auth/login");
    }
  }, [router]);

  return (
    <>
      {
        isLogged &&
        <div className="t-flex">
          <div className="t-z-20">
            <AdminSideMenu />
          </div>
          <div className={`${isExpanded ? "lg:t-ml-[150px]" : "lg:t-ml-[70px]" } t-z-10`}>
            <Header />
            <main className="t-mt-[70px] lg:t-pl-[30px] t-w-[100vw] lg:t-w-full">{children}</main>
          </div>
        </div>
      }
    </>
  );
}
