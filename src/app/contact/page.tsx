import React from 'react';
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { TbWorld } from 'react-icons/tb';

function page() {
  return (
    <section className="mt-40 grid items-center text-center gap-12 max-w-full md:max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b pb-2">
        CONTACT
      </h2>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <MdPhone className="text-gray-600 dark:text-gray-400 text-xl" />
          <span className="text-gray-700 dark:text-gray-300">
            +212 615 638 49
          </span>
        </div>
        <div className="flex items-center gap-3">
          <MdEmail className="text-gray-600 dark:text-gray-400 text-xl" />
          <a
            href="mailto:elassari19@gmail.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            elassari19@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaGithub className="text-gray-600 dark:text-gray-400 text-xl" />
          <a
            href="https://github.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Github
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaLinkedin className="text-gray-600 dark:text-gray-400 text-xl" />
          <a
            href="https://linkedin.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Linkedin
          </a>
        </div>
        <div className="flex items-center gap-3">
          <TbWorld className="text-gray-600 dark:text-gray-400 text-xl" />
          <a
            href="https://www.reallygreatsite.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            www.reallygreatsite.com
          </a>
        </div>
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-gray-600 dark:text-gray-400 text-xl mt-1" />
          <span className="text-gray-700 dark:text-gray-300">
            hay benkiren rue 2 no 15,
            <br />
            Morocco, Tangier
          </span>
        </div>
      </div>
    </section>
  );
}

export default page;
