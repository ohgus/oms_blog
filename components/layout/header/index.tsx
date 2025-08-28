import Navbar from '../navbar';

export default function Header() {
  return (
    <header className="sticky px-4 z-20 bg-[#252B52] dark:bg-[#161716] text-[#F9F7F6] dark:text-[#F9F7F6] top-0 w-full h-[80px] flex items-center">
      <Navbar />
    </header>
  );
}
