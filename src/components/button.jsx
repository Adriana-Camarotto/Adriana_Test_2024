export default function Button({ label = 'Click Me', color = 'blue', textColor = 'white', className, href }) {
    const combinedClassName = 
    `hover:scale-105 duration-300 px-3 py-2 text-sm m-4 lg:px-5 lg:py-3 md:text-xl lg:text-xl lg:m-2 font-semibold bodyFont leading-none bg-${color} text-${textColor} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedClassName}>
                {label}
            </a>
        );
    }

    return (
        <button className={combinedClassName}>
            {label}
        </button>
    );
}
