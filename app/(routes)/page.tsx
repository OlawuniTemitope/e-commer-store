import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0
const HomePage = async()=> {
  const billboard = await getBillboards("1416d794-a601-4147-997b-ad57181cd0cd")
  const product = await getProducts({isFeatured:true})
  return (
  <Container>
    <div className=" space-y-10 pb-10">
      <Billboard data={billboard}/>
    
    <div className="flex flex-col gap-y-4 px-4 sm:px-6 lg:px-8">
      <ProductList title="Featured products" items={product} />
    </div>
    </div>
  </Container> 
   );
}

export default HomePage
