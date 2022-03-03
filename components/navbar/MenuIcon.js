import React from "react"

function MenuIcon(props) {
  const title = props.title || "menu 4"

  return (
    <svg
      height="24"
      width="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#000000" strokeWidth="1">
        <path
          d="M1 12.02h22.02"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 3h22.02"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 21.03h10.02"
          fill="none"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default MenuIcon
