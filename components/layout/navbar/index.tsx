import { ModeToggle } from '@/components/mode-toggle';
import PostsLogo from '@/components/icons/postsLogo';
import AboutLogo from '@/components/icons/aboutLogo';
import ToHome from './ToHome';
import MobileNav from '../mobileNav';

export default function Navbar() {
  return (
    <div className="flex flex-col justify-between">
      <nav className="flex items-center justify-between py-10">
        <ToHome />
        <div className="flex items-center">
          <div className="hidden sm:block">
            <div className="flex items-center justify-between gap-y-1 mr-2">
              <PostsLogo />
              <AboutLogo />
            </div>
          </div>
          <ModeToggle />
          <MobileNav />
        </div>
      </nav>
    </div>
  );
}
