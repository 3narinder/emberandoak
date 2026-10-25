"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiLinkedin } from "react-icons/ci";
import { LuInstagram, LuMenu, LuX } from "react-icons/lu";
import { PiFacebookLogo } from "react-icons/pi";
import { TbBrandTiktok } from "react-icons/tb";

import BrandMark from "@/components/layout/BrandMark";
import { businessInfo, reusableContent } from "@/constants/data/reusable";
import { useRouteRevealDelay } from "@/components/animation/RouteRevealDelayProvider";

const socialIcons = {
  Instagram: LuInstagram,
  TikTok: TbBrandTiktok,
  Facebook: PiFacebookLogo,
  LinkedIn: CiLinkedin,
};

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { delayNextRoute } = useRouteRevealDelay();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigateFromMenu = (href: string) => {
    delayNextRoute(href);
    closeMenu();
  };

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    if (isMenuOpen) window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  return (
    <nav
      aria-label={reusableContent.siteNavigationLabel}
      className="sticky top-0 z-50 w-full bg-cream"
    >
      <header className="mx-auto grid h-20 w-full max-w-368 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-8">
        {/* Social links: desktop and laptop only */}
        <ul
          className="hidden items-center gap-2 tablet:flex"
          aria-label={reusableContent.socialNavigationLabel}
        >
          {reusableContent.socialLinks.map(({ label, href }) => {
            const Icon = socialIcons[label as keyof typeof socialIcons];

            return (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-green text-cream transition-colors hover:bg-green-soft"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Centered logo */}
        <div className="col-start-1 justify-self-start tablet:col-start-2 desktop:justify-self-center">
          <BrandMark />
        </div>

        {/* Menu */}
        <button
          type="button"
          aria-label={
            isMenuOpen
              ? reusableContent.menuButtonLabels.close
              : reusableContent.menuButtonLabels.open
          }
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
          onClick={() => {
            if (isMenuOpen) {
              closeMenu();
            } else {
              setIsMenuOpen(true);
            }
          }}
          className="col-start-3 row-start-1 flex h-12 w-12 items-center justify-center justify-self-end rounded-xl text-green transition-colors hover:bg-green/5"
        >
          {isMenuOpen ? (
            <LuX className="h-8 w-8" aria-hidden="true" />
          ) : (
            <LuMenu className="h-8 w-8" aria-hidden="true" />
          )}
        </button>
      </header>

      {/* Expandable menu */}

      {isMenuOpen && (
        <div
          id="site-menu"
          className="absolute inset-x-0 top-20 z-10 flex-col items-center justify-center border-t border-green-wash bg-cream shadow-[0_18px_28px_rgb(8_47_27/8%)]"
        >
          <div className="relative mx-auto flex h-min w-full min-w-0 max-w-368 flex-col items-start gap-10 p-6 tablet:p-8">
            <ul className="relative flex h-min w-full flex-col gap-1">
              {reusableContent.primaryNavigation.map(
                ({ label, href }, index) => {
                  const number = String(index + 1).padStart(2, "0");

                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        aria-current={pathname === href ? "page" : undefined}
                        onClick={() => navigateFromMenu(href)}
                        className="flex items-end gap-3"
                      >
                        <span
                          className={`text-[10px] font-normal leading-[1.4em] ${
                            pathname === href
                              ? "text-green"
                              : "text-green-muted hover:text-green"
                          }`}
                        >
                          {number}
                        </span>

                        <span
                          className={`text-3xl font-extrabold uppercase leading-[1.05em] tracking-[-0.02em] ${
                            pathname === href
                              ? "text-green"
                              : "text-green-muted hover:text-green"
                          }`}
                        >
                          {label}
                        </span>
                      </Link>
                    </li>
                  );
                },
              )}
            </ul>

            <div className="flex w-full flex-col items-start justify-between gap-4 border-t border-green/15 pt-5 tablet:flex-row tablet:items-end">
              <address className="flex flex-col justify-end not-italic">
                <a
                  href={businessInfo.phoneLink}
                  className="mb-1 font-onest text-sm font-semibold text-green-muted transition-colors hover:text-green"
                >
                  {businessInfo.phone}
                </a>

                <span className="font-onest text-xs text-green-text-muted">
                  {businessInfo.address}
                </span>
              </address>

              <ul
                aria-label={reusableContent.legalNavigationLabel}
                className="flex flex-wrap gap-x-4 gap-y-2 tablet:justify-end tablet:gap-x-6"
              >
                {reusableContent.legalNavigation.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => navigateFromMenu(href)}
                      className="text-xs text-green-text-muted"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
