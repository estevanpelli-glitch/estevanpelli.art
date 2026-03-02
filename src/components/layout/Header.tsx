import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Info', path: '/info' },
  { label: 'News', path: '/news' },
  { label: 'Texts', path: '/texts' },
  { label: 'Paintings', path: '/paintings' },
  { label: 'Exhibitions', path: '/exhibitions' },
  { label: 'Photo Album', path: '/photo-album' },
];

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white">
      <div className="px-12 py-8 lg:px-8 lg:py-6 md:px-6 md:py-4">
        {/* Desktop Navigation - Left side */}
        <nav className="hidden md:block absolute left-12 top-8 lg:left-8 lg:top-6 md:left-6 md:top-4">
          <ul className="flex flex-col items-start gap-0">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      text-[32px] lg:text-[24px] md:text-[18px]
                      font-normal 
                      leading-[1.3] 
                      hover:underline 
                      transition-all 
                      duration-200
                      ${isActive ? 'text-[#0000ff] underline' : 'text-soft-black no-underline'}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button - Left side */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden absolute left-4 top-4 z-50 p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-[#0000ff]" />
          ) : (
            <Menu className="w-6 h-6 text-soft-black" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 bg-warm-white z-40 pt-20 px-6">
            <nav>
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => {
                  const isActive = currentPath === item.path;
                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className={`
                          text-[28px] font-normal leading-[1.3]
                          hover:underline transition-all duration-200
                          ${isActive ? 'text-[#0000ff] underline' : 'text-soft-black no-underline'}
                        `}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}

        {/* Logo / Artist Name - Right side */}
        <Link 
          to="/" 
          className="absolute right-12 top-8 lg:right-8 lg:top-6 md:right-6 md:top-4 
                     text-[42px] lg:text-[32px] md:text-[22px]
                     font-bold text-[#0000ff] 
                     tracking-[0.125em] uppercase
                     hover:opacity-80 transition-opacity duration-200"
        >
          {/* Mobile: 50% do tamanho (21px ~ text-[11px] com tracking ajustado) */}
          <span className="hidden md:inline">ESTEVAN PELLI</span>
          <span className="md:hidden text-[11px] tracking-[0.08em]">ESTEVAN PELLI</span>
        </Link>
      </div>
    </header>
  );
}
