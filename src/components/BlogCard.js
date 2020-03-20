import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"

export default function BlogCard(props) {
  return (
    <div
      className={`flex flex-col ${
        props.imageOnRight ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:max-w-4xl mb-10 lg:mb-16 shadow-lg`}
    >
      <div className="relative flex justify-center lg:w-1/2">
        {/* <div className={`absolute -top-half ${props.imageOnRight ? 'right-0' : 'left-0'} w-56 h-56 custom`}></div> */}
        <img
          className="w-full shadow-lg lg:shadow-2xl z-10"
          src={props.imageSrc}
          alt=""
        />
      </div>
      <div className="flex flex-col items-start lg:w-1/2 p-4 md:p-6 lg:py-6 ">
        <p className="mb-2 font-body tracking-wide text-xs uppercase">
          {props.tag}
        </p>
        <h3 className="lg:h-20 mb-4 md:text-2xl lg:text-3xl capitalize font-display">
          {props.title}
        </h3>
        <p className="mb-8 text-gray-700 font-body">{props.body}</p>
        <Button label="Read more" withIcons link={`blogs/${props.path}`} />
      </div>
    </div>
  )
}

BlogCard.propTypes = {
  body: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
