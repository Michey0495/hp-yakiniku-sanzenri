"use client";

import { PhoneIcon } from "./section";

export function MobilePhoneBar() {
  return (
    <div className="mobile-phone-bar hidden max-md:block">
      <a
        href="tel:0154913695"
        className="flex items-center justify-center gap-3 py-2 text-sz-cream font-kaisei text-lg tracking-wider"
      >
        <PhoneIcon />
        <span>電話する</span>
      </a>
    </div>
  );
}
