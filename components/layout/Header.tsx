"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const conditions = [
  {
    label: "Weight Management",
    href: "/conditions/weight-management",
  },
  {
    label: "Metabolic Health",
    href: "/conditions/metabolic-health",
  },
  {
    label: "High Blood Pressure",
    href: "/conditions/high-blood-pressure",
  },
  {
    label: "Arthritis & Joint Pain",
    href: "/conditions/arthritis-joint-pain",
  },
  {
    label: "Migraine & Headache",
    href: "/conditions/migraine-headache",
  },
  {
    label: "Digestive & Gut Health",
    href: "/conditions/digestive-gut-health",
  },
];

const about = [
  {
    label: "About Sutra Health",
    href: "/about",
  },
  {
    label: "Doctors & Experts",
    href: "/doctors",
  },
  {
    label: "Volunteer",
    href: "/volunteer",
  },
];

const approach = [
  {
    label: "The Sutra Health Method",
    href: "/approach",
  },
  {
    label: "Lifestyle Medicine",
    href: "/approach/lifestyle",
  },
  {
    label: "Nutrition",
    href: "/approach/nutrition",
  },
  {
    label: "Therapeutic Yoga & Movement",
    href: "/approach/therapeutic-yoga",
  },
  {
    label: "Breath & Mindfulness",
    href: "/approach/breath-mindfulness",
  },
  {
    label: "21-Point Lifestyle Assessment",
    href: "/score",
  },
];

const programs = [
  {
    label: "Physician Consultation",
    href: "/programs/physician-consultation",
  },
  {
    label: "Dietary Advice",
    href: "/programs/dietary-advice",
  },
  {
    label: "Lifestyle Counselling",
    href: "/programs/lifestyle-counselling",
  },
  {
    label: "Therapeutic Yoga",
    href: "/programs/therapeutic-yoga",
  },
  {
    label: "Pranayama",
    href: "/programs/pranayama",
  },
  {
    label: "Meditation",
    href: "/programs/meditation",
  },
  {
    label: "Shirodhara",
    href: "/programs/shirodhara",
  },
  {
    label: "My Buddy",
    href: "/programs/my-buddy",
  },
  {
    label: "Singing, Kirtan & Dance",
    href: "/programs/singing-kirtan-dance",
  },
];

const resources = [
  {
    label: "Health Articles",
    href: "/resources/articles",
  },
  {
    label: "Research & Publications",
    href: "/resources/research",
  },
  {
    label: "Practice Knowledge System",
    href: "/resources/knowledge-system",
  },
  {
    label: "21-Point Assessment",
    href: "/score",
  },
];

type DropdownName =
  | "about"
  | "conditions"
  | "approach"
  | "programs"
  | "resources"
  | null;

interface DropdownProps {
  name: Exclude<DropdownName, null>;
  label: string;
  eyebrow: string;
  title: string;
  items: { label: string; href: string }[];
  viewAll?: {
    label: string;
    href: string;
  };
  className?: string;
  openDropdown: DropdownName;
  toggleDropdown: (name: DropdownName) => void;
  closeNavigation: () => void;
  setOpenDropdown: (name: DropdownName) => void;
}

function DesktopDropdown({
  name,
  label,
  eyebrow,
  title,
  items,
  viewAll,
  className = "",
  openDropdown,
  toggleDropdown,
  closeNavigation,
  setOpenDropdown,
}: DropdownProps) {
  const isOpen = openDropdown === name;

  return (
    <div
      className="navDropdown"
      onMouseEnter={() => setOpenDropdown(name)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        type="button"
        className={`navDropdownButton ${
          isOpen ? "navDropdownButtonOpen" : ""
        }`}
        aria-expanded={isOpen}
        onClick={() => toggleDropdown(name)}
      >
        <span>{label}</span>

        <span
          className={`chevron ${isOpen ? "chevronOpen" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className={`dropdownMenu ${className}`}>
          <div className="dropdownHeader">
            <div>
              <span className="dropdownEyebrow">{eyebrow}</span>
              <span className="dropdownTitle">{title}</span>
            </div>

            {viewAll && (
              <Link href={viewAll.href} onClick={closeNavigation}>
                {viewAll.label}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>

          <div className="dropdownGrid">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="dropdownItem"
                onClick={closeNavigation}
              >
                <span className="dropdownItemTitle">
                  {item.label}
                </span>

                <span
                  className="dropdownArrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface MobileDropdownProps {
  name: Exclude<DropdownName, null>;
  label: string;
  items: { label: string; href: string }[];
  viewAll?: {
    label: string;
    href: string;
  };
  openDropdown: DropdownName;
  toggleDropdown: (name: DropdownName) => void;
  closeNavigation: () => void;
}

function MobileDropdown({
  name,
  label,
  items,
  viewAll,
  openDropdown,
  toggleDropdown,
  closeNavigation,
}: MobileDropdownProps) {
  const isOpen = openDropdown === name;

  return (
    <div className="mobileDropdown">
      <button
        type="button"
        className="mobileDropdownButton"
        onClick={() => toggleDropdown(name)}
        aria-expanded={isOpen}
      >
        <span>{label}</span>

        <span
          className={`mobileChevron ${
            isOpen ? "mobileChevronOpen" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`mobileDropdownContent ${
          isOpen ? "mobileDropdownContentOpen" : ""
        }`}
      >
        {viewAll && (
          <Link href={viewAll.href} onClick={closeNavigation}>
            {viewAll.label}
          </Link>
        )}

        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeNavigation}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] =
    useState<DropdownName>(null);

  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function toggleDropdown(name: DropdownName) {
    setOpenDropdown((current) =>
      current === name ? null : name
    );
  }

  function closeNavigation() {
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  return (
    <header ref={navRef} className="siteHeader">
      <div className="navbarContainer">

        {/* BRAND */}
        <Link
          href="/"
          className="brand"
          onClick={closeNavigation}
          aria-label="Sutra Health Home"
        >
          <div className="brandLogo">
            <img
              src="/logo/sutra-health-logo.png"
              alt="Sutra Health"
            />
          </div>

          <div className="brandText">
            <span className="brandName">
              Sutra Health
            </span>

            <span className="brandTagline">
              Integrative Lifestyle Healthcare
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className="desktopNav"
          aria-label="Main navigation"
        >
          <Link href="/" className="navLink">
            Home
          </Link>

          <DesktopDropdown
            name="about"
            label="About"
            eyebrow="Who we are"
            title="About Sutra Health"
            items={about}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
            setOpenDropdown={setOpenDropdown}
            className="aboutMenu"
          />

          <DesktopDropdown
            name="conditions"
            label="Conditions"
            eyebrow="Health concerns"
            title="Conditions"
            items={conditions}
            viewAll={{
              label: "View all",
              href: "/conditions",
            }}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
            setOpenDropdown={setOpenDropdown}
            className="conditionsMenu"
          />

          <DesktopDropdown
            name="approach"
            label="Approach"
            eyebrow="How we work"
            title="The Sutra Health Method"
            items={approach}
            viewAll={{
              label: "View all",
              href: "/approach",
            }}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
            setOpenDropdown={setOpenDropdown}
            className="approachMenu"
          />

          <DesktopDropdown
            name="programs"
            label="Programs"
            eyebrow="What we offer"
            title="Health & Wellness Programs"
            items={programs}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
            setOpenDropdown={setOpenDropdown}
            className="programsMenu"
          />

          <DesktopDropdown
            name="resources"
            label="Resources"
            eyebrow="Learn & explore"
            title="Resources"
            items={resources}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
            setOpenDropdown={setOpenDropdown}
            className="resourcesMenu"
          />

          <Link
            href="/retreat-programs"
            className="navLink"
          >
            Retreat
          </Link>

          <Link
            href="/gallery"
            className="navLink"
          >
            Gallery
          </Link>

            <Link href="/contact" className="navLink">
            Contact
          </Link>

        </nav>

        

        {/* DESKTOP CTA */}
        <Link
          href="/book-appointment"
          className="desktopBookButton"
        >
          <span>Book Appointment</span>
          <span aria-hidden="true">→</span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`mobileMenuButton ${
            mobileOpen ? "mobileMenuButtonOpen" : ""
          }`}
          onClick={() => {
            setMobileOpen((value) => !value);
            setOpenDropdown(null);
          }}
          aria-expanded={mobileOpen}
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
        >
          <span
            className={
              mobileOpen
                ? "line lineOneOpen"
                : "line"
            }
          />

          <span
            className={
              mobileOpen
                ? "line lineTwoOpen"
                : "line"
            }
          />

          <span
            className={
              mobileOpen
                ? "line lineThreeOpen"
                : "line"
            }
          />
        </button>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`mobileNav ${
          mobileOpen ? "mobileNavOpen" : ""
        }`}
      >
        <div className="mobileNavInner">

          <Link
            href="/"
            className="mobileNavLink"
            onClick={closeNavigation}
          >
            Home
          </Link>

          <MobileDropdown
            name="about"
            label="About"
            items={about}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
          />

          <MobileDropdown
            name="conditions"
            label="Conditions"
            items={conditions}
            viewAll={{
              label: "All Conditions",
              href: "/conditions",
            }}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
          />

          <MobileDropdown
            name="approach"
            label="Approach"
            items={approach}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
          />

          <MobileDropdown
            name="programs"
            label="Programs"
            items={programs}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
          />

          <MobileDropdown
            name="resources"
            label="Resources"
            items={resources}
            openDropdown={openDropdown}
            toggleDropdown={toggleDropdown}
            closeNavigation={closeNavigation}
          />

          <Link
            href="/retreat-programs"
            className="mobileNavLink"
            onClick={closeNavigation}
          >
            Retreat
          </Link>

          <Link
            href="/gallery"
            className="mobileNavLink"
            onClick={closeNavigation}
          >
            Gallery
          </Link>

          <Link
            href="/contact"
            className="mobileNavLink"
            onClick={closeNavigation}
          >
            Contact
          </Link>

          <Link
            href="/book-appointment"
            className="mobileBookButton"
            onClick={closeNavigation}
          >
            <span>Book Appointment</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
