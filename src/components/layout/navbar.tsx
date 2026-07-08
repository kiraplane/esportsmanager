'use client';

import Container from '@/components/layout/container';
import { Logo } from '@/components/layout/logo';
import { NavbarMobile } from '@/components/layout/navbar-mobile';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useNavbarLinks } from '@/config/navbar-config';
import { useScroll } from '@/hooks/use-scroll';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ArrowUpRightIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './locale-switcher';

interface NavBarProps {
  scroll?: boolean;
}

const customNavigationMenuTriggerStyle = cn(
  navigationMenuTriggerStyle(),
  'relative cursor-pointer border border-transparent bg-transparent text-base text-[#A8C7D8]',
  'hover:border-[#59D6FF]/40 hover:bg-[#0E1B27] hover:text-[#EAF7FF]',
  'focus:border-[#59D6FF]/40 focus:bg-[#0E1B27] focus:text-[#EAF7FF]',
  'focus-visible:ring-[#59D6FF]/40',
  'data-active:border-[#59D6FF]/60 data-active:bg-[#0E1B27] data-active:text-[#74F2A7]',
  'data-[active=true]:border-[#59D6FF]/60 data-[active=true]:bg-[#0E1B27] data-[active=true]:text-[#74F2A7]',
  'data-[state=open]:border-[#59D6FF]/40 data-[state=open]:bg-[#0E1B27] data-[state=open]:text-[#EAF7FF]'
);

function isCurrentPathActive(pathname: string, href?: string) {
  if (!href) {
    return false;
  }

  return href === '/' ? pathname === '/' : pathname.startsWith(href);
}

export function Navbar({ scroll }: NavBarProps) {
  const t = useTranslations();
  const scrolled = useScroll(50);
  const menuLinks = useNavbarLinks();
  const localePathname = useLocalePathname();

  return (
    <section
      className={cn(
        'sticky inset-x-0 top-0 z-50 border-[#1F3A4A] border-b py-4 text-[#EAF7FF] backdrop-blur-md transition-all duration-300',
        scroll
          ? scrolled
            ? 'bg-[#061018]/94 shadow-[0_8px_24px_rgba(6,16,24,0.36)] supports-backdrop-filter:bg-[#061018]/94'
            : 'bg-[#061018]/88 supports-backdrop-filter:bg-[#061018]/88'
          : 'bg-[#061018]/94 supports-backdrop-filter:bg-[#061018]/94'
      )}
    >
      <Container className="px-4">
        {/* desktop navbar */}
        <nav className="hidden lg:flex">
          {/* logo and name */}
          <div className="flex items-center">
            <LocaleLink href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="hidden whitespace-nowrap font-display text-lg font-bold tracking-wide xl:inline">
                {t('Metadata.name')}
              </span>
            </LocaleLink>
          </div>

          {/* menu links */}
          <div className="flex-1 flex items-center justify-center space-x-2">
            <NavigationMenu className="relative">
              <NavigationMenuList className="flex items-center">
                {menuLinks?.map((item, index) =>
                  item.items ? (
                    <NavigationMenuItem key={index} className="relative">
                      <NavigationMenuTrigger
                        data-active={
                          isCurrentPathActive(localePathname, item.href) ||
                          item.items.some((subItem) =>
                            isCurrentPathActive(localePathname, subItem.href)
                          )
                            ? 'true'
                            : undefined
                        }
                        className={customNavigationMenuTriggerStyle}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items?.map((subItem, subIndex) => {
                            const isSubItemActive =
                              subItem.href &&
                              localePathname.startsWith(subItem.href);
                            return (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <LocaleLink
                                    href={subItem.href || '#'}
                                    target={
                                      subItem.external ? '_blank' : undefined
                                    }
                                    rel={
                                      subItem.external
                                        ? 'noopener noreferrer'
                                        : undefined
                                    }
                                    className={cn(
                                      'group flex select-none flex-row items-center gap-4 rounded-md',
                                      'p-2 leading-none no-underline outline-hidden transition-colors',
                                      'hover:bg-[#0E1B27] hover:text-[#74F2A7]',
                                      'focus:bg-[#0E1B27] focus:text-[#74F2A7]',
                                      isSubItemActive &&
                                        'bg-[#0E1B27] text-[#74F2A7]'
                                    )}
                                  >
                                    <div
                                      className={cn(
                                        'flex size-8 shrink-0 items-center justify-center transition-colors',
                                        'bg-transparent text-[#A8C7D8]',
                                        'group-hover:bg-transparent group-hover:text-[#74F2A7]',
                                        'group-focus:bg-transparent group-focus:text-[#74F2A7]',
                                        isSubItemActive &&
                                          'bg-transparent text-[#74F2A7]'
                                      )}
                                    >
                                      {subItem.icon ? subItem.icon : null}
                                    </div>
                                    <div className="flex-1">
                                      <div
                                        className={cn(
                                          'text-sm font-medium text-[#A8C7D8]',
                                          'group-hover:bg-transparent group-hover:text-[#74F2A7]',
                                          'group-focus:bg-transparent group-focus:text-[#74F2A7]',
                                          isSubItemActive &&
                                            'bg-transparent text-[#74F2A7]'
                                        )}
                                      >
                                        {subItem.title}
                                      </div>
                                      {subItem.description && (
                                        <div
                                          className={cn(
                                            'text-sm text-[#A8C7D8]',
                                            'group-hover:bg-transparent group-hover:text-[#BED3E0]',
                                            'group-focus:bg-transparent group-focus:text-[#BED3E0]',
                                            isSubItemActive &&
                                              'bg-transparent text-[#BED3E0]'
                                          )}
                                        >
                                          {subItem.description}
                                        </div>
                                      )}
                                    </div>
                                    {subItem.external && (
                                      <ArrowUpRightIcon
                                        className={cn(
                                          'size-4 shrink-0 text-[#A8C7D8]',
                                          'group-hover:bg-transparent group-hover:text-[#74F2A7]',
                                          'group-focus:bg-transparent group-focus:text-[#74F2A7]',
                                          isSubItemActive &&
                                            'bg-transparent text-[#74F2A7]'
                                        )}
                                      />
                                    )}
                                  </LocaleLink>
                                </NavigationMenuLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        asChild
                        active={
                          item.href
                            ? isCurrentPathActive(localePathname, item.href)
                            : false
                        }
                        className={customNavigationMenuTriggerStyle}
                      >
                        <LocaleLink
                          href={item.href || '#'}
                          target={item.external ? '_blank' : undefined}
                          rel={
                            item.external ? 'noopener noreferrer' : undefined
                          }
                        >
                          {item.title}
                        </LocaleLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-x-4">
            <LocaleSwitcher />
          </div>
        </nav>

        {/* mobile navbar */}
        <NavbarMobile className="lg:hidden" />
      </Container>
    </section>
  );
}
