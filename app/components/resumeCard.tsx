import React from 'react'
import { Link } from 'react-router'
import type { Resume } from '../types'

const ResumeCard = ({resume}: {resume: Resume}) => {
  return (
      <Link to={`/resume/${resume.id}`}>
        <div className="resume-card">
          <img src={resume.imagePath} alt={resume.companyName} />
          <h3>{resume.companyName}</h3>
          <p>{resume.jobTitle}</p>
        </div>
      </Link>
  )
}

export default ResumeCard
