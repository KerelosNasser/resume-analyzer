import React, { useState, type FormEvent } from "react";
import Navbar from "~/components/Navbar";

const Upload = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusText, setStatusText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {};

  return (
    <main className=" bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Smart Feedback for your Future Job</h1>
          {isProcessing ? (
            <>
              <h2>{statusText}</h2>
              <img
                src="/images/resume-scan.gif"
                alt="resume-scanner"
                className="w-full"
              />
            </>
          ) : (
            <>
              <h2>Drop your Resume for ATS score & imporvemnt tips</h2>
            </>
          )}
          {!isProcessing && (
            <form
              id="upload-form"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 mt-4"
            >
              <div className="form-div">
                <label htmlFor="company-name">Company Name</label>
                <input type="text" name="company-name" id="company-name" placeholder="Company Name" />
              </div>
              <div className="form-div">
                <label htmlFor="job-title">Job Title</label>
                <input type="text" name="job-title" id="job-title" placeholder="Job Title" />
              </div>

              <div className="form-div">
                <label htmlFor="job-description">Job Description</label>
                <textarea rows={5} name="job-description" id="job-description" placeholder="Job Description" />
              </div>
              <div className="form-div">
                <label htmlFor="uploader">upload Resume</label>
                <div>uploader</div>
              </div>
              <button className="primary-button" type="submit">
                  Analyze
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Upload;
