import { type ReactNode } from 'react';

export function SiteWidthContainer({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`max-w-7xl mx-auto px-6 md:px-12 lg:px-16 ${className}`}>{children}</div>;
}
