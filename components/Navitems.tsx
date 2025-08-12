import Link from "next/link";
const navItems = [
    {
        label: 'Home',
        href: "/",
    },
    {
        label: 'Companions',
        href: '/Companion',
    },
    {
        label: 'My Journey',
        href: '/My-Journey',
    },
];

const Navitems = () => {
  return (
  <nav className= "flex items-center gap-4">
   {navItems.map(({label , href}) => (
    <Link href = {href}  key = {label}>
        {label}
    </Link>
))}
  </nav>
  )
}

export default Navitems;