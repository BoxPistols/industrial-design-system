import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import {cva, type VariantProps} from "class-variance-authority";
import {cn} from "../../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-white hover:bg-primary-600",
        outline:
          "border border-primary-500 text-primary-500 hover:bg-primary-50",
        ghost: "text-primary-500 hover:bg-primary-50",
        link: "text-primary-500 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends Omit<MuiButtonProps, "variant" | "size">,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, ...props}, ref) => {
    // MUIのvariantにマッピング
    const getMuiVariant = () => {
      switch (variant) {
        case "default":
          return "contained";
        case "outline":
          return "outlined";
        case "ghost":
        case "link":
          return "text";
        default:
          return "contained";
      }
    };

    // MUIのsizeにマッピング
    const getMuiSize = () => {
      switch (size) {
        case "sm":
          return "small";
        case "md":
          return "medium";
        case "lg":
          return "large";
        default:
          return "medium";
      }
    };

    return (
      <MuiButton
        ref={ref}
        className={cn(buttonVariants({variant, size, className}))}
        variant={getMuiVariant()}
        size={getMuiSize()}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export {Button};
export type {buttonVariants};
