const TwitterIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.46 6.012a8.58 8.58 0 0 1-2.466.676 4.305 4.305 0 0 0 1.886-2.374 8.591 8.591 0 0 1-2.725 1.041 4.292 4.292 0 0 0-7.313 3.914 12.184 12.184 0 0 1-8.846-4.483 4.286 4.286 0 0 0 1.328 5.728 4.27 4.27 0 0 1-1.943-.537v.054a4.293 4.293 0 0 0 3.442 4.208 4.306 4.306 0 0 1-1.938.073 4.296 4.296 0 0 0 4.01 2.98 8.61 8.61 0 0 1-5.33 1.838c-.347 0-.687-.02-1.02-.06a12.148 12.148 0 0 0 6.58 1.929c7.898 0 12.215-6.543 12.215-12.214 0-.186-.004-.371-.012-.556a8.735 8.735 0 0 0 2.146-2.224z"
      fill="currentColor"
    />
  </svg>
);

const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7.982a4.018 4.018 0 1 0 0 8.036 4.018 4.018 0 0 0 0-8.036zm0 6.627a2.61 2.61 0 1 1 0-5.218 2.61 2.61 0 0 1 0 5.218z"
      fill="currentColor"
    />
    <path
      d="M16.673 6.328a1.036 1.036 0 1 1-2.072 0 1.036 1.036 0 0 1 2.072 0z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.364 2H7.636A5.644 5.644 0 0 0 2 7.636v8.728A5.644 5.644 0 0 0 7.636 22h8.728A5.644 5.644 0 0 0 22 16.364V7.636A5.644 5.644 0 0 0 16.364 2zm3.855 14.364a3.86 3.86 0 0 1-3.855 3.855H7.636a3.86 3.86 0 0 1-3.855-3.855V7.636a3.86 3.86 0 0 1 3.855-3.855h8.728a3.86 3.86 0 0 1 3.855 3.855v8.728z"
      fill="currentColor"
    />
  </svg>
);

const LinkedInIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      fill="currentColor"
    />
  </svg>
);

export {TwitterIcon, FacebookIcon, InstagramIcon, LinkedInIcon};