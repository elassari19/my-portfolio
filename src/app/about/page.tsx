import React from 'react';

export default function AboutPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] mt-28 p-4 md:p-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          HICHAM EL ASSARI
        </h1>
        <h2 className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 mb-12">
          FULL-STACK ENGINEER
        </h2>

        {/* Profile Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b pb-2">
            PROFILE
          </h2>
          <div className="text-gray-700 dark:text-gray-400 space-y-4 text-lg">
            <p>
              As a Full-stack Engineer, I bring experience in building and
              maintaining high-performance web applications using cutting-edge
              technologies and best practices. With a proven track record of
              delivering complex projects on time and within budget, I excel in
              collaborating with cross-functional teams to drive innovation and
              achieve business goals.
            </p>
            <p>
              In addition, I am committed to fostering a culture of continuous
              learning and growth. Whether working independently or as part of a
              team, I am dedicated to delivering high-quality code that meets
              the needs of both clients and end-users.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b pb-2">
            SKILLS
          </h2>
          <div className="grid grid-cols-1 gap-3">
            <SkillBar skill="React.js/Next.js" level={90} />
            <SkillBar
              skill="Node.js, Express.js, Prisma, Drizzle, MySQL, MongoDB"
              level={85}
            />
            <SkillBar skill="Redux tool kit, RTK Query" level={80} />
            <SkillBar
              skill="Shad cn, MUI, Tailwind css, Bootstrap"
              level={95}
            />
          </div>

          <h3 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-200">
            LANGUAGES
          </h3>
          <div className="grid grid-cols-1 gap-3">
            <SkillBar skill="English" level={70} />
            <SkillBar skill="Arabic" level={95} />
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b pb-2">
            WORK EXPERIENCE
          </h2>

          <div className="space-y-8">
            {/* Current Position */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Full-stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Remote Freelance | Coral | 2023/08 – Current
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Take an idea from concept to completion, building the
                  user-friendly interface and the data processing.
                </li>
                <li>
                  Work independently or collaboratively to build new features
                  and functionalities for existing web applications.
                </li>
                <li>
                  Contribute to the maintenance and bug fixing of existing web
                  applications, ensuring smooth operation.
                </li>
              </ul>
            </div>

            {/* OMIC Position */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Full-stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Remote Full-time | OMIC | 2022/02 – 2023/08
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Collaborate with engineering and design teams to develop a
                  Healthcare Platform.
                </li>
                <li>
                  Developed a platform combining AI and human research to
                  generate efficient therapies and test therapies on digital
                  patients.
                </li>
                <li>
                  Developed a platform that allows clients to create, store,
                  manage, and share their code.
                </li>
                <li>
                  Using cutting-edge technologies like React.js with MUI v5,
                  Tailwind CSS, and Redux Toolkit.
                </li>
              </ul>
            </div>

            {/* IRON ION Position */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Full-stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Full-time | IRON ION | 2019/07 - 2022/01
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Developing internal applications to streamline operations
                </li>
                <li>
                  Develop LMS such as inventory management systems, production
                  monitoring dashboards
                </li>
                <li>
                  Build and maintain an e-commerce platform for online sales.
                </li>
              </ul>
            </div>

            {/* CommonShare Position */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Junior Full Stack Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Full-time | CommonShare | 2014/07 - 2019/01
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>
                  Learn the organization's overall strategies, business operates
                </li>
                <li>
                  Evaluated and improved existing apps under mentor supervision
                </li>
                <li>
                  Working closely with senior developers to learn best
                  practices, coding styles, and problem-solving approaches.
                </li>
                <li>
                  Taking on smaller, well-defined tasks or features within a
                  larger project.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b pb-2">
            EDUCATION
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                ALX
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                Software Engineer | 2022/09 - 2024/06
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                ALX is a tech training program focused on equipping individuals
                with the skills they need for success in the tech industry. ALX
                offers job-ready training in the tech fields.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Institute Meshket
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                Web Design | 2021/09
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Meshket Web Design is an online boot camp.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Institute Anoual
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                High School | 2011/06
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Skill bar component
function SkillBar({ skill, level }: { skill: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}
