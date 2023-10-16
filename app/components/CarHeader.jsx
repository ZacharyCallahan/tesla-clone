import Link from "next/link";

const CarHeader = ({ header, content, orderLink, demoLink, detailsLink }) => {
    
    return (
        <div className="fixed w-full text-white h-[92vh] flex flex-col justify-between items-center text-center">
            <div className="mt-24">
                <h1 className="text-5xl font-medium">{header}</h1>
                <p className="text-xl pt-1 tracking-wider">{content}</p>
            </div>
            <div>
                <div className="flex items-center justify-center gap-6 mb-4 px-6 py-4 flex-wrap">
                    <Link
                        className="font-medium flex items-center justify-center bg-buttonprimary px-6 py-1 sm:w-64 w-full h-10 rounded-md"
                        href={`${orderLink}`}>
                        Order Now
                    </Link>
                    <Link
                        className="font-medium flex items-center justify-center text-black bg-buttonsecondary px-6 py-1 sm:w-64 w-full h-10 rounded-md"
                        href={`${demoLink}`}>
                        Demo Drive
                    </Link>
                </div>
                <p className="text-sm">
                    *Excludes taxes and fees with price subject to change.
                    Available in select states.{" "}
                    <Link href={`${detailsLink}`}>See Details</Link>
                </p>
            </div>
        </div>
    );
};

export default CarHeader;
