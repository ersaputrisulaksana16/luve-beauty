// Komponen tombol reusable yang menerima prop variant dan event onClick
export default function Button({
  children,
  variant = 'secondary',
  type = 'button',
  onClick,
  ariaLabel,
  ariaPressed,
  className = '',
}) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} ${className}`.trim()}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
    >
      {children}
    </button>
  );
}
