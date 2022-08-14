import React from 'react';

const ReviewYourTeamMember = () => {
    return (
        <div className="m-9 lg:px-12 text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto bg-gradient-to-t from-pink-500 to-orange-400 border-y-4 border-indigo-500 w-auto rounded-xl p-10">
                <div className="flex-1 md:p-0 lg:pt-8 lg:pb-8  mx-auto flex flex-col rounded-xl">
                    <section className="p-4 shadow-xl rounded-xl border-y-4 border-white px-10 mx-5">
                        <div className="md:flex">
                            <h2 className="md:w-1/3 uppercase tracking-wide text-indigo-700 font-bold text-sm sm:text-lg mb-6">
                                Add A New Rivew
                            </h2>
                        </div>
                        <form>
                            <div className="mb-8">
                                <div className="md:flex-1 mt-2 mb:mt-0 ">
                                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold p-2">
                                        Who gave the review
                                    </label>
                                    <input  className="w-full shadow-inner p-4 border-0 rounded-xl" placeholder="Enter the name"
                                    ></input>
                                  
                                </div>
                                <div className="md:flex-1 mt-2 mb:mt-0 ">
                                    <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold p-2">
                                        New Rivew
                                    </label>
                                    <textarea className="w-full shadow-inner p-4 border-0 rounded-xl" placeholder="Enter your rivew here..."
                                       
                                    ></textarea>
                                </div>
                                <div className="flex justify-end mt-2 mb:mt-0 md:px-3">
                                    <div className="md:flex w-full mb-4">
                                        <div className="md:flex-1 md:pr-3 mb-4 md:mb-0">
                                            <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold">
                                                Rivew Rating
                                            </label>

                                            <select className="select  w-full max-w-xs"
                                            >
                                                <option>5</option>
                                                <option>4</option>
                                                <option>3</option>
                                                <option>2</option>
                                                <option>1</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="md:flex mb-6 border border-t-1 border-b-0 border-x-0 border-cream-dark">
                                <div className="md:flex-1 px-3 text-center md:text-right">
                                    <button
                                        type="submit"
                                        className="btn btn-wide bg-indigo-700 font-bold text-xl mt-3">
                                        ADD
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
    );
};

export default ReviewYourTeamMember;