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
        <h1 className="text-2xl font-bold mb-4">{jobDetails.title}</h1>
        <h3 className="mb-2">Job Location: {jobDetails.location}</h3>
        <h3 className="mb-2">Salary: {jobDetails.salary}/month</h3>
        <p className="mb-4">Job Description: {jobDetails.description}</p>
        
        <h3 className="mb-2 font-bold">Key Responsibilities:</h3>
        <ul className="list-disc pl-5 mb-4">
          {jobDetails.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>

        <h3 className="mb-2 font-bold">Requirements:</h3>
        <ul className="list-disc pl-5 mb-4">
          {jobDetails.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>

        <h3 className="mb-2 font-bold">Preferred Qualifications:</h3>
        <ul className="list-disc pl-5 mb-4">
          {jobDetails.qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li>
          ))}
        </ul>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded mr-4"
          onClick={onClose}
        >
          Close
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

const CareersPageOpeningSection = () => {
  const [activeModal, setActiveModal] = useState(null); // State to manage active modal

  // Updated jobOpenings with additional fields
  const jobOpenings = [
    {
      title: 'Game Developer Trainee',
      work: 'On Site',
      location: 'Dhaka, Bangladesh',
      category: 'Game Development',
      type: 'Full Time',
      salary: '20,000',
      description: 'This is a training position for game developers who are eager to learn and grow.',
      responsibilities: [
        'Collaborate with the development team.',
        'Assist in the creation of game systems.',
        'Support debugging and testing efforts.',
      ],
      requirements: [
        'Basic knowledge of game development tools.',
        'Good communication skills.',
      ],
      qualifications: [
        'Bachelor’s degree in Computer Science or related field.',
        'Prior experience in Unity or Unreal Engine is a plus.',
      ],
    },
    {
      title: '3D Artist Trainee',
      work: 'On Site',
      location: 'Dhaka, Bangladesh',
      category: 'Game Development',
      type: 'Full Time',
      salary: '18,000',
      description: 'Join us as a 3D artist trainee and bring your creative skills to life.',
      responsibilities: [
        'Work with the art team to create 3D models.',
        'Assist with texturing and animation tasks.',
        'Ensure models meet quality and design standards.',
      ],
      requirements: [
        'Knowledge of 3D modeling software like Blender or Maya.',
        'Understanding of textures and lighting.',
      ],
      qualifications: [
        'Degree or certification in 3D art or related field.',
        'Portfolio of previous 3D work.',
      ],
    },
    {
      title: '3D Animator Trainee',
      work: 'On Site',
      location: 'Dhaka, Bangladesh',
      category: 'Game Development',
      type: 'Full Time',
      salary: '18,000',
      description: 'As a 3D Animator Trainee, you will learn and contribute to our animation projects.',
      responsibilities: [
        'Create animations for characters and environments.',
        'Work closely with the animation lead.',
        'Ensure animations are smooth and realistic.',
      ],
      requirements: [
        'Basic knowledge of animation principles.',
        'Familiarity with animation software like Blender or Maya.',
      ],
      qualifications: [
        'Bachelor’s degree in Animation or related field.',
        'Experience with rigging and animating is a plus.',
      ],
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
