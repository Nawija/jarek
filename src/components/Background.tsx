import "./Background.css";

export default function Background() {
    return (
        <div className="absolute left-0 top-0 lg:top-[-120px] w-full h-full -z-10">
            <div className=" blur-[122px] lg:blur-[222px] lg:w-[20vw] lg:h-[20vw] w-[150px] h-[150px] bg-orange-600 absolute top-0 lg:top-[-10vh] right-[15vw] rounded-full" />
            <div className=" blur-[122px] lg:blur-[222px] lg:w-[20vw] lg:h-[20vw] w-[150px] h-[150px] bg-emerald-600 absolute top:-0 lg:top-[-20vh] left-[15vw] rounded-full" />
        </div>
    );
}
