import Link from 'next/link';
import clsx from 'clsx';

export type TagOption = {
  label: string;
  count: number;
};

interface TagFilterProps {
  tags: TagOption[];
  selectedTag: string;
}

export default function TagFilter({ tags, selectedTag }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {tags.map(({ label, count }) => {
        const isAll = label.toLowerCase() === 'all';
        const isSelected = label.toLowerCase() === selectedTag.toLowerCase();
        const href = isAll ? '/' : `/?tag=${encodeURIComponent(label)}`;

        return (
          <Link
            key={label}
            href={href}
            className={clsx(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#252B52] dark:focus-visible:ring-[#F9F7F6]',
              'text-[#252B52] dark:text-[#F9F7F6] border-[#252B52]/20 dark:border-[#F9F7F6]/20 hover:bg-[#252B52]/10 dark:hover:bg-[#F9F7F6]/10',
              {
                'bg-[#252B52] text-[#F9F7F6] border-[#252B52] hover:bg-[#252B52] dark:bg-[#F9F7F6] dark:text-[#252B52] dark:border-[#F9F7F6] dark:hover:bg-[#F9F7F6]': isSelected,
              }
            )}
            aria-current={isSelected ? 'page' : undefined}
          >
            {label} <span className="text-xs">({count})</span>
          </Link>
        );
      })}
    </div>
  );
}
