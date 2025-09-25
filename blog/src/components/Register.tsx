

function Register() {
  return (
    <div>
      <h1>Register Form</h1>
      <form action="" className="*:m-2">
        <input type="text" name="fullname" id="fullname" placeholder="Enter your name"  className="h-[3em] border bg-gray-200 text-gray-600 p-2 rounded  " />
        <input type="email"  name="email" id="email" placeholder="Enter your email"  className="h-[3em] border bg-gray-200 text-gray-600 p-2 rounded  "/>
        <input type="password"  name="password" id="password" placeholder="Enter your password" className="h-[3em] border bg-gray-200 text-gray-600 p-2 rounded  "/>
        <input type="submit" value="Register" className="bg-blue-300 text-white border rounded h-[3em] w-[12em]" />
      </form>
    </div>
  );
}

export default Register;
