/**
 * GSAP configuration — register plugins once, re-export for convenience.
 */
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export { gsap, ScrollTrigger, SplitText, useGSAP };
