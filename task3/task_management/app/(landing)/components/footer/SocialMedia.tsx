import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/ui/svg/SocialMediaIcons";
const socialMedia = [
  { name: "Twitter", href: "#", icon: <TwitterIcon className="h-6 w-6" /> },
  { name: "Facebook", href: "#", icon: <FacebookIcon className="h-6 w-6" /> },
  { name: "Instagram", href: "#", icon: <InstagramIcon className="h-6 w-6" /> },
  { name: "LinkedIn", href: "#", icon: <LinkedInIcon className="h-6 w-6" /> },
];
export default function SocialMedia() {
  return (
    <>
      {socialMedia.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-400 hover:text-gray-300"
          aria-label={item.name}
        >
          {item.icon}
        </a>
      ))}
    </>
  );
}
