import type { ComponentProps } from 'react'

interface IButton extends ComponentProps<'button'> {}

export function Button(props: IButton) {
  return (
    <button
      className="flex items-center justify-between px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...props}
    />
  )
}
