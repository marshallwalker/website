export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="flex justify-center bottom-0 bg-white p-5">
            <p>Copyright &copy; {year} marshallwalker.ca</p>
        </div>
    );
}