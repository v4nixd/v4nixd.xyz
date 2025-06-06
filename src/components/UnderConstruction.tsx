export function UnderConstruction() {
    return (
        <>
            <div className="fixed inset-0 z-40 pointer-events-auto" id="construction_layer">
                <div className="absolute inset-0 backdrop-blur-sm"/>
                <div
                    className="absolute w-[200%] backdrop-blur-md h-16 bg-[repeating-linear-gradient(-45deg,_rgba(22,22,22,1)_0,_rgba(22,22,22,1)_15px,_rgba(255,213,0,1)_15px,_rgba(255,213,0,1)_30px)] rotate-[-15deg] bottom-[40%] left-[-50%] shadow-2xl border-[#161616] border-4"/>
                <div
                    className="absolute w-[200%] backdrop-blur-md h-16 bg-[repeating-linear-gradient(-45deg,_rgba(22,22,22,1)_0,_rgba(22,22,22,1)_15px,_rgba(255,213,0,1)_15px,_rgba(255,213,0,1)_30px)] rotate-[12deg] bottom-[40%] left-[-50%] shadow-2xl border-[#161616] border-4"/>
                <div className="fixed inset-0 flex items-center justify-center">
                    <div
                        className="absolute z-50 left-1/2 -translate-x-1/2 top-[33%] max-w-[40vh] max-h-[40vh] w-full h-full bg-[url(./assets/under_construction_sign.png)] bg-cover bg-no-repeat bg-center"/>
                </div>
                <button
                    onClick={() => {
                        const element = document.getElementById("construction_layer");
                        if (element) element.remove();
                    }}
                    className="fixed bottom-[22.5%] left-[50%] -translate-x-1/2 z-50 bg-[#4a3d00] hover:bg-[#b38f00] text-white p-2 rounded-md shadow-lg border-2 border-[#b38f00] font-poppins transition-colors duration-100">
                    Close and continue
                </button>
            </div>
        </>
    )
}