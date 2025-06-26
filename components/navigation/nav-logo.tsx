import { ShoppingBasket } from "lucide-react";
import Link from "next/link";

const NavLogo = () => {
  return (
    <div>
      <Link href={"/"} className="text-3xl font-bold text-primary">
        <ShoppingBasket size={50} />
      </Link>
    </div>
  );
};

export default NavLogo;
