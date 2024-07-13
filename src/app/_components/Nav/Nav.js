"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useAuthContext } from "@/app/contexts/AuthContext";
import { Logo } from "../Logo";
import Loyalty from "../Loyalty/Loyalty";

export const Nav = () => {
  const [burger, setBurger] = useState(false);
  const { signOut, login, currentUser } = useAuthContext();

  const toggleBurger = () => {
    setBurger(!burger);
  };

  return (
    <nav className="lg:px-72 px-4 py-4 flex w-full justify-between items-center fixed z-40 bg-white top-0 left-0">
      <div className="flex gap-4 items-center w-full justify-between">
        <Logo />
        <div className="gap-8 flex items-center">
          <Loyalty />
          <Link href="/wishlist" className="hidden items-center gap-2 md:flex">
            <Icon
              icon="ph:heart-straight-fill"
              width="24"
              height="24"
              style={{ color: "#FF6961" }}
            />
            Wishlist
          </Link>
          {!login ? (
            <Link href="/login" className="md:block hidden">
              Login
            </Link>
          ) : (
            <>
              <Link href="/profile" className="flex gap-4 items-center">
                <Icon
                  className="cursor-pointer"
                  icon="carbon:user-avatar"
                  width="32"
                  height="32"
                  style={{ color: "#000" }}
                />
              </Link>
              <Icon
                className="cursor-pointer"
                icon="carbon:logout"
                width="32"
                height="32"
                style={{ color: "#000" }}
                onClick={signOut}
              />
            </>
          )}
          <Icon
            onClick={toggleBurger}
            className="md:hidden"
            icon="carbon:menu"
            width="24"
            height="24"
            style={{ color: "#000" }}
          />
        </div>
      </div>
      {burger && (
        <div className="w-full bg-white h-screen absolute z-40 top-0 right-0 flex flex-col justify-center items-center">
          <Icon
            className="cursor-pointer absolute top-4 right-4"
            icon="carbon:close"
            onClick={toggleBurger}
            color="black"
            width="40"
            height="40"
          />
          <ul className="flex flex-col gap-2 justify-center items-center">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/wishlist" className="items-center gap-2 flex">
                <Icon
                  icon="ph:heart-straight-fill"
                  width="24"
                  height="24"
                  style={{ color: "#FF6961" }}
                />
                Wishlist
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
