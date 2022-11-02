export const About = () => {
  const name = "marshall walker";
  const age = new Date().getFullYear() - 1997;
  const bio = `I'm a ${age} year old Software Engineer, I've been interested in programming from the age of 12. I started programming in Java when Minecraft first came out. I have since expanded my passion into several disciplines randing from backend infrastructure to frontend design.`

  return (
    <div className="flex p-12 justify-center items-center space-x-10">
      <div className="flex flex-col space-y-3 max-w-md">
        <p className="font-medium">THIS IS ME</p>
        <p className="text-5xl font-medium uppercase">{name}</p>
        <p className="font-thin text-slate-600 indent-8">{bio}</p>
      </div>
      <img src="./assets/me.jpg" alt="me" className="w-96" />
    </div>
  );
}