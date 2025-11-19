import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  background?: 'white' | 'gray' | 'dark' | 'primary'
}

export function Section({ 
  children, 
  className = '', 
  containerClassName = '',
  background = 'white' 
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-background-gray',
    dark: 'bg-background-dark',
    primary: 'bg-primary'
  }

  return (
    <section className={`${backgrounds[background]} ${className}`}>
      <div className={`container-custom ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}
