export default function Button({ label = 'Click Me', color = 'blue', textColor = 'white', className, href }) {
    const combinedClassName = 
    `px-3 py-2 text-sm m-4 lg:px-5 lg:py-3 md:text-xl lg:text-xl lg:m-2 font-semibold bodyFont shadow-lg leading-none bg-${color} text-${textColor} ${className}`;

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
