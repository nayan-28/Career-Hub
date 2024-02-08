import { useLoaderData, useParams } from "react-router-dom";
import {
  MdCurrencyExchange,
  MdOutlinePhone,
  MdOutlineMail,
  MdLocationPin,
} from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SlCalender } from "react-icons/sl";
import { saveJobApplication } from "../Utility/LocalStorage";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    location,
  } = job;
  const handleJobApply = () => {
    saveJobApplication(idInt);
    toast("You have applied successfully");
  };

  return (
    <div>
      <h2>Job details of:{job_title}</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <p className="py-2">
            <span className="font-bold">Job Description:</span>
            {job_description}
          </p>
          <p>
            <span className="font-bold">Job Responsibility:</span>
            {job_responsibility}
          </p>
          <p>
            <span className="font-bold">Educational Requirements:</span>
            {educational_requirements}
          </p>
          <p>
            <span className="font-bold">Experiences:</span>
            {experiences}
          </p>
        </div>
        <div className="border bg-gray-50">
          <h2 className="text-xl text-center font-extrabold">Jobs Details</h2>
          <p className="flex m-1">
            <MdCurrencyExchange className="m-1"></MdCurrencyExchange>
            <span className="font-bold">Salary:</span>
            {salary}
          </p>
          <p className="flex m-1">
            <SlCalender className="m-1"></SlCalender>
            <span className="font-bold">Job Title:</span>
            {job_title}
          </p>
          <p className="text-xl font-bold text-center">Contact Information</p>
          <p className="flex m-1">
            <MdOutlinePhone className="m-1"></MdOutlinePhone>
            <span className="font-bold">Phone:</span>
          </p>
          <p className="flex m-1">
            <MdOutlineMail className="m-1"></MdOutlineMail>
            <span className="font-bold">Email:</span>
            {job.contact_information.email}
          </p>
          <p className="flex m-1">
            <MdLocationPin className="m-1"></MdLocationPin>
            <span className="font-bold">Location:</span>
            {location}
          </p>
          <button
            onClick={handleJobApply}
            className="btn bg-indigo-500 hover:bg-violet-400 text-white w-full mt-6"
          >
            Apply
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
