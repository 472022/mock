import { headers } from 'next/headers';
import { getAppConfig } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  // previously displayed a fixed header with logo and text; removed per request
  await headers();
  return <>{children}</>;
}
