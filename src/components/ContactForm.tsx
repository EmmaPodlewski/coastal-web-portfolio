import { EnvelopeIcon } from "@heroicons/react/24/outline";

interface IProps {
  name: string;
  linkedInUrl: string;
  email: string;
}
const ContactForm = ({ name, linkedInUrl, email }: IProps) => {
  return (
    <div className="w-1/4">
      <p className="font-bold uppercase">{name}</p>
      <div className="flex justify-center items-center gap-4 my-2">
        <a target="_blank" href={linkedInUrl}>
          <img src="./linkedin-white.png" />
        </a>
        <a target="_blank" href={`mailto:${email}`}>
          <div className="w-[28px]">
            <EnvelopeIcon />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
