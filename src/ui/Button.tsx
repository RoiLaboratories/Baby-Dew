import { cva, type VariantProps } from "class-variance-authority";
import cn from "../utils/cn";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  to?: string;
}

const buttonVariants = cva(
  "rounded-md transition-all focus:outline-none focus:scale-[0.98] duration-300 ease-in-out cursor-pointer flex justify-center gap-x-2 items-center whitespace-nowrap h-fit disabled:cursor-not-allowed disabled:opacity-50 font-bold",
  {
    variants: {
      variant: {
        primary: "bg-white text-black border-secondary border-3",
        primary_invert:
          "bg-white text-black border-black hover:bg-black hover:text-white border-3",
        primary_outline:
          "hover:bg-white hover:text-black border-white border-3 text-white hover:border-secondary bg-black",
        secondary:
          "bg-[#eba08c] text-black border-secondary border-3 hover:bg-black  hover:text-white",
        secondary_outline:
          "hover:bg-white focus:ring ring-offset-1 focus:ring-[#026ecf] hover:text-[#026ecf] border-[#026ecf] border-3 text-white hover:border-white",
      },
      size: {
        xs: "text-xs px-2.5 py-1",
        sm: "text-xs px-2.5 py-1 md:px-3 md:py-1.5",
        md: "text-base px-4 py-2",
        //py-1
        lg: "text-lg px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

const Button = ({
  children,
  className,
  variant,
  size,
  to,
  ...props
}: ButtonProps) => {
  if (to)
    return (
      <a
        target="_blank"
        referrerPolicy="no-referrer"
        href={to}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </a>
    );

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
