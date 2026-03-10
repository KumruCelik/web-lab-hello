type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

const variants = {
  primary:   'bg-blue-600 text-white hover:bg-blue-700 border border-transparent',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 border border-transparent dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
  danger:    'bg-red-600 text-white hover:bg-red-700 border border-transparent',
  ghost:     'bg-transparent text-gray-700 hover:bg-gray-100 border border-gray-300 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-600',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-4 py-2 text-base rounded-lg',
  lg: 'px-6 py-3 text-lg rounded-xl',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        font-medium transition-all duration-200 cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {children}
    </button>
  )
}
