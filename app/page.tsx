import Image from "next/image";
import ProductFeature from "./_component/ProductFeature/ProductFeature";
import Slider from "./_component/Slider/Slider";
import img1 from "../assets/images/banner-4.jpeg"
import img2 from "../assets/images/blog-img-1.jpeg"
import img3 from "../assets/images/blog-img-2.jpeg"
import { lazy, Suspense } from "react";
//import ShopCategory from "./_component/ShopCategory/ShopCategory";
const ShopCategory= lazy(() => import('./_component/ShopCategory/ShopCategory'));

export default function Home() {
  return (
  <>
  
  <Slider spaceBetween={0} slidesPerView={1} pageList={[img1.src ,img2.src ,img3.src]}/>

  {/*shop category*/}
<Suspense fallback={<div className="h-25 w-full flex justify-center items-center bg-gray-200">loading...</div>}>
  <ShopCategory></ShopCategory>

</Suspense>
  <ProductFeature></ProductFeature>
  </>
  );
}
