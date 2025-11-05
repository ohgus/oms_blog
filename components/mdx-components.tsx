import NextImage, { ImageProps } from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';

const components = {
  Image: (props: ImageProps) => <NextImage {...props} />,
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    // 코드 블록인지 인라인 코드인지 구분
    // 코드 블록은 className에 'language-' 포함
    const isInline = !className?.includes('language-');

    return isInline ? (
      <code
        className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-sm font-mono text-red-600 dark:text-red-400 before:content-[''] after:content-['']"
        {...props}
      />
    ) : (
      <code className={className} {...props} />
    );
  },
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    // rehype-pretty-code가 생성한 코드 블록은 그대로 유지
    // Tailwind Typography의 기본 스타일을 오버라이드하지 않음
    return <pre className={className} {...props} />;
  },
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
