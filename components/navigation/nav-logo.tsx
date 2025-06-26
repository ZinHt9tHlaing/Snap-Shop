import Link from "next/link";

const NavLogo = () => {
  return (
    <div>
      <Link href={"/"} className="text-3xl font-bold text-primary">
        <h1>$napShop</h1>
      </Link>
    </div>
  );
};

export default NavLogo;
