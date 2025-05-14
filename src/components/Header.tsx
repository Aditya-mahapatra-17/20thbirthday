
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
}

const Header = ({ title, showBackButton = true }: HeaderProps) => {
  return (
    <header className="py-4 px-6 flex items-center justify-between">
      {showBackButton ? (
        <Link to="/" className="flex items-center text-sm font-medium">
          <ArrowLeft size={18} className="mr-1" /> Back Home
        </Link>
      ) : (
        <div></div>
      )}
      
      {title && <h2 className="text-lg md:text-xl font-medium">{title}</h2>}
      
      <div className="w-8"></div> {/* Spacer for balance */}
    </header>
  );
};

export default Header;
