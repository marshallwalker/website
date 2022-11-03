export interface AboutProps {
  name: string;
  description: string;
  photo: string;
}

export const About = ({ name, description, photo }: AboutProps) => {
  return (
    <div className="flex p-12 justify-center items-center space-x-10">
      <div className="flex flex-col space-y-3 max-w-md">
        <p className="font-medium">THIS IS ME</p>
        <p className="xl:text-4xl 2xl:text-5xl font-medium uppercase">{name}</p>
        <p className="font-thin text-slate-600 indent-8">{description}</p>
      </div>
      <img src={photo} alt={name} className="xl:w-80 2xl:w-96" />
    </div>
  );
}
