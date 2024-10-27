const links = [
  {
    href: "/rss",
    label: "rss",
  },
  {
    href: "https://www.facebook.com/baezor/",
    label: "facebook",
  },
  {
    href: "https://x.com/baezor/",
    label: "x",
  },
  {
    href: "https://github.com/baezor/",
    label: "github",
  },
  {
    href: "https://www.linkedin.com/in/angelromerobaez/",
    label: "linkedin",
  },
  {
    href: "https://prepain.mx/angel/",
    label: "prepain",
  },
  {
    href: "https://profiles.wordpress.org/baezor/",
    label: "wordpress",
  },
  {
    href: "https://wellfound.com/u/baez",
    label: "wellfound",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex md:flex-wrap flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="flex items-center space-x-2">
              <ArrowIcon />
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © Angel Romero Baez {new Date().getFullYear()} | MIT Licensed
      </p>
    </footer>
  );
}
