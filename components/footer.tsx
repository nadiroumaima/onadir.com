import {  FOOTER_LINKS } from '@/constants/links';
import { SITE } from '@/constants/site';
import { cn } from '@/lib/utils';

import Container from './container';
import Link from './link';

const Footer = () => {
  return (
    <footer className={cn('bg-grid mt-24 mb-10 pt-16 text-sm')}>
      <Container>
        <nav className={cn('mb-8 grid grid-cols-2 gap-y-2', 'sm:grid-cols-3')}>
          {FOOTER_LINKS.map((groups, index) => (
            <div
              key={`footerGroup${index}`}
              className={cn('flex flex-col items-start gap-2')}
            >
              {groups.map(({ title, path }) => (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    'text-muted-foreground font-medium transition-colors duration-200',
                    'hover:text-foreground',
                  )}
                >
                  {title}
                </Link>
              ))}
            </div>
          ))}
        </nav>
       <div className={cn('font-medium flex flex-col gap-1')}>
  <div>
    All rights reserved &copy; <Link href="/">{SITE.author.name}</Link> {new Date().getFullYear()}
  </div>
  <em className={cn('text-muted-foreground text-xs')}>Casablanca, Morocco</em>
</div>
      </Container>
    </footer>
  );
};

export default Footer;