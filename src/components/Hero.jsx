import membership from "../assets/membership.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const Hero = () => {
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: mediaQuery.matches ? 1 : 3,
    slidesToScroll: 1,
  };
  return (
    <div className="mx-8 ">
      <span className="text-2xl sm:text-3xl">New Arrivals</span>
      <section className="flex flex-col sm:flex-row justify-center sm:justify-between mt-2">
        <div className="w-full sm:w-2/5 mb-8 sm:mb-0">
          <div className="flex text-xs items-center">
            <span className="mr-2 underline">JOIN</span>
            <span>TODAY</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={membership}
              className="mt-5 w-full max-w-[260px] h-auto"
              alt="Membership"
            />
            <button
              type="button"
              className="bg-[#efefef] hover:shadow-md border-[#495567] border-solid border-2 my-3 w-full sm:w-[260px] rounded-full hover:bg-[#e0e0e0] hover:border-[#333] hover:scale-105 transition-transform duration-300"
            >
              <Link to="/join" className="text-gradient">
                JOIN NOW
              </Link>
            </button>
          </div>
        </div>
        <div className="w-full sm:w-3/5">
          <p className="text-2xl sm:text-3xl text-[#2cb79d] text-center mb-4 sm:mb-8">
            Unlock Premium Features Now
          </p>
          <div className="mt-4 sm:mt-20 flex flex-col gap-2">
            <Slider {...settings}>
              <div className=" text-blue-500 h-[260px] sm:w-[181px] rounded-2xl border-solid border-[#2cb79d] border-2">
                <div>
                  <img
                    src={img1}
                    className="w-full h-48 object-cover rounded-t-xl"
                    alt="image1"
                  />
                </div>
                <div className="flex flex-col justify-center items-center  text-lg">
                  <p className="text-gradient">Lower</p>
                  <p className="text-gradient">Interest Rates</p>
                </div>
              </div>

              <div className=" text-blue-500 h-[260px] sm:w-[181px] rounded-2xl border-solid border-[#2cb79d] border-2">
                <div>
                  <img
                    src={img2}
                    className="w-full h-48 object-cover rounded-t-xl"
                    alt="image2"
                  />
                </div>
                <div className="flex flex-col justify-center items-center  text-lg">
                  <p className="text-gradient">Interest</p>
                  <p className="text-gradient">free Payments</p>
                </div>
              </div>

              <div className=" text-blue-500 h-[260px] sm:w-[181px] rounded-2xl border-solid border-[#2cb79d] border-2">
                <div>
                  <img
                    src={img3}
                    className="w-full h-48 object-cover rounded-t-xl"
                    alt="image3"
                  />
                </div>
                <div className="flex flex-col justify-center items-center  text-lg">
                  <p className="text-gradient">Discount</p>
                  <p className="text-gradient">Discount on Materials</p>
                </div>
              </div>
            </Slider>
          </div>
          <div className="flex flex-col justify-center items-center mt-10 sm:my-12">
            <button
              type="button"
              className="bg-gradient-to-r from-[#2a8fc3] via-[#32cbb1] to-[#2a8fc3] text-white border-none p-1 w-full sm:w-[160px] rounded-full hover:scale-105 hover:shadow-md hover:border-2 hover:border-blue-500"
            >
              <Link to="/join">UNLOCK NOW</Link>
            </button>
            <button
              type="button"
              className="bg-gradient-to-r from-[#2a8fc3] via-[#32cbb1] to-[#2a8fc3] text-white border-none p-1 w-full sm:w-[121px] rounded-full mt-2 sm:mt-3 hover:scale-105 hover:shadow-md hover:border-2 hover:border-blue-500"
            >
              <Link to={"/journal"}>DETAILS</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
