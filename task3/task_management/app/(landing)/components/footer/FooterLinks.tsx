import footerLinks from "@/app/(landing)/constants/footerLinks";
export default function FooterLinks({range}: {range: string}) {
    const [start, end] = range.split(',').map(Number);

  return (
    <>
      {footerLinks.slice(start, end).map((section) => (
        <div key={section.title}>
          <h3 className="text-md font-semibold leading-6 text-white">
            {section.title}
          </h3>
          <ul role="list" className="mt-6 space-y-4">
            {section.links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-md leading-6 text-gray-300 hover:text-gray-50"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}