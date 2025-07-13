import Advertisementsection from "@/components/home/advertisementsection";
import Imageconversionsection from "@/components/home/imageconversionsection";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div className="overflow-y-auto flex flex-col items-center justify-center">
      <Navbar/>
      <Imageconversionsection/>
      <Advertisementsection/>
    </div>
  );
}
