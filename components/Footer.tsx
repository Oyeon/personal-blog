import { FaGithub } from 'react-icons/fa'; // Importing GitHub icon

export function Footer() {
  return (
    <footer className="bg-muted p-6 md:py-12 w-full">
      <div className="container max-w-7xl text-sm">
        <p>Oyeon Kwon's public academic website: 
          <a href="https://github.com/Oyeon/personal-blog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
            <FaGithub className="w-4 h-4 mr-1" /> source code
          </a>. Thank you for sharing the great material!
        </p>
      </div>
    </footer>
  );
}