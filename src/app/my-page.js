import Link from "next/link";

export default function Page() {
  const projects = [
    {
      name: "Atlas",
      url: "https://atlashq.net",
      description: "A free jamb practice software.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffff8] text-gray-900 px-5 py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <header className="mb-12 pb-4 pt-8 border-b border-gray-300 grid">
          <div className="mb-4 grid gap-1">
            <h1 className="text-5xl text-gray-800 font-bold">Temidayo O.</h1>
            <div className="flex justify-between">
              <div>
                <p className="text-gray-600">
                  Programmer, Medical Student, Teacher, Writer, Book Wurm
                </p>
              </div>
              {/* <div className="flex gap-3 justify-end">
                <p className="">
                  <a
                    href="mailto:samuelolawoyin3@gmail.com"
                    className="text-blue-800"
                  >
                    mail
                  </a>
                </p>
                <p className="">
                  <a
                    href="https://github.com/tsolawoyin"
                    className="text-blue-800"
                  >
                    github
                  </a>
                </p>
              </div> */}
            </div>
          </div>
          {/* <p className="text-lg text-gray-700 leading-relaxed">
            A brief introduction about yourself. What you do, what you're
            interested in, or anything else you'd like people to know when they
            land on your page.
          </p> */}
          <div className="grid">
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 hover:underline transition-all"
            >
              Programming
            </Link>
            <Link
              href={"#"}
              className="text-gray-700 hover:text-gray-900 hover:underline transition-all"
            >
              Medicine
            </Link>
            <Link
              href={"#"}
              className="text-gray-700 hover:text-gray-900 hover:underline transition-all"
            >
              History
            </Link>
            <Link
              href={"#"}
              className="text-gray-700 hover:text-gray-900 hover:underline transition-all"
            >
              Study Tips
            </Link>
          </div>
        </header>

        {/* Projects/Links Section */}
        <nav className="space-y-3">
          <h3 className="text-3xl">Projects</h3>
          {projects.map((project, index) => (
            <div key={index} className="group">
              <a
                href={project.url}
                target="_blank"
                className="inline-block text-blue-600 hover:text-blue-800 underline text-lg font-medium"
              >
                {project.name}
              </a>
              <span className="text-gray-600 ml-2">
                - {project.description}
              </span>
            </div>
          ))}
        </nav>
        <footer className="mt-16 pt-8 border-t border-gray-200 flex justify-center gap-4">
          <p className="text-gray-600 text-sm">
            <a href="mailto:your.email@example.com">Mail </a>
          </p>
          <p className="text-gray-600 text-sm">
            <a href="https://github.com/tsolawoyin">Github</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
