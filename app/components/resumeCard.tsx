import React from "react";
import { Link } from "react-router";
import type { Resume } from "../types";
import ScoreCircle from "./scoreCircle";

const ResumeCard = ({ resume }: { resume: Resume }) => {
  return (
    <Link
      to={`/resume/${resume.id}`}
      className="resume-card animate-in fade-in duration-1000"
    >
      <div className="resume-card-header">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">{resume.companyName}</h2>
          <h3 className="text-lg break-words text-grey-500">{resume.jobTitle}</h3>
        </div>
        <div className=" flex-shrink-0">
        <ScoreCircle score={resume.feedback.overallScore} />
      </div>
      </div>
    </Link>
  );
};

export default ResumeCard;
