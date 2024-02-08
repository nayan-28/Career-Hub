import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from ".././Utility/LocalStorage";
import { SlLocationPin } from "react-icons/sl";
import { MdCurrencyExchange } from "react-icons/md";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [displayJobs, setDisplayJobs] = useState([]);

  const [jobspply, setApplyJob] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(jobspply);
    } else if (filter === "remote") {
      const remoteJobs = jobspply.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onSiteJobs = jobspply.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onSiteJobs);
    }
  };
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setApplyJob(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <details className="dropdown">
        <summary className="m-1 btn">Filter</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <div>
        <ul>
          {displayJobs.map((job) => (
            <li key={job.id} className=" bg-slate-50 mt-5">
              <img className="w-30 h-30" src={job.logo} />
              <p className="font-bold">{job.job_title}</p>
              <p>{job.company_name}</p>
              <div className="mt-10 mr-20">
                <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                  {job.remote_or_onsite}
                </button>
                <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4  text-[#7E90FE]">
                  {job.job_type}
                </button>
              </div>
              <div></div>
              <div className="mt-4 flex">
                <h2 className="flex mr-4">
                  <SlLocationPin className="text-2xl"></SlLocationPin>
                  {job.location}
                </h2>
                <h2 className="flex">
                  <MdCurrencyExchange className="text-2xl"></MdCurrencyExchange>
                  {job.salary}
                </h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppliedJobs;
