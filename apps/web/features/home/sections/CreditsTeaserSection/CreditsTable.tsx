export function CreditsTable() {
  return (
    <table className="mt-8 w-full border-collapse text-left text-sm">
      <thead>
        <tr className="border-b border-ink">
          <th className="py-2 font-normal">Line</th>
          <th className="py-2 font-normal">Sample</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-line"><td className="py-3">AI first pass</td><td>$4</td></tr>
        <tr className="border-b border-line"><td className="py-3">Human basic</td><td>$14</td></tr>
        <tr className="border-b border-line"><td className="py-3">Human standard</td><td>$28</td></tr>
        <tr><td className="py-3">Human advanced</td><td>$48</td></tr>
      </tbody>
    </table>
  );
}
