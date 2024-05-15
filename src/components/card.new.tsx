
export default function Card(props:any) {
  return (
    <div className="bg-white rounded-lg shadow-md" key={props.id}>
       <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Image 1"
          className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
        />
          <div className="p-6 text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              {props.name}
            </h3>
            <p className="text-gray-700 text-base">
             {props.type}
            </p>
          </div>
        </div>
  )
}
