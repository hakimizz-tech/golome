import { useLocation } from "wouter";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ProductBreadCrumpProps {
  productName?: string;
}

function ProductBreadCrump({ productName }: ProductBreadCrumpProps) {
  const [location] = useLocation();

  return (
    <div className="container mx-auto px-4 py-1">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {location === "/bags" && (
            <BreadcrumbItem>
              <BreadcrumbPage>Bags</BreadcrumbPage>
            </BreadcrumbItem>
          )}
          {location === "/products" && (
            <BreadcrumbItem>
              <BreadcrumbPage>Products</BreadcrumbPage>
            </BreadcrumbItem>
          )}
          {productName && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Product</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{productName}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default ProductBreadCrump;
