
export default function Workpage() {
  return (
   <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold mb-4">Our Work</h1>
      <p className="text-gray-600 mb-10">
        A showcase of our recent interior & decor projects
      </p>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map(item => (
          <div key={item.id} className="group relative overflow-hidden rounded-2xl">
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
              <div>
                <h3 className="text-white font-medium">{item.title}</h3>
                <p className="text-sm text-gray-300">
                  {item.category} · {item.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  )
}
