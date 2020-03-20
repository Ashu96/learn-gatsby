import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"

export default function Button(props) {
  return (
    <button
      className="flex items-center px-5 shadow-md py-2 rounded bg-brand-red text-brand-primary font-body"
      onClick={() => navigate(props.link)}
    >
      {props.label}
      {props.withIcons && (
        <svg
          className="w-4 h-4 ml-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
        </svg>
      )}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  withIcons: PropTypes.bool,
}
