import Link from "next/link";
import * as React from "react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import ThemeSwitcher from "./theme-switcher";
import { navSections } from "@/lib/items";


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li className="w-full">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex items-start gap-3 w-full select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {icon && <span className="text-xl">{icon}</span>}
          <div className="space-y-1">
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Navbar = () => {
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="inline-flex items-center mr-8"
          >
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide">
              Ruachost
            </span>
          </Link>
          <NavigationMenu>
            <ul className="items-center hidden space-x-8 lg:flex">
              <li>
                <Link
                  href="/"
                  className="font-medium text-md transition-colors duration-200 hover:text-accent-foreground"
                >
                  Domains
                </Link>
              </li>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-md">Hosting & Websites</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[900px] p-6">
                    <div className="grid grid-cols-3 gap-8">
                      <div>
                        <h3 className="font-bold mb-3 text-sm">HOSTING</h3>
                        <ul className="space-y-2">
                          {navSections.hosting.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                              icon={item.icon}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold mb-3 text-sm">SERVERS</h3>
                        <ul className="space-y-2">
                          {navSections.servers.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                              icon={item.icon}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-bold mb-3 text-sm">WEBSITES</h3>
                        <ul className="space-y-2">
                          {navSections.websites.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                              icon={item.icon}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </ul>
          </NavigationMenu>
        </div>
        <ul className="items-center hidden space-x-4 lg:flex">
          <li>
            <ThemeSwitcher />
          </li>
          <li>
            <Link href="/clients">
              <Button variant="link">Sign in</Button>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
