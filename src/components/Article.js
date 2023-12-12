

export default function Article(props) { 
  return (
    <div className="flex flex-col gap-10 ">
      <h2 className="text-4xl font-extrabold text-blue-900">{props.title}</h2>
        <p className="text-2xl md:text-2xl text-blue-900">{props.content}</p>
    </div>
  )
}