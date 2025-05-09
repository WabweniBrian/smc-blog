export default function SectionTitle({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <div className="h-1 w-16 bg-teal-400 mx-auto"></div>
    </>
  )
}
