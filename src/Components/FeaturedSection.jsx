import Link from 'next/link';
import { Card, Button, Spinner } from "@heroui/react";
import { ArrowRight } from '@gravity-ui/icons';
import Image from 'next/image';

const FeaturedSection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/featured-doctors`, { cache: 'force-cache' });
  const doctors = await res.json();

  return (
    <section className="py-12 md:py-24 bg-gray-50/50 w-full">
      <div className="max-w-[93%] md:max-w-[97%] mx-auto px-6 lg:px-8">

        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[#0066FF] font-bold tracking-widest uppercase text-sm mb-2">
              Premium Care
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Top Rated Doctors
            </h2>
          </div>

          <Link href="/all-appointments" className="hidden md:flex">
            <Button variant="flat" className="bg-[#0066FF]/10 text-[#0066FF] font-bold hover:bg-[#0066FF]/20">
              See All Doctors <ArrowRight />
            </Button>
          </Link>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {doctors.map((doctor) => (
            <Card key={doctor.id} className="group relative col-span-1 h-102 w-full overflow-hidden rounded-3xl border-none shadow-md hover:scale-102 transition-all duration-500">

              <Image
                alt={doctor.name}
                aria-hidden="true"
                width={500}
                height={600}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
                src={doctor.image}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/10 z-0"></div>

              <Card.Header className="relative z-10 flex flex-col items-start p-1">
                <span className="rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-white border border-white/10 shadow-sm">
                  {doctor.specialty}
                </span>
              </Card.Header>

              <Card.Footer className="relative z-10 mt-auto flex flex-row items-end justify-between p-1">
                <div className="flex flex-col gap-1 pr-4">
                  <div className="text-xl font-bold text-white tracking-tight">
                    {doctor.name}
                  </div>
                  <div className="text-sm font-medium text-white/70">
                    {doctor.experience} • {doctor.hospital}
                  </div>
                </div>

                <Link href={`/doctor/${doctor.id}`}>
                  <Button className="bg-white/85 glass text-[#0066FF] font-bold shadow-lg shrink-0" size="sm" variant="solid">
                    View Details
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
          ))}

        </div>

        <div className="flex mt-12 justify-end md:hidden">

          <Link href="/all-appointments">
            <Button variant="flat" className="bg-[#0066FF]/10 text-[#0066FF] font-bold hover:bg-[#0066FF]/20">
              See All Doctors <ArrowRight />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedSection;