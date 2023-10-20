

const services = [
  {
    id: 1,
    icon: '🚗',
    title: 'Car Sales',
    description: 'Explore a wide range of high-quality cars for sale.'
  },
  {
    id: 2,
    icon: '🔧',
    title: 'Car Maintenance',
    description: 'Expert car maintenance and repair services.'
  },
  {
    id: 3,
    icon: '🏎️',
    title: 'Performance Upgrades',
    description: 'Enhance your car\'s performance with our upgrade services.'
  },
];

const Service = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Our <span className="text-green-400">Services</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
