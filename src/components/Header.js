import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"

const Header = ({siteTitle}) => {
  const [showShadow, setShowShadow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    const body = document.querySelector("body")
    if (body) {
      if (body.getClientRects()[0].y < -60) {
        setShowShadow(true)
      } else {
        setShowShadow(false)
      }
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-brand-secondary ${
        showShadow ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex items-baseline  p-3">
        <Link
          to="/"
          className="flex items-baseline text-3xl text-brand-blue font-heading tracking-wide"
        >
          <svg
            className="w-6 h-6 mr-2 fill-current text-brand-blue transform -rotate-45"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M8.4 12H2.8L1 15H0V5h1l1.8 3h5.6L6 0h2l4.8 8H18a2 2 0 110 4h-5.2L8 20H6l2.4-8z" />
          </svg>
          {siteTitle}
        </Link>
        <Link className="ml-4 text-lg text-brand-primary font-body" to="/about">
          About
        </Link>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
