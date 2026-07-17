import {
  useEffect,

} from "react";

import {
  useSearchParams,
} from "react-router-dom";


import ProductCard from "../../components/common/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchProducts } from "../../redux/products/productsThunk";
import { setSearchKeyword } from "../../redux/products/productsSlice";


export default function Search() {
  const [params] =
    useSearchParams();

  const dispatch =
useDispatch();

const {

keyword,

searchProducts,

searchPagination,

loading,

}=useSelector(
state=>state.products
);

  useEffect(()=>{

dispatch(

setSearchKeyword(

params.get("query")||""

)

);

},[]);



useEffect(()=>{

if(!keyword.trim()) return;

dispatch(

fetchSearchProducts({

keyword,

page:1

})

);

},[keyword]);

 

  if (loading)
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );

  return (
    <section className="container mx-auto py-10">

      <h2 className="text-3xl font-bold mb-2">
        Search Results
      </h2>

      <p className="text-gray-500 mb-8">
        {searchPagination.total || 0} Results
        for "{keyword}"
      </p>

      {searchProducts.length === 0 ? (
        <div className="py-20 text-center">
          No Products Found
        </div>
      ) : (
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
          "
        >
          {searchProducts.map((product) => (
            <ProductCard
              key={product.prd_id}
              product={product}
            />
          ))}
        </div>
      )}

      {searchPagination.lastPage > 1 && (
        <div className="flex justify-center mt-10">

          <button>
            Prev
          </button>

          <span className="mx-4">
            {searchPagination.currentPage}
            /
            {searchPagination.lastPage}
          </span>

          <button>
            Next
          </button>

        </div>
      )}
    </section>
  );
}