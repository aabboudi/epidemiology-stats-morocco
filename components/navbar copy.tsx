"use client"

import * as React from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { ThemeSwitch } from "./theme-switch"
import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu"

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Navbar() {
  return (
    <div className="flex w-full fixed top-0 items-center justify-between px-4 py-2 bg-white dark:bg-zinc-800">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span className="text-lg font-semibold">MAYA</span>
      </Link>
      <div className="hidden lg:flex gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                  <ListItem href="#" title="Our Mission">Learn about our mission and values.</ListItem>
                  <ListItem href="#" title="Team">Meet our team.</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                  <ListItem href="#" title="Current Partners">Our current partners.</ListItem>
                  <ListItem href="#" title="Become a Partner">How to partner with us.</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                  <ListItem href="#" title="Ongoing Projects">See our ongoing projects.</ListItem>
                  <ListItem href="#" title="Past Projects">Review our past projects.</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Coming Soon</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                  <ListItem href="#" title="Upcoming Features">Check out what's coming next.</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>FAQ</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-1">
                  <ListItem href="#" title="General Questions">Find answers to common questions.</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <ThemeSwitch />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid w-[200px] p-4">
              <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Services
              </Link>
              <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Portfolio
              </Link>
              <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Contact
              </Link>
              {/* Small screen navigation items */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6">
                    <ListItem href="#" title="Our Mission">Learn about our mission and values.</ListItem>
                    <ListItem href="#" title="Team">Meet our team.</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6">
                    <ListItem href="#" title="Current Partners">Our current partners.</ListItem>
                    <ListItem href="#" title="Become a Partner">How to partner with us.</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6">
                    <ListItem href="#" title="Ongoing Projects">See our ongoing projects.</ListItem>
                    <ListItem href="#" title="Past Projects">Review our past projects.</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Coming Soon</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6">
                    <ListItem href="#" title="Upcoming Features">Check out what's coming next.</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>FAQ</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6">
                    <ListItem href="#" title="General Questions">Find answers to common questions.</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  className?: string
  title: string
  children: React.ReactNode
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
