export default function TextArea({
  label,
  placeholder,
  onChange,
}: {
  label: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.2em] text-white/70 mb-3 font-medium">
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-h-[140px] bg-transparent border border-white/10 rounded-2xl px-6 py-5 focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 outline-none transition-all text-sm font-light text-white/80 placeholder:text-white/20 resize-y"
      />
    </div>
  );
}
