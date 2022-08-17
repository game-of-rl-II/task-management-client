import React from 'react';

const AssignTaskModal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box bg-gradient-to-t from-pink-500 to-orange-400 border-y-4 border-indigo-500">
                    <p class="py-4">Employee Name:</p>
                    <p class="py-4">Employee ID:</p>
                    <form>
                        <div className="mb-8">
                            <div className="md:flex-1 mt-2 mb:mt-0 ">
                                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold p-2">
                                    ASSIGNED TASK DETAILS
                                </label>
                                <textarea className="w-full shadow-inner p-4 border-0 rounded-xl" placeholder=" Enter Assign Task Details..."

                                ></textarea>
                            </div>
                            <div className="flex justify-end mt-2 mb:mt-0 md:px-3">
                                <div className="md:flex w-full mb-4">
                                    <div className="md:flex-1 md:pr-3 mb-4 md:mb-0">
                                        <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold p-2">
                                            SET A DEADLINE
                                        </label>

                                        <select className="select  w-full max-w-xs"
                                        >
                                            <option>5 Day</option>
                                            <option>4 Day</option>
                                            <option>3 Day</option>
                                            <option>2 Day</option>
                                            <option>1 Day</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn btn-warning btn-sm px-5">CANCEL</label>
                        <label for="my-modal-6" class="btn btn-success btn-sm px-5">Assign</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignTaskModal;