export default function CardTask({taskName}) {
    return (
        <div className="card-task">
            <div>
                <div className="w-10 h-10 overflow-hidden bg-primary">
                    <img src="./avatar.png" alt="" className="w-10 h-10"/>
                </div>
                <div className="flex flex-col h-10 mt-0.5">
                    <div className="text-[1rem] font-light tracking-normal leading-3.5">{taskName}</div>
                    <div className="flex align-baseline items-center gap-1 h-4 leading-4">
                        <span className="icon"></span>
                        <span className="text-xs font-medium">+100</span>
                    </div>
                </div>
            </div>
            <IconDone />
            {/* <Icon /> */}
        </div>
    );
}


export function Icon() {
    return (
        <button className="flex justify-center items-center w-8 h-8 bg-primary rounded-full cursor-pointer">
            <span className="w-6 h-6 ml-0.5 text-white">
                <svg data-slot="icon" aria-hidden="true" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m8.25 4.5 7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </span>
        </button>
    );
}

export function IconDone() {
    return (
        <button className="flex justify-center items-center w-7 h-7 bg-accent/80 rounded-full cursor-pointer">
            <span className="w-[18px] h-[18px] text-white">
                <svg data-slot="icon" aria-hidden="true" fill="none" strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m4.5 12.75 6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </span>
        </button>
    );
}