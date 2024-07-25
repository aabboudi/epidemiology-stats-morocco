import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { ThemeSwitch } from "./theme-switch"

export default function Navbar() {
  return(
      <div className="flex w-full fixed top-0 items-center justify-between px-4 py-2 bg-white dark:bg-zinc-800">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
        {/* <MountainIcon className="h-6 w-6" /> */}
        <span className="text-lg font-semibold">MAYA</span>
        </Link>
        <div className="hidden lg:flex gap-4">
        <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          Partners
        </Link>
        <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          Projects
        </Link>
        <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          Coming Soon
        </Link>
        <Link href="#" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
          FAQ
        </Link>
        </div>
        <div>
          <div className="hidden lg:block"><ThemeSwitch /></div>
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
            <ThemeSwitch />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

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
