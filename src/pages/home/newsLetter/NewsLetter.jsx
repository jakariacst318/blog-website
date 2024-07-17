import Swal from "sweetalert2";
import { BiMailSend } from "react-icons/bi";

const handleEmailSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    if(email){
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Thank you for subscribing",
            showConfirmButton: false,
            timer: 1500
        });
        event.target.reset()
    }
}

const NewsLetter = () => {
    return (
        <div>
            <h2 className="text-orange-500  text-center font-semibold text-3xl mb-10 mt-20">News Letter</h2>
            <div className="text-center mb-5  flex items-center justify-center">
                <p className="text-4xl text-orange-500 mr-5"><BiMailSend /></p>

                <form onSubmit={handleEmailSubmit} className="flex items-center">
                    <input type="email" name="email" placeholder="your email" className="input input-bordered input-warning  w-72" />

                    <input type="submit" value="submit" className="btn hover:bg-[#ca630a] bg-[#E67E22] text-white m-5 text-lg" />
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;