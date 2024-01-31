import '../output.css'

export const Header = () => {
    return (
        <>
            <div className="sticky bg-color-white w-full h-42"> 
                <header className="text-6xl align-bottom absolute inset-x-10 bottom-1/4 font-medium w-64">Quiz App</header>
            </div>
            <div className='bg-gradient-to-b from-black/5 to-transparent absolute left-0 inset-y-28 w-full h-10'/>
        </>
    );
}
