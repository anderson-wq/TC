interface PageHeaderProps {
    title: string;
    subtitle?: string; 
  }
  
  const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
    return (
      <div className="md:flex hidden flex-row justify-between mt-5">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        </div>
        {subtitle && (
          <div className="text-gray-600">
            {title} - <span className="font-semibold">{subtitle}</span>
          </div>
        )}
      </div>
    );
  };
  
  export default PageHeader;
  