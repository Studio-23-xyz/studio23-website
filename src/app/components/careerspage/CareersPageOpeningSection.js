"use client";
import { X } from "lucide-react";
import { useRef, useState } from 'react';


// JobRow Component: Reusable component for job listings
const JobRow = ({ title, work, location, category, type, onSeeDetails }) => (
  <tr className="border-b-2 border-studio_blue flex flex-col md:flex-row md:table-row">
    <th className="text-[18px] md:text-[24px] font-bold py-5">{title}</th>
    <th className="text-[14px] md:text-[16px] font-bold py-1 md:py-5">{work}</th>
    <th className="text-[14px] md:text-[16px] font-thin py-1 md:py-5">{location}</th>
    <th className="text-[14px] md:text-[16px] font-thin py-1 md:py-5">{category}</th>
    <th className="text-[14px] md:text-[16px] font-thin py-1 md:py-5">{type}</th>
    <th className="py-2 md:py-5">
      <button
        className="bg-white text-black text-[14px] md:text-[16px] px-5 py-2 hover:bg-studio_blue transition duration-200 rounded-xl"
        onClick={onSeeDetails}
      >
        See Details
      </button>
    </th>
  </tr>
);

// Modal Component: Reusable modal for displaying job details with scroll and click-outside close functionality
const Modal = ({ isOpen, onClose, jobDetails }) => {
  const modalRef = useRef(); // To track the modal element

  // Function to close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-modal_blue bg-opacity-70 flex items-center justify-center"
      onClick={handleOutsideClick} // Listen for outside clicks
    >
      <div
        ref={modalRef}
        className="bg-mordern_black rounded-lg p-8 w-[90%] 2xl:w-[60%] max-h-[80vh] overflow-y-auto" // Scrollable modal
      >
        <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-bold mb-4">{jobDetails.title}</h1>
        <X className="text-red-500 hover:text-white" onClick={onClose}/>
        </div>
        
        <h3 className="text-lg md:text-xl font-semibold mb-2">Job Location:</h3>
        <p className="mb-4">{jobDetails.location}</p>

        <h3 className="text-lg md:text-xl font-semibold mb-2">Salary:</h3>
        <p className="mb-4">{jobDetails.salary}</p>

        <h3 className="text-lg md:text-xl font-semibold mb-2">Job Description:</h3>
        <p className="mb-4">{jobDetails.description}</p>

        <h3 className="text-lg md:text-xl font-bold mb-2">Key Responsibilities:</h3>
        <ul className="list-disc pl-5 mb-4">
          {jobDetails.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="text-lg md:text-xl font-bold mb-2">Requirements:</h3>
        <ul className="list-disc pl-5 mb-4">
          {jobDetails.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="text-lg md:text-xl font-bold mb-2">Preferred Qualifications:</h3>
        <ul className="list-disc pl-5 mb-4">
          {jobDetails.qualifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button
          className="bg-studio_blue text-white font-semibold px-4 py-2 rounded hover:bg-white hover:text-black"
          onClick={() => window.open(jobDetails.applyLink, '_blank')}
        >
          Apply Now
        </button>
        
      </div>
    </div>
  );
};

const CareersPageOpeningSection = () => {
  const [activeModal, setActiveModal] = useState(null); // State to manage active modal

  const jobOpenings = [
    {
      title: 'Game Developer Trainee',
      location: 'Mirpur DOHS, Dhaka, Bangladesh',
      salary: 'BDT 10,000 / Month',
      description: 'Studio 23 is looking for a passionate and experienced Senior Game Developer to join our growing team. In this role, you will work closely with designers, artists, and other developers to build innovative and immersive gaming experiences. You’ll take charge of leading development cycles, writing efficient code, and mentoring junior developers to deliver high-quality games. As a part of the team, you’ll contribute to creating our next major release, Silent Scream 2, and future projects.',
      responsibilities: ['Lead the development of complex game systems from concept to release', 'Collaborate with cross-functional teams to achieve seamless gameplay integration', 'Optimize performance and memory usage across platforms (PC/Console)',
        'Mentor and provide technical guidance to junior team members','Write clean, maintainable, and efficient code',
      ],
      requirements: ['Lead the development of complex game systems from concept to release', 'Collaborate with cross-functional teams to achieve seamless gameplay integration', 'Optimize performance and memory usage across platforms (PC/Console)',
        'Mentor and provide technical guidance to junior team members','Write clean, maintainable, and efficient code',
      ],
      qualifications: ['Lead the development of complex game systems from concept to release', 'Collaborate with cross-functional teams to achieve seamless gameplay integration', 'Optimize performance and memory usage across platforms (PC/Console)',
        'Mentor and provide technical guidance to junior team members','Write clean, maintainable, and efficient code',
      ],
      applyLink: 'https://form.jotform.com/242655786742065',
    },
  ];

  // Function to close modal
  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="mb-8 md:mb-16 mt-5 md:mt-8 md:px-14 px-4">
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="flex justify-center">
          <h1 className="text-[25px] md:text-[30px] font-black">Here are our openings!</h1>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[320px] md:min-w-[800px]">
            <tbody>
              {jobOpenings.map((job, index) => (
                <JobRow
                  key={index}
                  title={job.title}
                  work="On Site"
                  location={job.location}
                  category="Game Development"
                  type="Full Time"
                  onSeeDetails={() => setActiveModal(index)} // Open modal for the clicked job
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for each job */}
      {jobOpenings.map((job, index) => (
        <Modal
          key={index}
          isOpen={activeModal === index}
          onClose={closeModal}
          jobDetails={job}
        />
      ))}
    </div>
  );
};

export default CareersPageOpeningSection;
