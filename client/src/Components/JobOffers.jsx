/* eslint-disable react/prop-types */
import { useState } from "react";

const JobCard = ({ title, location, description, features }) => (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 m-4 flex-1 max-w-sm sm:w-full">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-500">{location}</p>
    <p className="text-gray-600 mt-2">{description}</p>
    <div className="grid grid-cols-2 gap-4 mt-4">
      {features.slice(0, 4).map((feature, index) => (
        <div key={index} className="flex items-center">
          <span className="text-teal-500 mr-2">✔</span>
          {feature}
        </div>
      ))}
    </div>
  
    <button className="mt-6 px-4 py-2 bg-[#2B8B8A] w-full text-white rounded-lg shadow hover:bg-teal-600 transition">
      Apply Now
    </button>
  </div>
  
);

const JobOffers = () => {
  const initialJobData = [
    {
      title: "Web Developer",
      location: "Bangalore",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Web Developer",
      location: "Bangalore",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Web Developer",
      location: "Bangalore",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
  ];

  const moreJobData = [
    {
      title: "Senior Web Developer",
      location: "Mumbai",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Frontend Developer",
      location: "Pune",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      title: "Backend Developer",
      location: "Chennai",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
  ];

  const [jobData, setJobData] = useState(initialJobData);
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
    setJobData([...jobData, ...moreJobData]);
  };

  const handleShowLess = () => {
    setShowMore(false);
    setJobData(initialJobData);
  };

  return (
    <>
    <div className="flex flex-col items-center">
  <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 ">
    {jobData.map((job, index) => (
      <JobCard key={index} {...job} />
    ))}
  </div>
 
</div>
<div className="flex justify-end mt-4">
{!showMore ? (
  <button
    className="text-teal-500 hover:underline"
    onClick={handleShowMore}
  >
    See More
  </button>
) : (
  <button
    className="text-teal-500 hover:underline"
    onClick={handleShowLess}
  >
    Show Less
  </button>
)}
</div>
</>

  );
};



export default JobOffers;