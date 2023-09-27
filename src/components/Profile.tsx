import Tags from "./UI/Tags";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

interface IProps {
  image: string;
  name: string;
  job: string;
  description: string;
  linkedInUrl: string;
  githubUrl: string;
  email: string;
  skillsFrontEnd: string[];
  backEnd: string[];
  api: string[];
  skillsDb?: string[];
}
const Profile = ({
  image,
  name,
  job,
  description,
  linkedInUrl,
  githubUrl,
  email,
  skillsFrontEnd,
  backEnd,
  api,
  skillsDb,
}: IProps) => {
  return (
    <div
      className={`${
        name === "Emma Podlewski" && "flex-row-reverse"
      } flex flex-wrap gap-6 items-center justify-center mx-10 mb-6`}
    >
      <img
        className="rounded-full hidden md:block w-[150px]"
        src={image}
        alt="Alex Baizeau profile picture"
      />
      <div className="text-center w-1/3">
        <h2 className="is-small-caps has-text-weight-bold text-white">
          {name}
        </h2>
        <h3 className="text-purple font-bold text-left mb-1">
          <i>{job}</i>
        </h3>
        <p className="text-black text-justify mb-4">{description}</p>
        <div className="flex gap-4 items-center justify-center">
          <a target="_blank" href={linkedInUrl}>
            <img className="w-[28px]" src="./linkedin.png" id="icon-linkedin" />
          </a>
          <a target="_blank" href={githubUrl}>
            <img
              className="w-[28px]"
              id="icon-github"
              src=" ./github-mark.png"
            />
          </a>
          <a target="_blank" href={`mailto:${email}`} className="w-[28px]">
            <EnvelopeIcon />
          </a>
        </div>
      </div>
      <div className="w-1/3">
        <Tags skills={skillsFrontEnd} color="bg-tag-blue" />
        <Tags skills={backEnd} color="bg-tag-green" />
        <Tags skills={api} color="bg-tag-red" />
        {skillsDb && <Tags skills={skillsDb} color="bg-tag-yellow" />}
      </div>
    </div>
  );
};

export default Profile;
