import React from 'react';

export const SidebarComponent = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">Travel Plans</div>
      <nav className="flex flex-col mt-4">
        <a
          href="/inicio"
          className="py-2 px-4 hover:bg-gray-700 transition-colors"
        >
          Dashboard
        </a>
        <a
          href="/create"
          className="py-2 px-4 hover:bg-gray-700 transition-colors"
        >
          Create
        </a>
      </nav>
    </div>
  );
};