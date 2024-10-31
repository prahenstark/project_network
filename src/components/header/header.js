import Link from "next/link";

const Header = ({ pageName }) => {
  //   const router = useRouter();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-lg">
      {/* Left: Page Name */}
      <h1 className="text-xl font-semibold capitalize">{pageName}</h1>

      {/* Right: Profile Avatar and Rounded Button */}
      <div className="flex items-center space-x-4">
        {/* Profile Avatar */}
        <Link
          href="/profile"
          className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden shadow-md"
        >
          <img
            src="/avatar.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </Link>

        {/* Rounded Button */}
        <button className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden shadow-md"></button>
      </div>
    </header>
  );
};

export default Header;
