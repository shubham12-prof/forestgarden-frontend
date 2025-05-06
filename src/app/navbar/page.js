"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [pathname]);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      toast.success("You have been logged out", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        draggable: true,
      });
    }
    router.push("/auth/login");
  };

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "GALLERY", path: "/gallery" },
    { name: "PROPERTY", path: "/property" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contactMain" },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.img
            src={process.env.NEXT_PUBLIC_CLOUDINARY_LOGO}
            alt="Logo"
            className="w-26 h-20 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 ease-in-out"
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            width={76}
            height={76}
          />
          <motion.span
            className="font-light text-sm text-green-600 dark:text-green-400 tracking-wide"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            FORESTGARDEN
          </motion.span>
        </Link>

        <nav className="hidden lg:flex gap-4 items-center relative">
          {!isLoggedIn &&
            navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-[15px] font-medium ${pathname === link.path
                    ? "text-green-600 dark:text-green-400"
                    : "text-gray-800 dark:text-gray-200"
                  } hover:text-green-500 transition-all duration-200`}
              >
                {link.name}
              </Link>
            ))}

          <button
            onClick={handleAuthClick}
            className="ml-4 bg-green-500 hover:bg-green-600 transition-all duration-200 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md"
          >
            {isLoggedIn ? "LOGOUT" : "LOGIN"}
          </button>
        </nav>

        <div className="lg:hidden flex items-center gap-4">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? (
              <X className="w-6 h-6 text-green-600" />
            ) : (
              <Menu className="w-6 h-6 text-green-600" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 px-6 pt-4 pb-6 shadow-md z-40 transition-all duration-300 ease-in-out ${navOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col gap-4">
          {!isLoggedIn &&
            navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setNavOpen(false)}
                className={`text-base font-medium ${pathname === link.path
                    ? "text-green-600 dark:text-green-400"
                    : "text-gray-800 dark:text-gray-200"
                  } hover:text-green-500`}
              >
                {link.name}
              </Link>
            ))}

          <button
            onClick={() => {
              handleAuthClick();
              setNavOpen(false);
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 mt-3 rounded-full text-sm font-semibold shadow"
          >
            {isLoggedIn ? "LOGOUT" : "LOGIN"}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
