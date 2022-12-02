import React from 'react'
import clsx from 'clsx'

const sizes = {
  '4xl': 'text-4xl',
  '3xl': 'text-3xl',
  '2xl': 'text-2xl',
  xl: 'text-xl',
  lg: 'text-lg',
  md: 'text-base',
  sm: 'text-sm',
  xs: 'text-xs',
}

const textColors = {
  default: 'text-ui-black',
  primary: 'text-ui-primary',
}

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: keyof typeof sizes
  colorScheme?: keyof typeof textColors
}

export const Heading: React.FC<HeadingProps> = (props) => {
  const { as: Component = 'h2', size = '2xl', colorScheme = 'default', className, children } = props
  const headingClasses = clsx(
    'font-semibold font-mono',
    textColors[colorScheme],
    sizes[size],
    className,
  )

  return <Component className={headingClasses}>{children}</Component>
}
