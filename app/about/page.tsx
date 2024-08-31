import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaGoogle, FaFilePdf } from 'react-icons/fa'; // Importing icons

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">About Me</h1>
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6">
          <Image
            src="/images/okwon-3d.png" // 여기에 본인의 이미지 경로를 입력하세요
            alt="Oyeon Kwon"
            width={200}
            height={200}
            className="rounded-full shadow-lg transform transition duration-500 hover:scale-110 mx-auto md:mx-0"
          />
          <div className="flex flex-col items-center md:items-start mt-4">
            <Link href="https://kr.linkedin.com/in/oyeon-kwon-133491263?original_referer=https%3A%2F%2Fwww.google.com%2F" legacyBehavior>
              <a className="text-blue-500 hover:underline mb-2 flex items-center" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </Link>
            <Link href="/images/2024-cv.pdf" legacyBehavior>
              <a className="text-blue-500 hover:underline mb-2 flex items-center" target="_blank" rel="noopener noreferrer">
                <FaFilePdf className="mr-2" /> CV
              </a>
            </Link>
            <Link href="https://github.com/Oyeon" legacyBehavior>
              <a className="text-blue-500 hover:underline mb-2 flex items-center" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-2" /> GitHub
              </a>
            </Link>
            <Link href="https://scholar.google.com/citations?user=SNOHy_gAAAAJ&hl=en" legacyBehavior>
              <a className="text-blue-500 hover:underline mb-2 flex items-center" target="_blank" rel="noopener noreferrer">
                <FaGoogle className="mr-2" /> Google Scholar
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <p className="text-lg mb-2">
            Hello! I'm Oyeon, a passionate developer with a love for creating innovative solutions. 
            I have experience in various technologies including Python, JavaScript, and more.
          </p>
          <p className="text-lg mb-4">
            In my free time, I enjoy hiking, reading, and exploring new technologies. 
            Feel free to reach out to me through my social media channels or email.
          </p>
        </div>
      </div>
    </div>
  );
}