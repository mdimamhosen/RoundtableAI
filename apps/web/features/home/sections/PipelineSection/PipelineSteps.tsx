export function PipelineSteps() {
  return (
    <ol className="mt-8 divide-y divide-line border-y border-line text-sm">
      <li className="grid grid-cols-[4rem_1fr] gap-4 py-4"><span className="font-serif text-2xl">01</span><span>Upload the batch. We do not keep a gallery of it on the marketing site.</span></li>
      <li className="grid grid-cols-[4rem_1fr] gap-4 py-4"><span className="font-serif text-2xl">02</span><span>AI enhance. Dust, tone, and a straight crop if you asked for one.</span></li>
      <li className="grid grid-cols-[4rem_1fr] gap-4 py-4"><span className="font-serif text-2xl">03</span><span>You rate the batch. Keep, redo, or hand the frame to a person.</span></li>
      <li className="grid grid-cols-[4rem_1fr] gap-4 py-4"><span className="font-serif text-2xl">04</span><span>Human handoff. An editor works the note and sends the file back.</span></li>
    </ol>
  );
}
