import Image from "next/image";

const Background = () => {
    return (
        <div className="relative h-[1400vh] snap-scrolling-container">
            <video
                className="absolute top-0 w-full h-screen object-cover z-[-1] snap-child"
                src="https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA.mp4"
                autoPlay
                loop
                muted={true}></video>

            <Image
                className="absolute mt-[100vh] w-full h-screen object-cover z-[-1] snap-child"
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg"
                alt="Model 3 Background"
                width={1000}
                height={1000}
                objectFit="cover"
                quality={100}
            />

            <Image
                className="absolute mt-[200vh] w-full h-screen object-cover z-[-1] snap-child"
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD"
                alt="Model X Background"
                width={1000}
                height={1000}
                objectFit="cover"
                quality={100}
            />

            <Image
                className="absolute mt-[300vh] w-full h-screen object-cover z-[-1] snap-child"
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg"
                alt="Model S Background"
                width={1000}
                height={1000}
                objectFit="cover"
                quality={100}
            />

            <Image
                className="absolute mt-[400vh] w-full h-screen object-cover z-[-1] snap-child"
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-Poster-NA.jpg"
                alt="Experience Tesla Background"
                width={1000}
                height={1000}
                objectFit="cover"
                quality={100}
            />

            <Image
                className="absolute mt-[500vh] w-full h-screen object-cover z-[-1] snap-child"
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D"
                alt="Solar Panels Background"
                width={1000}
                height={1000}
                objectFit="cover"
                quality={100}
            />

            <Image
                className="absolute mt-[600vh] w-full h-screen object-cover z-[-1] snap-child"
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global"
                alt="Solar Roof Background"
                width={1000}
                height={1000}
                objectFit="cover"
                quality={100}
            />

            <Image
                className="absolute mt-[700vh] w-full h-screen object-cover z-[-1] snap-child"
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop.jpg"
                alt="Powerwall Background"
                width={1000}
                height={1000}
                objectFit="cover"
                quality={100}
            />

            <Image
                className="absolute mt-[800vh] w-full h-screen object-cover z-[-1] snap-child"
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg"
                alt="Accessories Background"
                width={1000}
                height={1000}
                objectFit="cover"
                quality={100}
            />
        </div>
    );
};

export default Background;
