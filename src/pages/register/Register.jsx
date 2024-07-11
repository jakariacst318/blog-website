
import { Link } from 'react-router-dom';
import login from '../../pages/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const {createUser} =useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.log(error.message))

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col  lg:flex-row gap-x-16 ">
                    <div className=" w-1/2 ">
                        <img className="lg:w-5/6" src={login} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-4xl font-semibold text-center py-5">Sign Up</h1>

                            {/*Login from */}
                            <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Name</span>
                                </label>
                                <input type="text" name="name" required placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email</span>
                                </label>
                                <input type="text" name="email" required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 ">
                                <input type="submit" value="Register" className="btn bg-[#FF3811] hover:bg-[#d83312] text-white" />
                            </div>
                            </form>

                            <div >
                                <p className="text-[#444444] text-xl font-medium text-center pt-3 pb-6">Or Log In with</p>

                                <div className="flex gap-x-4  justify-center">

                                    {/* <button className="text-[#FF3811] hover:bg-[#d83312] hover:text-white rounded-full text-4xl"><CiFacebook /></button> */}

                                    {/* <button className="text-[#FF3811] hover:bg-[#d83312] hover:text-white rounded-xl text-4xl"><CiLinkedin /></button> */}

                                    {/* <button className="text-[#FF3811]  hover:bg-[#d83312] hover:text-white rounded-full text-4xl"><AiFillGoogleCircle /></button> */}

                                </div>
                            </div>

                            <p className="text-center py-5">Don not have an account? <Link to='/login'><span className="text-[#FF3811] font-semibold">Sign In</span></Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;