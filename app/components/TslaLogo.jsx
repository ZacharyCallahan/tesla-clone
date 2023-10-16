import Image from "next/image";
import Logo from "../../public/tsla-logo.svg"

const TslaLogo = () => {
    return <Image className="w-fit h-[12px]" src={Logo} alt="Logo" width={1000} height={1000} />;
}

export default TslaLogo;