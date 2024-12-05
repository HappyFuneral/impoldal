export default function HrefLink({href, children}){
return (
<a className="hover:text-purple-600 text-gray-400" href={href}>{children}</a>
)
}
