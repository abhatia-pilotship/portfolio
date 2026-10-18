/**
 * A clearly-marked image placeholder at the exact size/crop the composition needs.
 * No real asset exists for most slots (PRODUCT.md imagery rules: no evidence hunting,
 * no found images). It is a flat surface panel (no thin rules — house style), labelled
 * with what belongs there, so Aryan can drop a real file in later.
 */
export function Placeholder({
  label,
  ratio = "16/10",
  className = "",
}: {
  label: string;
  ratio?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-surface p-6 text-center ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <span className="max-w-measure text-small text-muted">
        <span className="font-display mb-2 block text-base tracking-tight text-ink/80">
          Image placeholder
        </span>
        {label}
      </span>
    </div>
  );
}
