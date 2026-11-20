function GMCMap({ title }: { title: string }) {
  return (
    <section aria-label={title} className="border-t border-line">
      <iframe
        title={title}
        className="block h-[420px] w-full md:h-[520px]"
        src="https://www.google.com/maps?q=9+Avenue+du+Port,+Gombe,+Kinshasa&output=embed"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

export default GMCMap;
