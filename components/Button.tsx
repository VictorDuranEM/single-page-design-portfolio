import React from 'react';
import { cva, VariantProps } from "class-variance-authority";

const link = cva("font-bold leading-7 text-white inline-block py-3.5 px-11 rounded-full", {
  variants: {
    intent: {
      primary: "bg-dark hover:bg-purple",
      secondary: "bg-red hover:bg-orange",
    },
  },
    defaultVariants: {
      intent: "primary",
    },
})

export interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof link> {}

export const Button:React.FC<ButtonProps> = ({className, intent, ...props}) => (
  <a href='#' className={link({ intent, class: className })} {...props}>Free Consultation</a>
);
  