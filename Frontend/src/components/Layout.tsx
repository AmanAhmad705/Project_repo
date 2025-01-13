import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
// import { Lightbulb, Users, CheckSquare, LayoutDashboard, Moon, Sun } from 'lucide-react';

import { HiLightBulb as Lightbulb } from 'react-icons/hi'
import { HiUsers as Users } from 'react-icons/hi'
import { BiCheckSquare as CheckSquare } from 'react-icons/bi'
import { TbLayoutDashboard as LayoutDashboard } from 'react-icons/tb'
import { HiMoon as Moon } from 'react-icons/hi2'
import { HiSun as Sun } from 'react-icons/hi2'
import { useTheme } from '../context/ThemeContext';

const Layout: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <Lightbulb className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                  Founder Platform
                </span>
              </Link>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <NavLink to="/" icon={<LayoutDashboard className="h-5 w-5" />} current={location.pathname === "/"}>
                  Dashboard
                </NavLink>
                <NavLink to="/projects" icon={<Lightbulb className="h-5 w-5" />} current={location.pathname === "/projects"}>
                  Projects
                </NavLink>
                <NavLink to="/tasks" icon={<CheckSquare className="h-5 w-5" />} current={location.pathname === "/tasks"}>
                  Tasks
                </NavLink>
                <NavLink to="/community" icon={<Users className="h-5 w-5" />} current={location.pathname === "/community"}>
                  Community
                </NavLink>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Founder Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  current: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon, children, current }) => (
  <Link
    to={to}
    className={`inline-flex items-center px-1 pt-1 text-sm font-medium
      ${current 
        ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400' 
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
      }`}
  >
    {icon}
    <span className="ml-2">{children}</span>
  </Link>
);

export default Layout;