export default async function Review(params: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      <h2>Lecture</h2>
      <p>Lecture content goes here.</p>
    </div>
  );
}
