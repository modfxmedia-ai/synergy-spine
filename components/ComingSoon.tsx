type ComingSoonProps = {
  title: string;
  eyebrow?: string;
};

export default function ComingSoon({ title, eyebrow }: ComingSoonProps) {
  return (
    <main className="min-h-[60vh] bg-brand-bg flex items-center">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="section-title mt-3 text-4xl md:text-5xl text-brand-navy font-semibold">
          {title}
        </h1>
        <p className="mt-6 text-brand-textLight text-lg">Coming soon.</p>
      </div>
    </main>
  );
}
