import Image from "next/image";

import Logo from '../assets/logo.png'
export function Header() {
    return (
        <header className="w-full h-20 bg-slate-500">
            <div className="w-full max-w-[1246] px-[15px] mx-auto">
                <div>
                    <div className="flex">
                        <Image className="w-20 h-20" src={Logo} alt="Logo" />
                        <ul>
                            <li>
                                <button>
                                    <span>
                                        Para você
                                    </span>
                                </button>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}