import '../output.css';

export const ContentBox = (props: {children: JSX.Element}) => {
    return (
        <div className='w-full h-auto flex flex-col items-center p-5 overflow-auto'>
            <div className='content-box w-quiz max-w-19/20 w-full h-96'>
                {props.children}
            </div>
        </div>
       
    );
}