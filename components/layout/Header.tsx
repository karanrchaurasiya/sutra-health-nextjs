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
  {
    label: "Women's Health",
    href: "/conditions/womens-health",
  },
];

const approach = [
  {
    label: "Lifestyle",
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

type DropdownName = "conditions" | "approach" | "resources" | null;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownName>(null);

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
      document.removeEventListener("mousedown", handleClickOutside);
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
    setOpenDropdown((current) => (current === name ? null : name));
  }

  function closeNavigation() {
    setMobileOpen(false);
    setOpenDropdown(null);
  }

  return (
    <header ref={navRef} className="siteHeader">
      <div className="navbarContainer">

        {/* LOGO */}
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
            <span className="brandName">Sutra Health</span>

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

          <Link href="/about" className="navLink">
            About
          </Link>

          {/* CONDITIONS */}
          <div
            className="navDropdown"
            onMouseEnter={() => setOpenDropdown("conditions")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className={`navDropdownButton ${
                openDropdown === "conditions"
                  ? "navDropdownButtonOpen"
                  : ""
              }`}
              aria-expanded={openDropdown === "conditions"}
              onClick={() => toggleDropdown("conditions")}
            >
              <span>Conditions</span>

              <span
                className={`chevron ${
                  openDropdown === "conditions"
                    ? "chevronOpen"
                    : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {openDropdown === "conditions" && (
              <div className="dropdownMenu">
                <div className="dropdownHeader">
                  <div>
                    <span className="dropdownEyebrow">
                      Health concerns
                    </span>

                    <span className="dropdownTitle">
                      Conditions
                    </span>
                  </div>

                  <Link
                    href="/conditions"
                    onClick={closeNavigation}
                  >
                    View all
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <div className="dropdownGrid">
                  {conditions.map((item) => (
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

          {/* APPROACH */}
          <div
            className="navDropdown"
            onMouseEnter={() => setOpenDropdown("approach")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className={`navDropdownButton ${
                openDropdown === "approach"
                  ? "navDropdownButtonOpen"
                  : ""
              }`}
              aria-expanded={openDropdown === "approach"}
              onClick={() => toggleDropdown("approach")}
            >
              <span>Approach</span>

              <span
                className={`chevron ${
                  openDropdown === "approach"
                    ? "chevronOpen"
                    : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {openDropdown === "approach" && (
              <div className="dropdownMenu approachMenu">
                <div className="dropdownHeader">
                  <div>
                    <span className="dropdownEyebrow">
                      How we work
                    </span>

                    <span className="dropdownTitle">
                      Our Approach
                    </span>
                  </div>

                  <Link
                    href="/approach"
                    onClick={closeNavigation}
                  >
                    Explore
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <div className="dropdownGrid">
                  {approach.map((item) => (
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

          <Link
            href="/doctors"
            className="navLink"
          >
            Doctors &amp; Experts
          </Link>

          <Link
            href="/retreat-programs"
            className="navLink"
          >
            Retreat
          </Link>

          {/* RESOURCES */}
          <div
            className="navDropdown"
            onMouseEnter={() => setOpenDropdown("resources")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className={`navDropdownButton ${
                openDropdown === "resources"
                  ? "navDropdownButtonOpen"
                  : ""
              }`}
              aria-expanded={openDropdown === "resources"}
              onClick={() => toggleDropdown("resources")}
            >
              <span>Resources</span>

              <span
                className={`chevron ${
                  openDropdown === "resources"
                    ? "chevronOpen"
                    : ""
                }`}
                aria-hidden="true"
              />
            </button>

            {openDropdown === "resources" && (
              <div className="dropdownMenu resourcesMenu">
                <div className="dropdownHeader">
                  <div>
                    <span className="dropdownEyebrow">
                      Learn &amp; explore
                    </span>

                    <span className="dropdownTitle">
                      Resources
                    </span>
                  </div>

                  <Link
                    href="/resources"
                    onClick={closeNavigation}
                  >
                    View all
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>

                <div className="dropdownGrid">
                  {resources.map((item) => (
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

          <Link
            href="/about"
            className="mobileNavLink"
            onClick={closeNavigation}
          >
            About
          </Link>

          {/* MOBILE CONDITIONS */}
          <div className="mobileDropdown">
            <button
              type="button"
              className="mobileDropdownButton"
              onClick={() =>
                toggleDropdown("conditions")
              }
              aria-expanded={
                openDropdown === "conditions"
              }
            >
              <span>Conditions</span>

              <span
                className={`mobileChevron ${
                  openDropdown === "conditions"
                    ? "mobileChevronOpen"
                    : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              className={`mobileDropdownContent ${
                openDropdown === "conditions"
                  ? "mobileDropdownContentOpen"
                  : ""
              }`}
            >
              <Link
                href="/conditions"
                onClick={closeNavigation}
              >
                All Conditions
              </Link>

              {conditions.map((item) => (
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

          {/* MOBILE APPROACH */}
          <div className="mobileDropdown">
            <button
              type="button"
              className="mobileDropdownButton"
              onClick={() =>
                toggleDropdown("approach")
              }
              aria-expanded={
                openDropdown === "approach"
              }
            >
              <span>Approach</span>

              <span
                className={`mobileChevron ${
                  openDropdown === "approach"
                    ? "mobileChevronOpen"
                    : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              className={`mobileDropdownContent ${
                openDropdown === "approach"
                  ? "mobileDropdownContentOpen"
                  : ""
              }`}
            >
              <Link
                href="/approach"
                onClick={closeNavigation}
              >
                Our Approach
              </Link>

              {approach.map((item) => (
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

          <Link
            href="/doctors"
            className="mobileNavLink"
            onClick={closeNavigation}
          >
            Doctors &amp; Experts
          </Link>

          <Link
            href="/retreat-programs"
            className="mobileNavLink"
            onClick={closeNavigation}
          >
            Retreat
          </Link>

          {/* MOBILE RESOURCES */}
          <div className="mobileDropdown">
            <button
              type="button"
              className="mobileDropdownButton"
              onClick={() =>
                toggleDropdown("resources")
              }
              aria-expanded={
                openDropdown === "resources"
              }
            >
              <span>Resources</span>

              <span
                className={`mobileChevron ${
                  openDropdown === "resources"
                    ? "mobileChevronOpen"
                    : ""
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              className={`mobileDropdownContent ${
                openDropdown === "resources"
                  ? "mobileDropdownContentOpen"
                  : ""
              }`}
            >
              <Link
                href="/resources"
                onClick={closeNavigation}
              >
                All Resources
              </Link>

              {resources.map((item) => (
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