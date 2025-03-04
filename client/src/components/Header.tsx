
const Header = () => {
    return (
        <div className="flex items-center h-14 bg-gradient-to-r from-sky-500 to-indigo-500 italic px-6 py-4 m-7 rounded-full">
            <div className="w-1/2">
                <h1 className="font-bold text-3xl">Blog App</h1>
            </div>
            <div className="flex justify-start gap-10">
                <span className="text-xl font-semibold">
                    <p>Home</p>
                </span>
                <span className="text-xl font-semibold">
                    <p>My Blogs</p>
                </span>
                <span className="text-xl font-semibold">
                    <p>About Us</p>
                </span>
            </div>
        </div>
    )
}

export default Header