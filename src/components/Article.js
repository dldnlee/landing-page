

export default function Article(props) { 
  return (
    <div className="flex flex-col gap-10 ">
      <h2 className="text-6xl font-extrabold">{props.title}</h2>
        <p className="text-10 md:text-2xl">{props.content}</p>
    </div>
  )
}