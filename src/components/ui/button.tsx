import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'link' | 'ghost' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'icon' | 'default';
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

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      className: cn(baseClasses, sizeClasses, variantClasses, className, child.props.className),
      ...props
    });
  }

  return (
    <button
      className={cn(baseClasses, sizeClasses, variantClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
};
