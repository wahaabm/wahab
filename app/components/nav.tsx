import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

export function Navbar() {
    return (
        <nav className="lg:mb-16 mb-12 py-5 border-b-2 border-gray-300 dark:border-gray-700">
            <div className="flex  md:flex-row items-center justify-between">
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="text-3xl font-semibold tracking-tighter"
                    >
                        {metaData.title}
                    </Link>
                </div>
                <div className="items-center">
                    <ThemeSwitch />
                </div>
            </div>
        </nav>
    );
}
