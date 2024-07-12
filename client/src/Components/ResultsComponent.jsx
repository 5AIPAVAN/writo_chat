import img from "./ourresults.png";
import JobOffer from "./JobOffers";
import Contactus from "./Contactus";
import Navbar from "./Navbar";

const Card = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-2xl p-6 m-4 flex-1">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 w-2/3">{description}</p>
  </div>
);

const Cards = () => {
  const cardData = [
    {
      title: "Immersive Exploration",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Seamless Matching",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      title: "Streamlined Communication",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center p-4">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

const ResultsComponent = () => {
  return (
    <>
    <Navbar/>
      <h2 className="text-3xl text-[#184948] font-bold ml-6 lg:ml-24 mt-10 text-center lg:text-left">
        Our Results
      </h2>
      <div className="flex flex-col lg:flex-row items-center bg-white px-6 lg:px-24 py-8 lg:py-8">
      
        <div className="flex flex-col lg:flex-row justify-center items-center w-full">
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4 lg:gap-24">
              <div className="text-center">
                <p className="text-4xl font-bold text-[#184948]">54</p>
                <p className="text-gray-600">
                  printing and typesetting industry. Lorem Ipsum has been
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#184948]">₹10,547</p>
                <p className="text-gray-600">
                  printing and typesetting industry. Lorem Ipsum has been
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#184948]">852</p>
                <p className="text-gray-600">
                  printing and typesetting industry. Lorem Ipsum has been
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-[#184948]">452</p>
                <p className="text-gray-600">
                  printing and typesetting industry. Lorem Ipsum has been
                </p>
              </div>
            </div>
            <button className="px-4 py-2 border border-[#184948] text-[#184948] rounded hover:bg-[#184948] hover:text-white transition mt-10 w-full ">
              Learn more
            </button>
          </div>
          <div className="flex-1 w-full mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <img
              src={img}
              alt="Results Illustration"
              className="w-full lg:w-3/4 h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center mt-5 mx-6 lg:mx-24">
        <p className="text-[#184948] mr-4">WHAT WE OFFER</p>
        <div className="flex-1 border-t border-black ml-6"></div>
      </div>
      <div className="lg:mr-14 lg:ml-14">
        <Cards />
      </div>
      <div className="flex items-center mt-5 mx-6 lg:mx-24">
        <p className="text-[#184948] mr-4 text-3xl">Latest Job Offer</p>
        <div className="flex-1 border-t border-black ml-6"></div>
      </div>
      <div className="lg:mr-20 lg:ml-20">
        <JobOffer />
      </div>
      <div className="mt-2 mb-8">
        <div className="flex flex-row gap-x-4 justify-center items-center mt-10">
          <p className="text-3xl text-[#ED7E0A] ">- - - - -</p>
          <h2 className="text-xl md:text-2xl text-[#ED7E0A] font-bold text-center">
            Having doubts
          </h2>
          <p className="text-3xl text-[#ED7E0A] ">- - - - -</p>
        </div>
        <div className="flex flex-row gap-x-4 justify-center items-center mt-4 mb-4">
          <h1 className="text-[#488B80] text-3xl">Query</h1>
        </div>
      </div>
      <div className="w-full">
        <Contactus />
      </div>
    </>
  );
};

export default ResultsComponent;