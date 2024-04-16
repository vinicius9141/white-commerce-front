
import { SearchIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/solid'; // assumindo que está usando Heroicons

const Menu = () => {
  return (
    <nav className="bg-orange-200 p-4 flex justify-between items-center">
      {/* Logo and Menu Section */}
      <div className="flex items-center">
        <img src="/path-to-your-logo.png" alt="Logo" className="mr-4" />
        <ul className="flex">
          <li className="mr-6">
            <a href="/camisetas" className="text-orange-600 hover:text-orange-800">CAMISETAS</a>
          </li>
          <li className="mr-6">
            <a href="/moletons" className="text-orange-600 hover:text-orange-800">MOLETONS</a>
          </li>
          <li>
            <a href="/acessorios" className="text-orange-600 hover:text-orange-800">ACESSÓRIOS</a>
          </li>
        </ul>
      </div>

      {/* Search and Icons Section */}
      <div className="flex items-center">
        <div className="flex border-2 border-orange-600 rounded">
          <input type="text" className="px-4 py-2 w-80" placeholder="O que você procura?" />
          <button className="flex items-center justify-center px-4 border-l">
            <SearchIcon className="h-4 w-4 text-orange-600" />
          </button>
        </div>
        <div className="flex items-center ml-4">
          <UserIcon className="h-6 w-6 mx-2 text-orange-600 cursor-pointer" />
          <ShoppingCartIcon className="h-6 w-6 text-orange-600 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
