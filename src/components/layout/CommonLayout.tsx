import type { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";



const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default CommonLayout;