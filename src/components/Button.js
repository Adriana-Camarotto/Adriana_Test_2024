export default function Button({ label = 'Click Me', color = 'blue', textColor = 'white', className, href }) {
    const combinedClassName = 
    `text-base bodyFont bg-${color} text-${textColor} ${className}`;

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
