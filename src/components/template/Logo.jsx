export default function Logo(){
    return(
        <div className="flex flex-col items-center justify-center h-10 w-10 bg-white rounded-full">
            <div className="h-3 w-3 rounded-full bg-red-600 mb-0.5"/>
            <div className="flex mb-0.5">
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-0.5"/>
                <div className="h-3 w-3 rounded-full bg-green-500 mr-0.5"/>

            </div>

        </div>
    )
}