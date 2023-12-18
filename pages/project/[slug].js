import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const ProjectDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const projectData = {
    rumahathan: {
      title: "Rumah Athan",
      description:
        "Rumah Athan adalah website yang dibuat sebagai company profile juga sebagai pendataan customer dan product. ",
      imageUrl: "/images/rumahathan.png",
      projectUrl: "https://www.rumahathan.com/",
    },
    rumahsampah: {
      title: "Rumah Sampah",
      description:
        "Landing Page Rumah Sampah merupakan company profile yang dibuat pada tahun 2022.",
      imageUrl: "/images/rumahsampah.png",
      projectUrl: "https://www.rumahsampah.com/",
    },
    samiagung: {
      title: "E-Kasir Samiagung Banyuwangi",
      description:
        "Aplikasi simple E-Kasir yang dibuat untuk pendataan barang masuk dan keluar.",
      imageUrl: "/images/samiagung.png",
      projectUrl: "https://samiagungbanyuwangi.com/",
    },
    emc: {
      title: "Election Management Control",
      description:
        "Aplikasi EMC adalah sebuah aplikasi yang dibuat untuk calon legislatif untuk pendataan para pendukungnya.",
      imageUrl: "/images/emc.png",
      projectUrl: "https://app-emc.powerdigital.id/",
    },
    sagraha: {
      title: "PT.Sagraha Satya Sawahita",
      description:
        "Company profile yang dibuat sebagai website resmi dari PT.Sagraha Satya Sawahita Banyuwangi.",
      imageUrl: "/images/sagraha.png",
      projectUrl: "https://ptsagrahabwi.com/",
    },
    pregan: {
      title: "Simple Website Pregnagrowth",
      description:
        "Tampilan simple webiste pregnagrowth sebagai bahan tugas akhir di program bangkit.",
      imageUrl: "/images/pregna.png",
      projectUrl: "https://35.223.73.159:8080/",
    },
  };

  if (typeof slug !== "undefined") {
    const project = projectData[slug] || {};
    return (
      <>
        <Navbar />
        <motion.div
          initial={{ opacity: 0, x: -20 }} // Konfigurasi awal animasi
          animate={{ opacity: 1, x: 0 }} // Konfigurasi animasi selama
          transition={{ duration: 1 }} // Durasi animasi
        >
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <Image
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={project.imageUrl}
                alt={project.title}
                width={1920}
                height={1080}
              />

              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Mobile Apps
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {project.title}
                </h1>
                <p className="leading-relaxed">{project.description}</p>
                <Link href={project.projectUrl}>
                  <span className="mt-4 bg-gray-900 text-white font-medium py-2 px-4 rounded inline-block">
                    Lihat Dokumentasi
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <Footer
          link="/project"
          icon={<Unicons.UilAngleDoubleLeft className="w-12 h-12" />}
        />
      </>
    );
  }
};

export default ProjectDetailPage;
