const email = "angel@romerobaez.com";
export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tight">Contact me</h1>
      <p>
        You can contact me by email at <a href={`mailto:${email}`}>{email}</a>.
      </p>
    </section>
  );
}
