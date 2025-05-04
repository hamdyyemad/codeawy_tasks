import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

import { Product } from "../types/product";
import { productFields } from "../constants.ts";

import { EditSVG, DeleteSVG } from "../components/ui/svg_icons/OperationsIcon";

import Button from "../components/ui/buttons/Button.tsx";
import Card from "../components/ui/cards/ProductCard.tsx";
import Drawer from "../components/ui/drawers/Drawer.tsx";
import Form from "../components/ui/forms/Form.tsx";
import SpinnerLoader from "../components/ui/loaders/SpinnerLoader.tsx";
import ErrorPage from "../components/ErrorPage.tsx";
import Modal from "../components/ui/popups/Modal.tsx";

export default function Products() {
  const { data, isLoading, error } = useFetch<{ products: Product[] }>(
    "https://dummyjson.com/products?limit=10"
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  function clickedAction(product: Product, type: string) {
    if (type === "Edit") {
      setSelectedProduct(product);
      setIsEditing(true);
      setIsDrawerOpen(true);
    } else if (type === "Delete") {
      setSelectedProduct(product);
      setIsModalOpen(true);
    } else {
      return;
    }
  }

  const handleCreateNew = () => {
    setSelectedProduct(null);
    setIsEditing(false);
    setIsDrawerOpen(true);
  };

  if (isLoading) {
    return (
      <div className="grid h-screen place-items-center text-xl font-semibold text-gray-300/90">
        <SpinnerLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid h-screen place-items-center text-xl font-semibold text-gray-300/90">
        <ErrorPage msg={error.message} />
      </div>
    );
  }

  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          setSelectedProduct(null);
          setIsEditing(false);
        }}
        title={isEditing ? "Edit Product" : "New Product"}
      >
        <Form
          fields={productFields}
          closeDrawer={() => {
            setIsDrawerOpen(false);
            setSelectedProduct(null);
            setIsEditing(false);
          }}
          initialValues={selectedProduct || undefined}
          isEditing={isEditing}
        />
      </Drawer>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => {
            console.log("Deleting product:", selectedProduct);
            // Add your delete logic here
            setIsModalOpen(false);
          }}
        />
      )}

      <section className="p-5">
        {isDrawerOpen && (
          <div
            className="fixed inset-0 backdrop-blur-sm brightness-50  transition-opacity duration-300 z-10"
            onClick={() => {
              setIsDrawerOpen(false);
              setSelectedProduct(null);
              setIsEditing(false);
            }}
          />
        )}

        <div className="flex mt-3">
          <h1 className="text-3xl font-bold tracking-tight text-gray-300/90 flex-1">
            Our Products
          </h1>
          <Button onClick={handleCreateNew} extraClasses="me-2" width="w-fit">
            Create
          </Button>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-10 place-items-center">
          {data?.products.map((p) => (
            <Card product={p} key={p.id}>
              <Button
                onClick={() => clickedAction(p, "Edit")}
                extraClasses="flex flex-1 justify-center items-center"
                width="w-full"
              >
                <EditSVG />
                Edit
              </Button>

              <Button
                onClick={() => clickedAction(p, "Delete")}
                extraClasses="flex flex-1 justify-center items-center"
                width="w-full"
              >
                <DeleteSVG />
                Delete
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
