const AddUsers = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const gender = form.gender.value;
    const newUser = { name, email, password, gender };
    console.log(newUser);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <form
          onSubmit={handleAddUser}
          className="lg:w-3/12 mx-auto border lg:p-6 rounded-lg bg-gray-50"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <div className="mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="form-radio"
                  required
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="form-radio"
                  required
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Create user"
            className="bg-blue-500 btn text-white"
          />
        </form>
      </div>
    </>
  );
};

export default AddUsers;
