import React from 'react'

interface ClevioLogoProps {
  className?: string
  variant?: 'dark' | 'light' | 'accent'
  size?: 'sm' | 'md' | 'lg'
}

export default function ClevioLogo({ className = '', variant = 'dark', size = 'md' }: ClevioLogoProps) {
  const isLight = variant === 'light'
  const textColor = isLight ? 'text-white' : 'text-black'

  const sizeStyles = {
    sm: { text: 'text-xl', staff: 'text-[12px]' },
    md: { text: 'text-[25px]', staff: 'text-[14px]' },
    lg: { text: 'text-3xl', staff: 'text-[16px]' },
    xl: { text: 'text-4xl', staff: 'text-[18px]' },
  }[size]

  return (
    <div className={`inline-flex items-center gap-1.5 font-heading select-none ${textColor} ${className}`}>
      <span className={`font-bold tracking-tight lowercase inline-flex items-baseline ${sizeStyles.text}`}>
        <span>clev</span>
        {/* Mathematically precise vector letter 'i' from official brand asset:
            Total height 281, stem height 191 (matching x-height), star height 88, gap 2.
            Bottom aligns to text baseline, star sits directly atop stem. */}
        <svg
          viewBox="0 0 79 281"
          className="inline-block h-[0.78em] w-[0.22em] mx-[0.03em] align-baseline overflow-visible flex-none"
          fill="currentColor"
          aria-hidden="true"
        >
          {/* 4-point sparkle star */}
          <path d="M 39.5 0 C 39.5 24.3 57.1 44 75 44 C 57.1 44 39.5 63.7 39.5 88 C 39.5 63.7 21.9 44 4 44 C 21.9 44 39.5 24.3 39.5 0 Z" />
          {/* Lowercase stem */}
          <rect x="0" y="90" width="79" height="191" rx="2" />
        </svg>
        <span>o</span>
      </span>
      <span className={`font-bold tracking-normal ${sizeStyles.staff} ml-0.5`}>
        AI Staff
      </span>
    </div>
  )
}
