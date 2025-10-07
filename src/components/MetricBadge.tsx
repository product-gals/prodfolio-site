


interface MetricBadgeProps {
  type?: 'positive' | 'neutral' | 'negative';
  className?: string;
  children: React.ReactNode;
  isDemoPreview?: boolean;
}

const MetricBadge = ({ type = 'positive', className = '', children, isDemoPreview = false }: MetricBadgeProps) => {
  const styles = {
    positive: 'bg-green-50 text-green-700 border border-green-200',
    neutral: 'bg-blue-50 text-blue-700 border border-blue-200',
    negative: 'bg-red-50 text-red-700 border border-red-200'
  };

  return (
    <span 
      className={`inline-flex items-center ${isDemoPreview ? 'px-1.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'} rounded-md font-medium ${styles[type]} ${className}`}
    >
      {children}
    </span>
  );
};

export default MetricBadge;
