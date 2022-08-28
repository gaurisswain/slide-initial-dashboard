import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = (props) => {
  const router = useRouter();

  return (
    <>
      <header className="grid grid-cols-[10%_80%_10%] justify-between justify-items-center items-center p-4 shadow-lg">
        <div className="text-2xl text-blue-600 font-bold">Slide</div>
        <div className="w-3/4">
          <i className="bi bi-search mx-2 text-slate-400"></i>
          <input
            className="w-3/4  p-1 focus:outline-none text-slate-600"
            type="text"
            placeholder="Search Order"
          />
        </div>
        <div className="text-xl mx-5 hover:cursor-pointer">
          <i class="bi bi-bell"></i>
        </div>
      </header>
      <div className="grid grid-cols-[15%_85%] w-full">
        <div className="flex flex-col gap-4 m-4 items-start w-full shadow-2xl min-h-screen h-full">
          <div className="flex gap-x-2 text-slate-800 hover:cursor-pointer">
            <i class="bi bi-house"></i>
            <Link href="/">
              <div className={router.pathname === "/" ? "text-blue-500" : ""}>
                Home
              </div>
            </Link>
          </div>

          <div className="flex gap-x-2 text-slate-800 hover:cursor-pointer">
            <i class="bi bi-view-list"></i>
            <Link href="/orders">
              <div
                className={
                  router.pathname.includes("/orders") ? "text-blue-500" : ""
                }
              >
                Orders
              </div>
            </Link>
          </div>

          <div className="flex gap-x-2 text-slate-800 hover:cursor-pointer">
            <i class="bi bi-envelope"></i>
            <Link href="/inventory">
              <div
                className={
                  router.pathname.includes("/inventory") ? "text-blue-500" : ""
                }
              >
                Inventory
              </div>
            </Link>
          </div>

          <div className="flex gap-x-2 text-slate-800 hover:cursor-pointer">
            <i class="bi bi-person"></i>
            <Link href="/customertickets">
              <div
                className={
                  router.pathname.includes("/customertickets")
                    ? "text-blue-500"
                    : ""
                }
              >
                Customer Tickets
              </div>
            </Link>
          </div>
        </div>
        <div className="m-5 p-2">{props.children}</div>
      </div>
    </>
  );
};

export default Header;
