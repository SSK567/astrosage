import { cn } from "@/lib/utils";

const iconClass = "w-6 h-6 inline-block text-accent";

export const SunIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(iconClass, className)}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m4.93 19.07 1.41-1.41" />
    <path d="m17.66 6.34 1.41-1.41" />
  </svg>
);

export const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(iconClass, className)}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

export const MercuryIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(iconClass, className)}
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M12 12v8" />
    <path d="M8 17h8" />
    <path d="M10 5a2 2 0 1 0 4 0" />
  </svg>
);

export const VenusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(iconClass, className)}
  >
    <circle cx="12" cy="9" r="5" />
    <path d="M12 14v8" />
    <path d="M8 19h8" />
  </svg>
);

export const MarsIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(iconClass, className)}
  >
    <circle cx="10" cy="14" r="6" />
    <path d="m14 4 6 6" />
    <path d="M16 4h4v4" />
  </svg>
);

export const JupiterIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(iconClass, className)}
  >
    <path d="M8 14h8" />
    <path d="M12 10v8" />
    <path d="M17 10c-2 0-3 1-4 2s-2 2-4 2" />
    <path d="M5 10c0-2.67 2-5 5-5s5 2.33 5 5" />
  </svg>
);

export const SaturnIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(iconClass, className)}
  >
    <path d="M12 14h8" />
    <path d="M12 10v8" />
    <path d="M18.12 10A8.47 8.47 0 0 0 4 10" />
  </svg>
);

export const UranusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(iconClass, className)}
  >
    <path d="M12 12v8" />
    <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    <path d="M4 12h4" />
    <path d="M16 12h4" />
    <path d="M12 4v4" />
  </svg>
);

export const NeptuneIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(iconClass, className)}
  >
    <path d="M12 12v8" />
    <path d="M8 17h8" />
    <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    <path d="M12 2l-2.2 4.8a1 1 0 0 1-1.6 0L6 2" />
  </svg>
);

export const PlutoIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(iconClass, className)}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 16v6" />
    <path d="M9 19h6" />
    <path d="M12 6a4 4 0 0 0-4 4" />
  </svg>
);
