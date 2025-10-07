import { ReactNode } from "react";
interface PageHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  addon?: ReactNode; // e.g., Beta badge
  className?: string;
}
export default function PageHeader({
  title,
  subtitle,
  addon,
  className
}: PageHeaderProps) {
  return <div className={("rounded-2xl bg-white border p-6 md:p-8 shadow-soft " + (className ?? "")).trim()}>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl md:text-3xl font-semibold text-navy mb-2">{title}</h1>
        {addon}
      </div>
      {subtitle && <p className="text-sm text-prodfolio-text-secondary md:text-sm">{subtitle}</p>}
    </div>;
}