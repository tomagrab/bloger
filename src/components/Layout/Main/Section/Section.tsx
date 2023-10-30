type SectionProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Section({ className, children }: SectionProps) {
  return (
    <section className={`${className} flex flex-col w-full p-4`}>
      {children}
    </section>
  );
}
