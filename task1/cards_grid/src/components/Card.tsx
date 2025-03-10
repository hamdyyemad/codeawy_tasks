import { CardIcon } from "./svg_icons/SVGIcons";
import { Product } from "../types/product";
import Stars from "./Stars";
interface Props {
  product: Product;
}
export default function Card({ product }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm w-full5 transform transition-all duration-200 hover:scale-105">
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-64 object-contain"
        />
      </div>
      <div className="p-4">
        {/* header */}
        <div className="mb-2">
          <div className="flex justify-around">
            <h2 className="text-xl font-semibold text-gray-800 mb-1 flex flex-1 truncate">
              {product.title}
            </h2>
            <span className="text-lg font-bold ml-auto">${product.price}</span>
          </div>
          <p className="text-sm text-gray-600">{product.category || ""}</p>
        </div>
        {/* description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Ratings */}
        <div className="flex items-center p-3 ">
          <div className="flex text-black gap-x-1">
            <Stars rating={product.rating} />
          </div>
          <span className="text-gray-600 text-sm ml-1 mb-1">
            ({product?.rating ?? "0"})
          </span>
        </div>
        {/* Stock */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <i className="fas fa-truck text-blue-500 mr-2"></i>
            <span className="text-sm text-gray-900 font-medium">
              Stock: <span className="font-bold">{product?.stock ?? "0"}</span>
            </span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-clock text-blue-500 mr-2"></i>
            {product.availabilityStatus &&
              product.availabilityStatus !== "In Stock" && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-xl">
                  {product.availabilityStatus}
                </span>
              )}
          </div>
        </div>
        {/* Button */}
        <div className="flex">
          <button
            type="button"
            className="text-white bg-black hover:bg-[#000708]/90 transform transition-all duration-200 hover:scale-105 cursor-pointer focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-sm text-sm px-5 py-2.5 text-center flex flex-1 justify-center items-center  me-2 mb-2"
          >
            <CardIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
