"use client";

import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
} from "@radix-ui/react-menubar";
import React from "react";
import Image from "next/image";
import { themes } from "@/constants";

function Theme() {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger
          className=" focus:bg-light-900 
        data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200"
        >
          <Image
            src={
              mode === "light"
                ? "/assets/icons/sun.svg"
                : "/assets/icons/moon.svg"
            }
            alt={mode === "light" ? "sun" : "moon"}
            className="active-theme "
            width={20}
            height={20}
          />
        </MenubarTrigger>

        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] cursor-pointer rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((item) => (
            <MenubarItem
              className="flex items-center gap-4 px-2.5 py-2 focus:bg-gray-200 dark:focus:bg-dark-400"
              key={item.value}
              onClick={() => {
                setMode(item.value);

                if (item.value !== "system") {
                  localStorage.theme = item.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${
                  mode === item.value && "active-theme"
                } invert-colors`}
              />

              <p
                className={`body-semibold text-light-500 ${
                  mode === item.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

export default Theme;
