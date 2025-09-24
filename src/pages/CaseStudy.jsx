import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { caseStudies } from "../constants/index";
import { ChevronLeft } from "lucide-react";
import { useEffect } from "react";

const CaseStudy = () => {
  return (
    <>
      <CaseStudyHeader />
      <CaseStudyContent />
      <Footer />
    </>
  );
};

const CaseStudyContent = () => {
  const id = useParams().id;

  const selectCaseStudyById = () => {
    return caseStudies.find((caseStudy) => caseStudy.id === id);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const caseStudy = selectCaseStudyById();

  return (
    <section
      id="case-study"
      className="flex flex-col md:flex-row justify-start items-start min-h-screen md:ml-[3rem] md:mr-[1.5rem] bg-background z-1 pt-[70px]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 w-full">
        <h1 className="text-xl md:text-2xl lg:text-2xl font-bold text-primary mb-4">
          {caseStudy.title}
        </h1>
        <div>
          <CaseStudySection
            title="Project Overview"
            content={caseStudy.projectOverview}
          />
        </div>
        <Divider />
        <div>
          <CaseStudySection
            title="Problem Analysis"
            content={caseStudy.problemStatement}
          />
          <CaseStudySection
            title="User Interviews"
            content={caseStudy.userInterview}
          />
          <CaseStudySection
            title="Market Analysis"
            content={caseStudy.marketAnalysis}
          />
          <CaseStudySection
            title="Objectives/Solutions"
            content={caseStudy.solutions}
          />
        </div>
        <div>
          <CaseStudyImageSection
            title="Sketches"
            images={caseStudy.sketchesImgs}
          />
          <CaseStudyImageSection
            title="User Personas"
            images={caseStudy.personaImgs}
            xl={500}
          />
          <Divider />
          <CaseStudyImageSection
            title="Wireframes"
            images={caseStudy.wireframeImgs}
          />
          <Divider />
          <CaseStudyImageSection
            title="Prototype"
            images={caseStudy.prototypeImgs}
          />
        </div>
        <Divider />
        <div>
          <CaseStudySection
            title="User Testing"
            content={caseStudy.userTesting}
          />
        </div>
        <Divider />
        <div>
          <CaseStudySection
            title="Final Solution"
            content={caseStudy.finalSolution}
          />
          <CaseStudySection
            title="The Design brief"
            content={caseStudy.theDesignBrief}
          />
        </div>
      </div>
    </section>
  );
};

const CaseStudyHeader = () => {
  return (
    <header className="fixed w-full top-0 bg-opacity-90 backdrop-filter backdrop-blur-lg bg-[#0a192f] py-4 shadow-md md:shadow-2xl z-[100]">
      <div className="container mx-auto flex justify-center items-center px-4">
        <Link to="/" className="text-primary font-semibold flex flex-row gap-2">
          <ChevronLeft /> Back to Portfolio
        </Link>
      </div>
    </header>
  );
};

const CaseStudySection = ({ title, content }) => {
  return (
    <div className="flex flex-col w-full mt-5">
      <div
        className={`text-left pl-4 py-2 text-lg md:text-base font-medium transition duration-700 hover:text-secondary text-secondary bg-cyan-800/20 border-l-4 border-primary h-min w-full`}
      >
        <h2 className="text-xl font-semibold text-secondary">{title}</h2>
      </div>
      <div className="pl-4 py-2 w-full">
        <p className="text-sm text-gray-500 mt-1 mb-4">{content}</p>
      </div>
    </div>
  );
};

const CaseStudyImageSection = ({ title, images, xl }) => {
  return (
    <div className="flex flex-col w-full mt-5">
      <div
        className={`text-left pl-4 py-2 text-lg md:text-base font-medium transition duration-700 hover:text-secondary text-secondary bg-cyan-800/20 border-l-4 border-primary h-min w-full`}
      >
        <h2 className="text-xl font-semibold text-secondary">{title}</h2>
      </div>
      <div className="flex flex-wrap flex-row gap-4 mb-4 justify-center items-start w-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={title}
            className={`h-[180px] ${
              xl ? `xl:h-[${xl}px]` : "xl:h-[350px]"
            } object-cover rounded-md shadow-lg mt-5`}
          />
        ))}
      </div>
    </div>
  );
};

const Divider = () => {
  return <div className="h-[1px] w-full bg-gray-700"></div>;
};

export default CaseStudy;
