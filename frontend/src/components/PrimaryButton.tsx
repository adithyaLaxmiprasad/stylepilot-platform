export default function PrimaryButton({
  text,
  onClick,
  disabled,
}: {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="w-full bg-brand-gold text-brand-black text-sm py-5 rounded-full font-semibold tracking-[0.2em] hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed shadow-[0_0_40px_rgba(193,166,123,0.15)] hover:shadow-[0_0_60px_rgba(193,166,123,0.3)] uppercase"
    >
      {text}
    </button>
  );
}

