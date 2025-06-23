import Link from 'next/link';
import Image from 'next/image';

import CabinLogo from '@/components/icons/cabinLogo';
import home from '@/public/home.png';

export default function ToHome() {
  return (
    <div>
      <Link href="/">
        <div className="flex items-center justify-between pb-3">
          <div className="mr-3">
            <Image
              src={home}
              alt="home"
              width={40}
              height={40}
              placeholder="blur"
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div className="hidden h-6 sm:block">
            <CabinLogo />
          </div>
        </div>
      </Link>
    </div>
  );
}
