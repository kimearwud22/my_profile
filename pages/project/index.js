import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const projects = [
  
  {
    title: "Rumah Sampah",
    description: "Landing Page Rumah Sampah merupakan company profile yang dibuat pada tahun 2022.",
    imageUrl: "/images/rumahsampah.png",
    slug: "rumahsampah",
  },
  {
    title: "E-Kasir Samiagung Banyuwangi",
    description: "Aplikasi simple E-Kasir yang dibuat untuk pendataan barang masuk dan keluar.",
    imageUrl: "/images/samiagung.png",
    slug: "samiagung",
  },
  {
    title: "Rumah Athan",
    description: "Website yang dibuat sebagai company profile juga sebagai pendataan customer dan product.",
    imageUrl: "/images/rumahathan.png",
    slug: "rumahathan",
  },
  {
    title: "Simple Webiste PregnaGrowth",
    description: "Tampilan simple webiste pregnagrowth sebagai bahan tugas akhir di program bangkit.",
    imageUrl: "/images/pregna.png",
    slug: "pregan",
  },
  {
    title: "Election Menegement Control",
    description: "Aplikasi EMC adalah sebuah aplikasi yang dibuat untuk calon legislatif untuk pendataan para pendukungnya.",
    imageUrl: "/images/emc.png",
    slug: "emc",
  },
  {
    title: "Company Profile PT.Sagraha Satya Sawahita",
    description: "Company profile yang dibuat sebagai website resmi dari PT.Sagraha Satya Sawahita Banyuwangi.",
    imageUrl: "/images/sagraha.png",
    slug: "sagraha",
  },
  
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl flex flex-wrap min-h-screen flex-col items-start justify-center md:pl-[8rem] p-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl font-semibold mb-6">My Project</h1>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {projects.map((project) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                <Card
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  slug={project.slug}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer
        link="/"
        icon={<Unicons.UilAngleDoubleLeft className="w-12 h-12" />}
      />
    </>
  );
}
