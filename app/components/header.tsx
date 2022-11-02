const Logo = () => {
    return (
        <svg viewBox="0 0 1250 1250">
            <rect id="Artboard1" x="0" y="0" width="1250" height="1250" style={{fill: "none;"}} />
            <clipPath id="_clip1">
                <rect x="0" y="0" width="1250" height="1250" />
            </clipPath>
            <g clip-path="url(#_clip1)">
                <g>
                    <path d="M0,0l0,625l625,0l-625,-625Z" style={{fill:"black"}} />
                    <path d="M1250,-0l-0,386.279l-386.279,0l386.279,-386.279Z" style={{fill:"black"}} />
                    <path d="M-0,1250l-0,-386.279l386.279,-0l-386.279,386.279Z" style={{fill:"black"}} />
                    <path d="M625,625l625,-0l-0,625l-625,-625Z" style={{fill:"black"}} />
                </g>
            </g>
        </svg>
    );
}

export const Header = () => {
    return (
        <div className="flex justify-between bg-white p-4">
            <div className="flex justify-center items-center space-x-3">
                <div className="w-10 h-10">
                    <Logo />
                </div>
                <p className="font-medium text-xl">MARSHALL WALKER</p>
            </div>

            <div className="flex justify-evenly space-x-3 pr-6">
                <button className="font-medium uppercase">Home</button>
                <button className="font-medium uppercase">About</button>
                <button className="font-medium uppercase">Experience</button>
                <button className="font-medium uppercase">Contact</button>
            </div>
        </div>
    );
}