import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row bg-[#FEEEDD] p-10 md:p-12 lg:p-16 md:items-center justify-center space-y-6 md:space-y-0">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-5xl font-bold" style={{ fontFamily: 'Spicy Rice, cursive', color: '#013D4D' }}>
          BVP ISTE
        </h1>
        <h2 className="text-lg font-semibold" style={{ fontFamily: 'Spicy Rice, cursive', color: '#013D4D' }}>
          Indian Society for Technical Education
        </h2>
        <p className="text-gray-700" style={{ fontFamily: 'Work Sans, sans-serif', color: '#013D4D' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, saepe sit natus excepturi quisquam impedit? Ducimus debitis
          iure tenetur sunt quod corporis blanditiis, illum quidem 
          doloribus, aliquam sed fugit enim?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, saepe sit natus excepturi quisquam impedit? Ducimus debitis
          iure tenetur sunt quod corporis blanditiis, illum quidem 
          doloribus, aliquam sed fugit enim?
        </p>
      </div>

      {/* Image Section with Double Frame Effect */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="relative p-4">
          {/* Outer Frame with rounded bottom-right corner */}
          <div className="absolute right-0 bottom-0 w-full h-full border-r-8 border-b-8 border-[#013D4D] translate-x-2 translate-y-2 rounded-br-2xl"></div>

          {/* Inner Frame */}
          <div className="relative border-8 border-[#013D4D] p-2 bg-[#FEEEDD] rounded-2xl">
            <Image
              src="/assets/story_image.png"  
              alt="Story Image"
              width={600}  
              height={350}  
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

