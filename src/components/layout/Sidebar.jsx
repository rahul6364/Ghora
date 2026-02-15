import { NavLink } from "react-router-dom";

function Sidebar() {
  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Cases", path: "/cases" },
    { name: "Analytics", path: "/analytics" },
    { name: "Settings", path: "/settings" }
  ];

  return (
    <aside className="w-64 bg-[#1E1B4B] text-white flex flex-col p-6">
      <div className="text-2xl font-bold mb-10 tracking-wide">
        GHORA
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition-all duration-200
              ${
                isActive
                  ? "bg-[#7C3AED] shadow-md"
                  : "hover:bg-[#312E81]"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto text-xs text-gray-400 pt-8">
        Fraud Intelligence System v1.0
      </div>
    </aside>
  );
}

export default Sidebar;
