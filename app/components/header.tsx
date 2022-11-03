import { Logo } from "./logo";

export interface HeaderProps {
    name: string;
}

export const Header = ({ name }: HeaderProps) => {
    return (
        <div className="w-full flex justify-between bg-white p-4">
            <div className="flex justify-center items-center space-x-3">
                <div className="w-10 h-10">
                    <Logo />
                </div>
                <p className="font-medium text-xl uppercase">{name}</p>
            </div>

            {/* <div className="flex justify-evenly space-x-6 pr-6">
                <button className="font-medium uppercase hover:text-slate-400">Home</button>
                <button className="font-medium uppercase hover:text-slate-400">Home</button>
            </div> */}
        </div>
    );
}
