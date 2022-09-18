/**data */
import routes from "@/data/routes";

const DesktopNav: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center justify-center text-white">
      <ul className="flex items-center space-x-8 xl:space-x-16 pl-8">
        {routes.map((route, index) => (
          <a
            key={index}
            href={route.href}
            className="transition-all hover:opacity-50 capitalize"
          >
            {route.displayAs}
          </a>
        ))}
      </ul>
    </nav>
  );
};
export default DesktopNav;
