import Image from "next/image";
import gloImage from "../../../public/assets/globacom-limited-icon-1024x1024-upx9lebq 1.png"
import mtnImage from "../../../public/assets/mtn_group_icon.jpeg.png"
import nineMobile from "../../../public/assets/9 mobile logo 1.png"
import airtelImage from "../../../public/assets/Vector.png"
import img3 from "../../../public/assets/Dashboard Overview (3) 1.png";



const PoweredBy = () => {
    return (
        <div className="w-full bg-[#E7F6F2] py-6 md:py-8 flex flex-col items-center relative ">
            <p className="text-gray-700 text-sm md:text-base mb-4 absolute top-0 left-0 m-4 font-extralight italic">Powered by</p>
            <div className="flex flex-col md:flex-row items-center justify-around w-full md:h-[125px]">
                <Image src={gloImage} alt="Glo" width={125} height={125} className="w-[125px] h-[125px] mt-10 md:mt-0"/>
                <Image src={mtnImage} alt="MTN" width={125} height={125} className="w-[125px] h-[125px] mt-12 md:mt-0"/>
                <Image src={nineMobile} alt="9mobile" width={125} height={125} className="w-[125px] h-[125px] mt-12 md:mt-0"/>
                <Image src={airtelImage} alt="Airtel" width={183} height={41} className="w-[183px] h-[41px] mt-12 md:mt-0"/>
            </div>
        </div>


    );
};

export default PoweredBy;
