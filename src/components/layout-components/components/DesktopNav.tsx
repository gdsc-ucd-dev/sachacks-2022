import routes from "@/data/routes";

const DesktopNav: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center justify-center">
      <ul className="flex items-center space-x-4 xl:space-x-6">
        {routes.map((route, index) => (
          <a
            key={index}
            href={route.href}
            className="transition-all hover:opacity-50"
          >
            {route.displayAs}
          </a>
        ))}
      </ul>
    </nav>
  );
};
export default DesktopNav;
