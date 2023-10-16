import Image from "next/image";

const Background = () => {
    return (
        <div className="relative h-[200vh]">
            <video
                className="absolute top-0 w-full h-screen object-cover z-[-1]"
                src="https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA.mp4"
                autoPlay
                loop
                muted={true}></video>
            <Image
                className="absolute mt-[100vh] w-full h-screen object-cover z-[-1]"
                src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg"
                alt="Background"
                width={1000}
                height={1000}
                objectFit="cover"
                quality={100}
            />
        </div>
    );
}

export default Background;