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

const services = [
  {
    label: "Lifestyle Medicine",
    href: "/services/lifestyle-medicine",
  },
  {
    label: "Integrative Medicine",
    href: "/services/integrative-medicine",
  },
  {
    label: "Therapeutic Yoga",
    href: "/services/therapeutic-yoga",
  },
  {
    label: "Nutrition Counselling",
    href: "/services/nutrition-counselling",
  },
  {
    label: "Meditation & Stress Support",
    href: "/services/meditation-stress-support",
  },
  {
    label: "21-Point Health Assessment",
    href: "/services/health-assessment",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [conditionsOpen, setConditionsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setConditionsOpen(false);
        setServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close everything with Escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setConditionsOpen(false);
        setServicesOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function toggleConditions() {
    setConditionsOpen((value) => !value);
    setServicesOpen(false);
  }

  function toggleServices() {
    setServicesOpen((value) => !value);
    setConditionsOpen(false);
  }

  function closeMobileMenu() {
    setMobileOpen(false);
    setConditionsOpen(false);
    setServicesOpen(false);
  }

  return (
    <header ref={navRef} className="siteHeader">
      <div className="navbarContainer">

        {/* LOGO */}
        <Link
          href="/"
          className="brand"
          onClick={closeMobileMenu}
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
        <nav className="desktopNav" aria-label="Main navigation">

          <Link href="/" className="navLink">
            Home
          </Link>

          {/* CONDITIONS */}
          <div
            className="navDropdown"
            onMouseEnter={() => {
              setConditionsOpen(true);
              setServicesOpen(false);
            }}
            onMouseLeave={() => setConditionsOpen(false)}
          >
            <button
              type="button"
              className="navDropdownButton"
              aria-expanded={conditionsOpen}
              onClick={toggleConditions}
            >
              Conditions
              <span
                className={`chevron ${
                  conditionsOpen ? "chevronOpen" : ""
                }`}
              >
                ↓
              </span>
            </button>

            {conditionsOpen && (
              <div className="dropdownMenu">
                <div className="dropdownHeader">
                  <span>Conditions</span>
                  <Link href="/conditions">
                    View all →
                  </Link>
                </div>

                <div className="dropdownGrid">
                  {conditions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="dropdownItem"
                      onClick={() => {
                        setConditionsOpen(false);
                      }}
                    >
                      <span className="dropdownIcon">✦</span>

                      <span>
                        <span className="dropdownItemTitle">
                          {item.label}
                        </span>

                        <span className="dropdownArrow">
                          →
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* SERVICES */}
          <div
            className="navDropdown"
            onMouseEnter={() => {
              setServicesOpen(true);
              setConditionsOpen(false);
            }}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="navDropdownButton"
              aria-expanded={servicesOpen}
              onClick={toggleServices}
            >
              Services
              <span
                className={`chevron ${
                  servicesOpen ? "chevronOpen" : ""
                }`}
              >
                ↓
              </span>
            </button>

            {servicesOpen && (
              <div className="dropdownMenu servicesMenu">
                <div className="dropdownHeader">
                  <span>Services</span>
                  <Link href="/services">
                    View all →
                  </Link>
                </div>

                <div className="dropdownGrid">
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="dropdownItem"
                      onClick={() => {
                        setServicesOpen(false);
                      }}
                    >
                      <span className="dropdownIcon">✦</span>

                      <span>
                        <span className="dropdownItemTitle">
                          {item.label}
                        </span>

                        <span className="dropdownArrow">
                          →
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/doctors" className="navLink">
            Doctors &amp; Experts
          </Link>

          <Link href="/how-it-works" className="navLink">
            How It Works
          </Link>

          <Link href="/patient-stories" className="navLink">
            Patient Stories
          </Link>

          <Link href="/resources" className="navLink">
            Resources
          </Link>

          <Link href="/about" className="navLink">
            About
          </Link>
        </nav>

        {/* DESKTOP CTA */}
        <Link
          href="/book-appointment"
          className="desktopBookButton"
        >
          <span>Book Appointment</span>
          <span>→</span>
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className="mobileMenuButton"
          onClick={() => setMobileOpen((value) => !value)}
          aria-expanded={mobileOpen}
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
        >
          <span
            className={mobileOpen ? "line lineOneOpen" : "line"}
          />
          <span
            className={mobileOpen ? "line lineTwoOpen" : "line"}
          />
          <span
            className={mobileOpen ? "line lineThreeOpen" : "line"}
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
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          {/* MOBILE CONDITIONS */}
          <div className="mobileDropdown">
            <button
              type="button"
              className="mobileDropdownButton"
              onClick={toggleConditions}
              aria-expanded={conditionsOpen}
            >
              <span>Conditions</span>

              <span
                className={`mobileChevron ${
                  conditionsOpen
                    ? "mobileChevronOpen"
                    : ""
                }`}
              >
                ↓
              </span>
            </button>

            <div
              className={`mobileDropdownContent ${
                conditionsOpen
                  ? "mobileDropdownContentOpen"
                  : ""
              }`}
            >
              <Link
                href="/conditions"
                onClick={closeMobileMenu}
              >
                All Conditions
              </Link>

              {conditions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* MOBILE SERVICES */}
          <div className="mobileDropdown">
            <button
              type="button"
              className="mobileDropdownButton"
              onClick={toggleServices}
              aria-expanded={servicesOpen}
            >
              <span>Services</span>

              <span
                className={`mobileChevron ${
                  servicesOpen
                    ? "mobileChevronOpen"
                    : ""
                }`}
              >
                ↓
              </span>
            </button>

            <div
              className={`mobileDropdownContent ${
                servicesOpen
                  ? "mobileDropdownContentOpen"
                  : ""
              }`}
            >
              <Link
                href="/services"
                onClick={closeMobileMenu}
              >
                All Services
              </Link>

              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/doctors"
            className="mobileNavLink"
            onClick={closeMobileMenu}
          >
            Doctors &amp; Experts
          </Link>

          <Link
            href="/how-it-works"
            className="mobileNavLink"
            onClick={closeMobileMenu}
          >
            How It Works
          </Link>

          <Link
            href="/patient-stories"
            className="mobileNavLink"
            onClick={closeMobileMenu}
          >
            Patient Stories
          </Link>

          <Link
            href="/resources"
            className="mobileNavLink"
            onClick={closeMobileMenu}
          >
            Resources
          </Link>

          <Link
            href="/about"
            className="mobileNavLink"
            onClick={closeMobileMenu}
          >
            About
          </Link>

          <Link
            href="/book-appointment"
            className="mobileBookButton"
            onClick={closeMobileMenu}
          >
            Book Appointment
            <span>→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}