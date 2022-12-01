import React from 'react'
import clsx from 'clsx'

const colors = {
  white: 'text-white',
  green: 'text-ui-green-success',
  primary: 'text-ui-primary',
}

type SpinnerProps = {
  colorSchema: keyof typeof colors
}

const Spinner: React.FC<SpinnerProps> = (props) => {
  const { colorSchema = 'white' } = props
  const classes = clsx(
    // default
    'animate-spin block w-6 h-6',

    // colors
    colors[colorSchema],
  )

  return (
    <svg
      role="status"
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <title>Spinner</title>
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )
}

export default Spinner
