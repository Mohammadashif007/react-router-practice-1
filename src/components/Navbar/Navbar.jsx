import React from "react";
import Link from "../Link/Link";

const Navbar = () => {
    const routerLinks = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Products", path: "/products" },
        { id: 5, name: "Contact", path: "/contact" },
    ];

    return (
        <div>
            <ul className="md:flex  gap-4 text-2xl">
                {routerLinks.map((link) => (
                    <Link key={link.id} link={link}></Link>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
