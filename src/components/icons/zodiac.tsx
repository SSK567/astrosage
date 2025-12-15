import { cn } from "@/lib/utils";

const iconClass = "w-12 h-12 text-accent";

const IconWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "w-16 h-16 flex items-center justify-center",
      className
    )}
  >
    {children}
  </div>
);

export const AriesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 100" className={iconClass}>
      <path d="M25 75 V25 C25 10 40 10 50 25 C60 10 75 10 75 25 V75" fill="none" stroke="currentColor" strokeWidth="8" />
    </svg>
  </IconWrapper>
);
export const TaurusIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 100" className={iconClass}>
      <circle cx="50" cy="60" r="25" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M25 35 C40 10 60 10 75 35" fill="none" stroke="currentColor" strokeWidth="8" />
    </svg>
  </IconWrapper>
);
export const GeminiIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 100" className={iconClass}>
      <path d="M25 25 V75" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M75 25 V75" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M15 25 H85" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M15 75 H85" fill="none" stroke="currentColor" strokeWidth="8" />
    </svg>
  </IconWrapper>
);
export const CancerIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 100" className={iconClass}>
      <path d="M30 30 A 20 20 0 1 0 50 50" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M70 70 A 20 20 0 1 1 50 50" fill="none" stroke="currentColor" strokeWidth="8" />
    </svg>
  </IconWrapper>
);
export const LeoIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 100" className={iconClass}>
      <circle cx="35" cy="35" r="15" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M35 50 C50 60 70 75 70 50 V25" fill="none" stroke="currentColor" strokeWidth="8" />
    </svg>
  </IconWrapper>
);
export const VirgoIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 100" className={iconClass}>
      <path d="M20 25 V75" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M40 25 V75" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M60 25 V75 C60 50 75 50 75 75 L85 25" fill="none" stroke="currentColor" strokeWidth="8" />
    </svg>
  </IconWrapper>
);
export const LibraIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 100" className={iconClass}>
      <path d="M15 75 H85" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M15 60 H85" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M35 60 C35 40 65 40 65 60" fill="none" stroke="currentColor" strokeWidth="8" />
    </svg>
  </IconWrapper>
);
export const ScorpioIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 100" className={iconClass}>
      <path d="M20 25 V75" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M40 25 V75" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M60 25 V75 C70 85 80 85 90 75 L90 65" fill="none" stroke="currentColor" strokeWidth="8" />
    </svg>
  </IconWrapper>
);
export const SagittariusIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 100" className={iconClass}>
      <path d="M25 75 L75 25" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M50 25 H75 V50" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M40 60 L60 40" fill="none" stroke="currentColor" strokeWidth="8" />
    </svg>
  </IconWrapper>
);
export const CapricornIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 100" className={iconClass}>
      <path d="M25 40 V25 H40" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M25 40 C25 60 50 75 75 75 C65 65 60 50 75 40" fill="none" stroke="currentColor" strokeWidth="8" />
    </svg>
  </IconWrapper>
);
export const AquariusIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 100" className={iconClass}>
      <path d="M20 40 L35 55 L50 40 L65 55 L80 40" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M20 60 L35 75 L50 60 L65 75 L80 60" fill="none" stroke="currentColor" strokeWidth="8" />
    </svg>
  </IconWrapper>
);
export const PiscesIcon = ({ className }: { className?: string }) => (
  <IconWrapper className={className}>
    <svg viewBox="0 0 100 100" className={iconClass}>
      <path d="M25 20 C5 40 5 60 25 80" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M75 20 C95 40 95 60 75 80" fill="none" stroke="currentColor" strokeWidth="8" />
      <path d="M10 50 H90" fill="none" stroke="currentColor" strokeWidth="8" />
    </svg>
  </IconWrapper>
);
