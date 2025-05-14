
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-birthday-light to-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold font-cursive text-birthday-pink mb-6">Oops!</h1>
        <p className="text-xl text-birthday-purple mb-8">
          Looks like this page got lost on the way to the birthday party!
        </p>
        <Button asChild className="bg-birthday-purple hover:bg-birthday-purple/80">
          <Link to="/">Back to the Celebration</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
