type ContactInfoBlockProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

const ContactInfoBlock = ({ icon, title, value }: ContactInfoBlockProps) => (
  <div className="flex items-center gap-4">
    {icon}
    <div className="flex flex-col">
      <span className="font-medium text-md text-amber-500">{title}</span>
      <span className="leading-6 text-white">{value}</span>
    </div>
  </div>
);

export default ContactInfoBlock;
