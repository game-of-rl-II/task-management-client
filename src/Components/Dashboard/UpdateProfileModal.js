import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const UpdateProfileModal = ({ openUpdateModal, setOpenUpdateModal, refetch, admin }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
    // reset,
  } = useForm();
  const { email } = admin;

  const onSubmit = (data) => {
    if (email && data.name && data.number) {
      console.log(data);
      const url = `https://warm-dawn-94442.herokuapp.com/update-admin/${email}`;
      fetch(url, {
        method: "PUT",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("successfully updated");
            setOpenUpdateModal(null);
          }
        });
    }
  };

  return (
    <>
      <input type="checkbox" id="update-profile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="divider before:bg-secondary after:bg-secondary">
            <h2 className=" uppercase md:text-4xl text-xl text-secondary font-bold">Update Info</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-1  flex flex-col">
              <div className="flex flex-col lg:flex-row lg:first-letter gap-4">
                <div className="md:flex-1 mt-2 mb:mt-0 ">
                  <label className="label font-bold">Your Name</label>
                  <input
                    className="input border-2 input-bordered w-full shadow-inner"
                    name="name"
                    placeholder="Enter Your Name"
                    {...register("name", {
                      required: true,
                    })}
                  />
                  {errors.name && <span className="text-red-500">name is required.</span>}
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
                  {errors.number && <span className="text-red-500">Contact number is required</span>}
                </div>
              </div>
            </div>
            <div className="divider before:bg-secondary after:bg-secondary mt-10">
              <button onClick={() => setOpenUpdateModal(null)} className=" btn btn-sm  btn-secondary  text-white font-bold">
                Cancel
              </button>
              <button type="submit" className=" btn btn-sm  btn-secondary  text-white font-bold">
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
