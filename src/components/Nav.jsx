import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center mx-container">
        <a href="/">
          <img 
          src={headerLogo} 
          alt="logo"
          width={130}
          height={29}
        />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
        {
            navLinks.map(({label,href})=>(<li key={label}>
                <a href={href}
                className="font-montserrat leading-normal text-lg text-slate-500"
                >{label}</a>
            </li>))
        }
        </ul>
        <div className="hidden mx-lg:block">
            <img src={hamburger} alt="hamburger"
            height={25}
            width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
