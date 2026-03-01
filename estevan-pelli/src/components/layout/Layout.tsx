import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-warm-white">
      <Header />
      <main className="pt-40 lg:pt-32 md:pt-28 pb-16 px-12 lg:px-8 md:px-6">
        {children}
      </main>
    </div>
  );
}
