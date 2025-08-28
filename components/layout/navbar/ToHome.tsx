import Link from 'next/link';

export default function ToHome() {
  return (
    <div>
      <Link href="/">
        <h1 className="text-2xl font-bold">Ohgus</h1>
      </Link>
    </div>
  );
}
