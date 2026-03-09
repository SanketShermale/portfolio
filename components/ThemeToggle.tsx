'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('system');
    } else {
      setTheme('dark');
    }
  };

  const getCurrentTheme = () => {
    if (theme === 'system') {
      return systemTheme;
    }
    return theme;
  };

  const getIcon = () => {
    const currentTheme = getCurrentTheme();
    if (currentTheme === 'dark') return '🌙';
    if (currentTheme === 'light') return '☀️';
    return '💻'; // System theme
  };

  const getTooltip = () => {
    if (theme === 'dark') return 'Switch to Light Mode';
    if (theme === 'light') return 'Switch to System Theme';
    return 'Switch to Dark Mode';
  };

  if (!mounted) {
    return (
      <div className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse">
        <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={handleThemeToggle}
        className={`
          relative p-3 rounded-xl transition-all duration-300 ease-in-out
          bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700
          hover:from-blue-100 hover:to-purple-100 dark:hover:from-gray-700 dark:hover:to-gray-600
          border border-gray-200 dark:border-gray-600
          shadow-lg hover:shadow-xl
          transform hover:scale-105 active:scale-95
          ${isAnimating ? 'animate-spin' : ''}
        `}
        title={getTooltip()}
        aria-label={getTooltip()}
      >
        <span
          className={`
            text-2xl transition-all duration-300 ease-in-out
            ${isAnimating ? 'scale-110' : 'scale-100'}
          `}
        >
          {getIcon()}
        </span>

        {/* Theme indicator dots */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
          <div className={`w-1 h-1 rounded-full transition-all duration-300 ${
            theme === 'light' ? 'bg-yellow-400 scale-125' : 'bg-gray-400 scale-75'
          }`} />
          <div className={`w-1 h-1 rounded-full transition-all duration-300 ${
            theme === 'system' ? 'bg-blue-400 scale-125' : 'bg-gray-400 scale-75'
          }`} />
          <div className={`w-1 h-1 rounded-full transition-all duration-300 ${
            theme === 'dark' ? 'bg-purple-400 scale-125' : 'bg-gray-400 scale-75'
          }`} />
        </div>
      </button>

      {/* Theme label */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          {theme === 'dark' ? 'Dark' : theme === 'light' ? 'Light' : 'System'}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
