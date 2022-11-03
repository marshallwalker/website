export interface ProgressBarProps {
    labels: string[];
    select: string;
}

export const ProgressBar = ({ labels, select }: ProgressBarProps) => {

    return (
        <div className="flex flex-col">
            <div className="w-full bg-slate-200 rounded-full h-3">
                <div className="bg-sky-600 rounded-full h-3 w-1/2"></div>
            </div>

            <div className="flex w-full justify-between">
                {labels.map(label =>  <p className="font-thin" key={label}>{label}</p>)}
            </div>
        </div>
    );
}
