import Image from 'next/image';


export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row bg-[#FEEEDD] p-8 md:items-center justify-center space-y-6 md:space-y-0">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-5xl font-bold" style={{ fontFamily: 'Spicy Rice, cursive', color: '#013D4D' }}>
          BVP ISTE
        </h1>
        <h2 className="text-lg font-semibold" style={{ fontFamily: 'Spicy Rice, cursive', color: '#013D4D' }}>
          Indian Society for Technical Education
        </h2>
        <p className="text-gray-700" style={{ fontFamily: 'Work Sans, sans-serif', color: '#013D4D' }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Lorem ipsum dolor sit amet,
           consectetur adipisicing elit. Iste esse a aperiam quos blanditiis? In ab eligendi asperiores
           <br />
           <br />
          praesentium recusandae ad nulla consequuntur officia sunt minus numquam reiciendis, tenetur unde.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium cupiditate reprehenderit omnis nam, soluta,
          et assumenda sunt molestiae quidem mollitia velit, cumque iste deserunt quasi.vitae hic qui molestias quis
        </p>
      </div>


      {/* Image Section with Double Frame */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="relative border-4 border-[#2B2B2B] p-3">
          <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#FEEEDD] border-4 border-[#2B2B2B]"></div>
          <Image
            src="/assets/hero_image_3_v1.png"  // Replace with your actual image path
            alt="Group Photo"
            width={500}
            height={300}
            className="relative z-10 rounded-lg border-2 border-black-400 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
