function GMCMap() {
  return (
    <div className="w-full mt-64">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Find us on the map
      </h3>
      <iframe
        title="Company Location"
        className="w-full h-[800px] rounded-lg border border-gray-200"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.722692983601!2d15.284185674711853!3d-4.325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3381bcbf0a2b%3A0xd5b7d97a1f0d8a20!2sKinshasa!5e0!3m2!1sen!2scd!4v1699536600000!5m2!1sen!2scd"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default GMCMap;
