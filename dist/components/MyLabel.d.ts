/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Text with the description
     */
    label: string;
    /**
     * Long of the button
     */
    size: "normal" | "h1" | "h2" | "h3";
    color: "primary" | "secondary" | "tertiary";
    allCaps?: boolean;
    /**
     * What background color to use
     */
    fontColor?: string;
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
