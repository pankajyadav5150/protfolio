import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Naye page par jaate hi upar se shuru ho, neeche se nahi.
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
