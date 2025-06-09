/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  dataLayer: any[];
  gtag: (command: string, ...args: any[]) => void;
}
