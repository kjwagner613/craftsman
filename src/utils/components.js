
import { layout } from "./layout.js";
import { combineClasses } from "./classUtils.js";
import { typography } from "./typography.js";
import { commonStyles } from "./commonStyles.js";

export const components = {
    picBlock: combineClasses("picblock", layout.centerRow),
    textBlock: combineClasses("textblock", layout.centerColumn),
    card: combineClasses("card", layout.centerColumn),
    cardHeader: combineClasses("card-header", layout.centerRow),
    cardShell: combineClasses("shadow-lg rounded-lg p-6", layout.centerColumn),
    solarButton: [
        "mt-5",
        "border-0",
        "text-[var(--secondary-brown)]",
        "font-[var(--font-main)]",
        "text-base",
        "outline-[3px] outline-[#0000]",
        "outline-offset-[1  .6em]",
        "transition-[.3s_linear,color_0s,background-color_0s]",
        "bg-[conic-gradient(from_90deg_at_3px_3px,#0000_90deg,var(--secondary-brown)_0)]",
        "p-[calc(.5em+0.45em)] px-[calc(.9em+0.45em)]",
        "user-select-none touch-manipulation",
    ].join(" "),
    fileUpdate: combineClasses(typography.fieldLink, commonStyles.tileBase),
};
