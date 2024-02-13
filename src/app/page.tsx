import Product from "@/components/product";
import { ProductType } from "@/interfaces";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();

  console.log(products);

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-52">
      <section className="flex flex-col space-y-12">
        <h1 className="text-5xl font-bold text-center">SHOP DEALS</h1>
        <div className="">
          {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
        </div>
      </section>
    </main>
  );
}
