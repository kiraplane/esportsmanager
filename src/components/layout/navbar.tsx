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
  'relative cursor-pointer border border-transparent bg-transparent text-base text-[#CDEAE7]',
  'hover:border-[#FFB68A]/35 hover:bg-[#263A34] hover:text-[#F3EDE1]',
  'focus:border-[#FFB68A]/35 focus:bg-[#263A34] focus:text-[#F3EDE1]',
  'focus-visible:ring-[#FFB68A]/45',
  'data-active:border-[#FFB68A]/55 data-active:bg-[#263A34] data-active:text-[#FFB68A]',
  'data-[active=true]:border-[#FFB68A]/55 data-[active=true]:bg-[#263A34] data-[active=true]:text-[#FFB68A]',
  'data-[state=open]:border-[#FFB68A]/35 data-[state=open]:bg-[#263A34] data-[state=open]:text-[#F3EDE1]'
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
        'sticky inset-x-0 top-0 z-50 border-[#4B6B66] border-b py-4 text-[#F3EDE1] backdrop-blur-md transition-all duration-300',
        scroll
          ? scrolled
            ? 'bg-[#08100D]/94 shadow-[0_8px_24px_rgba(8,16,13,0.28)] supports-backdrop-filter:bg-[#08100D]/94'
            : 'bg-[#08100D]/88 supports-backdrop-filter:bg-[#08100D]/88'
          : 'bg-[#08100D]/94 supports-backdrop-filter:bg-[#08100D]/94'
      )}
    >
      <Container className="px-4">
        {/* desktop navbar */}
        <nav className="hidden lg:flex">
          {/* logo and name */}
          <div className="flex items-center">
            <LocaleLink href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="font-display text-lg font-bold tracking-wide">
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
                                      'hover:bg-[#263A34] hover:text-[#FFB68A]',
                                      'focus:bg-[#263A34] focus:text-[#FFB68A]',
                                      isSubItemActive &&
                                        'bg-[#263A34] text-[#FFB68A]'
                                    )}
                                  >
                                    <div
                                      className={cn(
                                        'flex size-8 shrink-0 items-center justify-center transition-colors',
                                        'bg-transparent text-[#CDEAE7]',
                                        'group-hover:bg-transparent group-hover:text-[#FFB68A]',
                                        'group-focus:bg-transparent group-focus:text-[#FFB68A]',
                                        isSubItemActive &&
                                          'bg-transparent text-[#FFB68A]'
                                      )}
                                    >
                                      {subItem.icon ? subItem.icon : null}
                                    </div>
                                    <div className="flex-1">
                                      <div
                                        className={cn(
                                          'text-sm font-medium text-[#CDEAE7]',
                                          'group-hover:bg-transparent group-hover:text-[#FFB68A]',
                                          'group-focus:bg-transparent group-focus:text-[#FFB68A]',
                                          isSubItemActive &&
                                            'bg-transparent text-[#FFB68A]'
                                        )}
                                      >
                                        {subItem.title}
                                      </div>
                                      {subItem.description && (
                                        <div
                                          className={cn(
                                            'text-sm text-[#CDEAE7]',
                                            'group-hover:bg-transparent group-hover:text-[#FFD0A8]',
                                            'group-focus:bg-transparent group-focus:text-[#FFD0A8]',
                                            isSubItemActive &&
                                              'bg-transparent text-[#FFD0A8]'
                                          )}
                                        >
                                          {subItem.description}
                                        </div>
                                      )}
                                    </div>
                                    {subItem.external && (
                                      <ArrowUpRightIcon
                                        className={cn(
                                          'size-4 shrink-0 text-[#CDEAE7]',
                                          'group-hover:bg-transparent group-hover:text-[#FFB68A]',
                                          'group-focus:bg-transparent group-focus:text-[#FFB68A]',
                                          isSubItemActive &&
                                            'bg-transparent text-[#FFB68A]'
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
