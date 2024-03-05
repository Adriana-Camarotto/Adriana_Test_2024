export default function Button({ label = 'Click Me', color = 'blue', textColor = 'white', className, href }) {
    const combinedClassName = 
    `text-base bodyFont hover:scale-105 duration-300 cursor-pointer bg-${color} text-${textColor} ${className}`;

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
