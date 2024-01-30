import '../output.css'

function Header() {

    return (
        <div className="sticky top-0">
            <div className="sticky top-0 bg-color-white w-full h-28"> 
                <h1 id='title' className="text-6xl align-bottom absolute inset-x-10 bottom-1/4 font-medium w-64">Quiz App</h1>
            </div>
            <div className='bg-gradient-to-b from-black/5 to-transparent absolute left-0 inset-y-28 w-full h-10'/>
        </div>
        
    );
}

export default Header;