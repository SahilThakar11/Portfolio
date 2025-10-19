import Button from "./design/Button";
import Footer from "./Footer";
import { SendHorizonal } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="flex flex-col justify-center min-h-screen md:ml-[3rem] md:mr-[1.5rem] bg-background z-1"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-secondary mb-8">
            <span className="text-primary">05.</span> Connect With Me
          </h2>{" "}
          <p className="text-md text-center text-gray-200 mb-8 w-[70%] md:w-[50%] lg:text-lg lg:w-[30%] xl:w-[40%] mx-auto">
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <Button
            text="Email Me"
            link="mailto:thakars311@gmail.com"
            className="w-64"
            Icon={SendHorizonal}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
