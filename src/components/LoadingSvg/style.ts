import { cva } from "class-variance-authority";

export const outPath = cva("fill", {
  variants: {
    type: {
      teal: "fill-[#FFFFFF4D] dark:fill-[#3741514D]",
      red: "fill-[#DC26264D] dark:fill-[#FFFFFF4D]",
      neutral: "fill-[#0000004D] dark:fill-[#FFFFFF4D]",
      inactive: "",
      tertiary: "fill-[#0000004D] dark:fill-[#FFFFFF4D]",
    },
  },
  defaultVariants: {
    type: "teal",
  },
});

export const inPath = cva("fill", {
  variants: {
    type: {
      teal: "fill-white dark:fill-gray-700",
      red: "fill-[#DC2626] dark:fill-white",
      neutral: "fill-gray-900 dark:fill-white",
      inactive: "",
      tertiary: "fill-gray-900 dark:fill-white",
    },
  },
  defaultVariants: {
    type: "teal",
  },
});
