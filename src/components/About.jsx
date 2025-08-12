// src/components/About.jsx

// Import the image of yourself
import Najeeb_Ullah from '../assets/Najeeb_Ullah.jpg';

const About = () => {
  return (
    <section id="about-me" className="py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">
      <div className="flex-shrink-0">
        <img 
          // Use the imported image variable here
          src={Najeeb_Ullah} 
          alt="Profile of Najeeb Ullah" 
          // Updated styling for a circular, modern profile picture
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
        />
      </div>
      <div className="text-center md:text-left">
        {/* The small image next to the name is removed for a cleaner design */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#7600bc] mb-4">
          Hi, I'm Najeeb-Ullah!
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          I build web applications and services with over 5 years of experience.
          I've utilized leading cloud platforms to deploy them and have experience incorporating AI features to make them smarter and more efficient.
        </p>
      </div>
    </section>
  );
};

export default About;