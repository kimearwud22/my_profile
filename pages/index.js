import CustomText from "@/components/CustomText";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import * as Unicons from "@iconscout/react-unicons";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl flex flex-wrap min-h-screen flex-col items-start justify-center md:pl-[8rem] p-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }} // Konfigurasi awal animasi
          animate={{ opacity: 1, x: 0 }} // Konfigurasi animasi selama
          transition={{ duration: 1 }} // Durasi animasi
        >
          <CustomText className="font-medium text-2xl px-2">Hello iam,</CustomText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }} // Konfigurasi awal animasi
          animate={{ opacity: 1, x: 0 }} // Konfigurasi animasi selama
          transition={{ duration: 1.5 }} // Durasi animasi
        >
          <div className="flex flex-col px-2 text-start">
            <div className="flex flex-row mb-1">
              <CustomText className="font-semibold text-6xl pr-2">
                Moh Nur 
              </CustomText>
              <CustomText className="font-semibold text-6xl text-[#57cc99]">
                Hakim
              </CustomText>
            </div>
            <CustomText className="font-medium text-3xl pb-2">
              Full Stack Developer
            </CustomText>
            <CustomText className="font-normal text-1xl">
            Hello, I really like challenges, especially in the field of technological development. Currently I am a web programmer at a software house in Banyuwangi, namely Power Digital Technology. I work together with the existing team to create programs or applications for clients, so that this collaboration will produce an application that can be used. Additionally, I am a freelance web developer and produce several individually created applications.
            </CustomText>
          </div>
        </motion.div>
      </main>
      <Footer
        link="/project"
        icon={<Unicons.UilAngleDoubleRight className="w-12 h-12" />}
      />
    </>
  );
}
