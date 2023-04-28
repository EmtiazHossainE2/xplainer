const PriceView = () => {
  return (
    <div className="mt-2 mb-4">
      <p className="  ext-[#000000]">
        <span className="text-3xl font-bold">Rs. 999</span>{" "}
        <span className="text-[#7b7b7b] line-through">₹ 1,999 </span>{" "}
        <span className="text-[#7b7b7b]">( 50% off ) </span>
      </p>
    </div>
  );
};


export default PriceView;