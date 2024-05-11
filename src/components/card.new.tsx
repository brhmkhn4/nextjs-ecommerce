
export default function Card(props:any) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png"
            alt="wheat flour grinding"
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
