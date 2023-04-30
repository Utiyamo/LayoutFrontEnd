export default function ToastNative() {
    return(
        <div id="toast-default"
            className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                <span className="sr-only">!</span>
            </div>
            <div className="ml-3 text-sm front-normal">
                Toast message.
            </div>
            <button type="button" 
                className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
                data-dismiss-target="#toast-default" aria-label="Close">
                    <span className="sr-only">Close</span>
            </button>   
        </div>
    )
}