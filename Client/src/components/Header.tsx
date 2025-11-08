import { IProduct } from "../model/IProduct";

interface Props  {
  products: IProduct[];
}

export default function Header({ products }: Props) {
  return <h1>Header ({products.length})</h1>;
}
