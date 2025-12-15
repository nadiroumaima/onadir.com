'use client';

import Container from '@/components/container';
import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import Link from '@/components/link';
import { NAV_LINKS } from '@/constants/links';
import { usePathname } from 'next/navigation';



const Header = () => {
    const isScrolled = useScroll();
    const pathname = usePathname();

    return (
        <header className={cn( 'bg-background sticky top-0 z-50 flex h-16 transition-colors duration-200', isScrolled ? 'shadow-sm' : 'saturate-110', )} >
<Container>
    <div className={cn('flex h-full flex-1 items-center justify-between')}>
     <nav className={cn('hidden', 'md:flex')}>
              <ul className={cn('flex', 'md:gap-x-0.5')}>
                {NAV_LINKS.filter(
                  ({ onlyShowOnDropdownMenu }) => !onlyShowOnDropdownMenu,
                ).map(({ path, label }) => {
                  const isActive =
                    pathname === path || pathname.startsWith(path);

                  return (
                    <li key={path} className={cn('relative')}>
                      <Link
                        href={path}

                        className={cn(
                          'hover:text-foreground flex items-center rounded px-2.5 py-1.5 text-sm font-medium transition-colors duration-200',
                          isActive
                            ? 'text-foreground'
                            : 'text-muted-foreground hover:text-foreground',
                        )}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
    </div>
</Container>
        </header>
    );
    };

export default Header;
