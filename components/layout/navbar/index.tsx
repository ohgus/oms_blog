import { ModeToggle } from '@/components/mode-toggle';
import ToHome from './ToHome';
import MobileNav from '../mobileNav';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full">
      <ToHome />
      <div className="flex items-center space-x-2">
        <div className="hidden sm:block">
          <div className="flex items-center justify-between gap-x-6 mr-2">
            <Link href="/pages/1">
              <h2 className="font-semibold">Posts</h2>
            </Link>
            <Link href="/about">
              <h2 className="font-bold">About</h2>
            </Link>
          </div>
        </div>
        <ModeToggle />
        <MobileNav />
      </div>
    </nav>
  );
}
