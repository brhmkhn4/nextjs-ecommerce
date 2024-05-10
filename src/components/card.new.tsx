
export default function Card(props:any) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src=""
            alt="wheat flour grinding"
            className="w-full h-64 object-cover"
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
