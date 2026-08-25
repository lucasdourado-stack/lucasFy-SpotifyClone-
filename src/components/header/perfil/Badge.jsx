

const Badge = ({count}) => {
  return (
    <div>
      <div className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full h-5 inline-flex items-center justify-center ">{count}</div>
    </div>
  )
}

export default Badge
