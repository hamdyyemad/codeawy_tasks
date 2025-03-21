import Stars from "./Stars";
import ButtonMd from "./buttons/ButtonMd";

import { EditSVG, DeleteSVG } from "./svg_icons/SVGIcons";

import { Product } from "../types/product";

interface Props {
  product: Product;
}
export default function Card({ product }: Props) {
  return (
    <div className=" bg-black/20 rounded-lg shadow-lg overflow-hidden max-w-sm w-full5 transform transition-all duration-200 hover:scale-105">
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
            <h2 className="text-xl font-semibold text-gray-300/90 mb-1 flex flex-1 truncate">
              {product.title}
            </h2>
            <span className="text-lg font-bold ml-auto text-gray-300/90">
              ${product.price}
            </span>
          </div>
          <p className="text-sm text-gray-400">{product.category || ""}</p>
        </div>
        {/* description */}
        <p className="text-gray-400/70 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Ratings */}
        <div className="flex items-center p-3 ">
          <div className="flex text-gray-400/80 gap-x-1">
            <Stars rating={product.rating} />
          </div>
          <span className="text-gray-400 text-sm ml-1 mb-1">
            ({product?.rating ?? "0"})
          </span>
        </div>
        {/* Stock */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="text-sm text-gray-400 font-medium">
              Stock: <span className="font-bold">{product?.stock ?? "0"}</span>
            </span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-clock text-blue-500 mr-2"></i>
            {product.availabilityStatus &&
              product.availabilityStatus !== "In Stock" && (
                <span className="bg-red-700 text-white text-xs font-bold px-2 py-1 rounded-xl">
                  {product.availabilityStatus}
                </span>
              )}
          </div>
        </div>
        {/* Button */}
        <div className="flex space-x-2">
          <ButtonMd>
            <EditSVG />
            Edit
          </ButtonMd>

          <ButtonMd>
            <DeleteSVG />
            Delete
          </ButtonMd>
        </div>
      </div>
    </div>
  );
}
