export function ProofStats() {
  return (
    <dl className="mt-8 grid gap-4 border-t border-line pt-4 text-sm sm:grid-cols-3">
      <div><dt className="text-ink/60">Typical AI pass</dt><dd className="font-serif text-2xl">minutes</dd></div>
      <div><dt className="text-ink/60">Human finish</dt><dd className="font-serif text-2xl">same day</dd></div>
      <div><dt className="text-ink/60">Rounds on a note</dt><dd className="font-serif text-2xl">one</dd></div>
    </dl>
  );
}
