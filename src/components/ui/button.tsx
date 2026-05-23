import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  asChild = false,
  children,
  ...props
}) => {
  const baseClasses = 'rounded-none font-semibold transition-all focus:outline-none';
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }[size];
  const variantClasses = {
    primary: 'bg-[#5B0E1A] text-white gold-glow hover:bg-[#7B1728]',
    secondary: 'bg-[#D4B06A] text-[#5B0E1A] hover:bg-[#C7A46C]',
    glass: 'glass-burgundy text-white hover:shadow-lg',
  }[variant];

  const Component = asChild ? 'span' : 'button';
  return (
    <Component
      className={cn(baseClasses, sizeClasses, variantClasses, className)}
      {...(asChild ? {} : props)}
    >
      {children}
    </Component>
  );
};
