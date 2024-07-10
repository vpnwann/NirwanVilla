import Image from "next/image";

export default function Home() {
  return (
    <>
    <section class="py-8 z-10 font-serif">
  <div class="flex flex-col md:flex-row items-center max-w-6xl px-6 py-8 mx-auto">
    <div class="w-full md:w-1/2 py-8">
      <h1 class="text-purple-900 text-7xl font-semibold leading-none tracking-tighter">
        Welcome to <br/><span class="text-blue-500">Nirwan   <br/></span> Villa.
      </h1>
    </div>
    <div class="w-full md:w-1/2 py-8">
      <img src="/1.jpg"   className=" rounded-2xl" class="g-image"/>
    </div>
  </div>
</section>








<div class=" h-screen h-full py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div class="flex items-center gap-12">
                <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>

                <p class="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
                    This is a section of some simple filler text,
                    also known as placeholder text. It shares some characteristics of a real written text.
                </p>
            </div>

           
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
           
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="/3.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                
            </a>
          
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="/4.jpg" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

          
            </a>
           
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="/5.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

            </a>
           
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="/6.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

           
            </a>
            
            
        </div>
    </div>
</div>
    
<footer class="flex flex-col space-y-10 justify-center m-10  " style={{marginTop:"50%"}}>



<p class="text-center text-gray-700 font-medium">&copy; 2024 NirwanVilla. All rights reservered.</p>
</footer>
    </>
  );
}
