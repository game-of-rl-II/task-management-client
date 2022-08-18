import { useForm } from "react-hook-form";
const UpdateProfileModal = ({
  openUpdateModal,
  setOpenUpdateModal,
  refetch,
}) => {
  const { email } = openUpdateModal;
  const {
    register,
    handleSubmit,

    formState: { errors },
    // reset,
  } = useForm();

  return (
    <>
      <input type="checkbox" id="update-profile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="divider before:bg-secondary after:bg-secondary">
            <h2 className=" uppercase md:text-4xl text-xl text-secondary font-bold">
              Update Info
            </h2>
          </div>
          <form autoComplete="off">
            <div className="flex-1  flex flex-col">
              <div className="flex flex-col lg:flex-row lg:first-letter gap-4">
                <div className="md:flex-1 mt-2 mb:mt-0 ">
                  <label className="label font-bold">Your Profession</label>
                  <input
                    className="input border-2 input-bordered w-full shadow-inner"
                    name="occupation"
                    placeholder="Enter Your Profession"
                    {...register("occupation", {
                      required: true,
                    })}
                  />
                  {errors.occupation && (
                    <span className="text-red-500">
                      Profession is required.
                    </span>
                  )}
                </div>
                <div className="md:flex-1 mt-2 mb:mt-0 ">
                  <label className="label font-bold">Phone Number</label>
                  <input
                    className="input border-2 input-bordered w-full shadow-inner"
                    placeholder="Your contact number"
                    name="number"
                    type="tel"
                    minLength="11"
                    {...register("number", {
                      required: true,
                    })}
                  />
                  {errors.number && (
                    <span className="text-red-500">
                      Contact number is required
                    </span>
                  )}
                </div>
              </div>
              <div className="mb-8 ">
                <div className="flex flex-col lg:flex-row lg:gap-4">
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Postal Code</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      name="post"
                      placeholder="Your postal code"
                      type="text"
                      {...register("post", {
                        required: true,
                      })}
                    />
                    {errors.post && (
                      <span className="text-red-500">
                        Postal Code is required
                      </span>
                    )}
                  </div>
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">City</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      name="city"
                      placeholder="Your City"
                      type="text"
                      {...register("city", {
                        required: true,
                      })}
                    />
                    {errors.city && (
                      <span className="text-red-500">City is required</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="md:flex-1 mt-2 mb:mt-0 ">
                    <label className="label font-bold">Address</label>
                    <input
                      className="input border-2 input-bordered w-full shadow-inner"
                      name="address"
                      placeholder="Your address"
                      type="text"
                      {...register("address", {
                        required: true,
                      })}
                    />
                    {errors.address && (
                      <span className="text-red-500">Address is required</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="divider before:bg-secondary after:bg-secondary">
              <button
                onClick={() => setOpenUpdateModal(null)}
                className=" btn btn-sm  btn-secondary  text-white font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" btn btn-sm  btn-secondary  text-white font-bold"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileModal;