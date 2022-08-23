import { React, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const DeleteDialogBox = (props) => {
  const { open, onClose, onDelete } = props;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" open={open} onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-center overflow-hidden shadow-xl transform transition-all">
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-semibold text-gray-900"
                    >
                      Delete Playlist
                    </Dialog.Title>
                  </div>
                  <div className="mt-2">
                    <p className="text-base text-gray-500 text-center">
                      This will permanently delete your playlist. Are you sure?
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex justify-center gap-4">
                  <button
                    type="button"
                    onClick={onDelete}
                    className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink text-base font-medium text-white hover:bg-pink-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink sm:col-start-2 sm:text-sm"
                  >
                    Yes, Delete My Playlist
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-purple text-base font-medium text-white hover:bg-purple-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple sm:mt-0 sm:col-start-1 sm:text-sm"
                  >
                    No, Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DeleteDialogBox;
