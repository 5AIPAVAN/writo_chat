function Cart() {
    return (
        <div className="w-full bg-gray-50">
          <div className="flex flex-col md:flex-row p-12  gap-6 ">
            {Array(3).fill(0).map((_, index) => (
              <div key={index} className="w-full md:w-1/3 bg-white border border-black rounded-lg p-4 ">
                <h1 className="text-[#07744E] font-semibold text-lg">Physics Test</h1>
                <p className="text-black">25 Questions</p>
                <p className="text-black">Reattempted also available</p>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="text-black flex flex-row gap-4">
                    <p className="font-semibold text-lg">Questions</p>
                    <span>:</span>
                    <span>100</span>
                  </div>
                  <div className="text-black flex flex-row gap-4">
                    <p className="font-semibold text-lg">Time</p>
                    <span className="ml-12">:</span>
                    <span>100 minutes</span>
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-4">
                  <button className="bg-[#488B80] hover:bg-[#53a799] p-2 rounded-lg text-white">Go To Test</button>
                  <button className="text-black border rounded-lg border-black p-2 bg-transparent">View details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Cart;
