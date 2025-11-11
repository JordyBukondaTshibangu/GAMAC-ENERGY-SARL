type ServiceItemProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function ServiceItem({ icon, title, desc }: ServiceItemProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
      {icon}
      <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

export default ServiceItem;
