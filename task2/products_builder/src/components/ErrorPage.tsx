import Button from "./ui/buttons/Button";

export default function ErrorPage({ msg }: { msg: string }) {
  return (
    <div className="text-center">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl font-medium mt-4">
        Oops! Page {msg.toLocaleLowerCase() ?? ""}
      </p>
      <p className="mt-4 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button extraClasses="me-2 px-6 py-3 rounded-full" width="w-fit">
        Go Home
      </Button>
    </div>
  );
}
