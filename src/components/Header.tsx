import '../output.css'

export const Header = () => {
    return (
        <div className='z-100 absolute sticky w-full h-28 top-0 left-0'>
            <div className='bg-color-white'> 
                <h1 className="text-6xl align-bottom absolute inset-x-10 bottom-1/4 font-medium w-64">Quiz App</h1>
            </div>
            <div className='bg-gradient-to-b from-black/5 to-transparent absolute left-0 inset-y-28 w-full h-10'/>
        </div>
    );
}
