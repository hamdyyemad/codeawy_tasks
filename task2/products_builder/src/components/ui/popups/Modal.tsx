import TrashIcon from "../svg_icons/TrashIcon";
import { XIcon } from "../svg_icons/XIcon";

export default function Modal({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <>
      {/* Backdrop - this will prevent interaction with elements behind the modal */}
      <div
        className="fixed inset-0 backdrop-blur-sm brightness-50  transition-opacity duration-300 z-10"
        onClick={onClose}
      />

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Modal content */}
        <div className="relative rounded-lg shadow bg-gray-950/90 p-6 mx-4 max-w-md w-full">
          {/* Close button */}
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
            onClick={onClose}
          >
            <XIcon />
            <span className="sr-only">Close modal</span>
          </button>

          {/* Modal content */}
          <div className="text-center">
            <TrashIcon />
            <p className="mb-4 text-gray-300">
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium text-center rounded-xl text-gray-300 border hover:bg-gray-900/40 focus:ring-4 focus:outline-none focus:ring-primary-300 focus:z-10 bg-transparent border-gray-500 cursor-pointer"
                onClick={onClose}
              >
                No, cancel
              </button>
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium text-center text-white bg-red-700/80 rounded-xl hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-900  cursor-pointer"
                onClick={onConfirm}
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
