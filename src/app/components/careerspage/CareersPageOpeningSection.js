"use client";
import { useState } from 'react';

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

// Modal Component: Reusable modal for displaying job details
const Modal = ({ isOpen, onClose, jobDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{jobDetails.title}</h2>
        <p className="mb-2">Work: {jobDetails.work}</p>
        <p className="mb-2">Location: {jobDetails.location}</p>
        <p className="mb-2">Category: {jobDetails.category}</p>
        <p className="mb-4">Type: {jobDetails.type}</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
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
      work: 'On Site',
      location: 'Dhaka, Bangladesh',
      category: 'Game Development',
      type: 'Full Time',
    },
    {
      title: '3D Artist Trainee',
      work: 'On Site',
      location: 'Dhaka, Bangladesh',
      category: 'Game Development',
      type: 'Full Time',
    },
    {
      title: '3D Animator Trainee',
      work: 'On Site',
      location: 'Dhaka, Bangladesh',
      category: 'Game Development',
      type: 'Full Time',
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
                  work={job.work}
                  location={job.location}
                  category={job.category}
                  type={job.type}
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
