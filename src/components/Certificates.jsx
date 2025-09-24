const Certificates = () => {
  const certificates = [
    {
      title: "UI/UX Design Specialization",
      file: "/certificates/Certificate_UX.pdf",
    },
    {
      title: "Meta Front-End Developer",
      file: "/certificates/Meta_FE.pdf",
    },
    {
      title: "React Development",
      file: "/certificates/Meta_React.pdf",
    },
    {
      title: "JavaScript Development",
      file: "/certificates/Javascript_Meta.pdf",
    },
    {
      title: "Version Control",
      file: "/certificates/Version_Control.pdf",
    },
  ];

  return (
    <section
      id="certificates"
      className="flex flex-col justify-center min-h-screen md:ml-[3rem] md:mr-[1.5rem] bg-background z-1 mb-[10rem]"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-semibold text-secondary mb-8">
          <span className="text-primary">05.</span> Certificates
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className=" rounded-xl overflow-hidden bg-transparent h-max transition duration-300"
            >
              <iframe
                src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-fit&view=fit`}
                title={cert.title}
                className="w-[425px] h-[325px] border-0"
                style={{
                  background: "white",
                }}
                scrolling="no"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
