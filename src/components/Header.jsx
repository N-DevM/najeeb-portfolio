import EnvelopeIcon from '../assets/envelope.png';
import PhoneIcon from '../assets/phone.png';

const Header = () => {
  const navLinks = [
    { title: 'About Me', href: '#about-me' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' },
    { title: 'Recommendations', href: '#recommendations' },
  ];

  return (
    <header id="home" className="bg-[#7600bc] text-white p-6 md:p-8 -m-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl font-bold text-cyan-100">Najeeb Ullah</h1>
          <div className="mt-2 space-y-1">
            <div className="flex items-center justify-center md:justify-start text-sm italic">
              <img src={EnvelopeIcon} alt="Email" className="w-5 h-5 mr-2" />
              <span>najeeb_@devgmail.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-sm italic">
              <img src={PhoneIcon} alt="Phone" className="w-5 h-5 mr-2" />
              <span>+921364617836</span>
            </div>
          </div>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a href={link.href} className="text-lg text-gray-300 hover:text-white hover:underline font-medium transition duration-300">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;