import FooterComponents from "@/components/custom/Footer.components";
import NavbarComponents from "@/components/custom/Navbar.components";
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    return (
        <div className="main-layout">
            <NavbarComponents />
            {children}
            <FooterComponents />
        </div>
    )
}