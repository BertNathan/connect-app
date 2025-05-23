import { IconLogout, IconLogout2, IconUser, IconUsersGroup, IconUsersPlus,IconPlus } from "@tabler/icons-react";
import { Icon } from "lucide-react";

export default function Users() {
  return (


    <section id="container" class="flex h-screen justify-center">

      <section id="navigation" class="bg-white w-[15%] border-r border-gray-300 p-4 ">
        <h1 class="text-[30px] mb-5  font-sans  font-bold text-center">Connect</h1>
        <div class="nav-buttons flex flex-col items-center gap-4 p-2 w-full mb-2 font-bold text-[18px]">
          <button class="rounded-[10px] flex items-center gap-2 py-2 px-3 bg-black text-white border border-gray-300 w-[90%] cursor-pointer">
            <IconUser/> User
          </button>
          <button class=" flex items-center gap-2 py-2 px-3 w-[90%]">
            <IconUsersPlus /> Hak Akses
          </button>
          <button class=" flex items-center gap-2 py-2 px-3  w-[90%] ">
            <IconLogout2 /> Logout
          </button>
        </div>
      </section>

 
      <section id="content" class="bg-white w-[85%] p-5">
        <input
          placeholder="Cari user"
          class="flex w-[98%] h-[5vh] mb-5 p-4 text-[14,5px] border border-gray-300 rounded-[7px]"
        />


        <div class="user-card flex w-[97%] justify-between items-center border border-gray-300 rounded-[7px] p-3 mb-2 bg-white text-[15px] leading-tight">
          <div class="user-info">
            <h2 class="text-base font-bold text-[16px] font-sans">Rahmat Saudi Al Fathir As</h2>
            <p class="my-[2px] text-gray-600 font-sans">rahmatsaudi@universitasmulia.ac.id</p>
            <div class="mt-1.5">
              <span class="inline-block bg-black text-white px-1 py-[1px] text-[10px] rounded-[2px] font-sans mr-1.5">Admin</span>
              <span class="inline-block bg-black text-white px-1 py-[1px] text-[10px] rounded-[2px] font-sans">Employee</span>
            </div>
          </div>
          <div class="status aktif flex text-lg font-bold font-sans">Aktif</div>
        </div>

        <div class="user-card flex w-[97%] justify-between items-center border border-gray-300 rounded-[7px] p-3 mb-2 bg-white text-[15px] leading-tight">
          <div class="user-info">
            <h3 class="text-base font-bold text-[16px] font-sans">Lintang</h3>
            <p class="my-[2px] text-gray-600 font-sans">lintang@universitasmulia.ac.id</p>
            <div class="mt-1.5">
              <span class="inline-block bg-black text-white px-1 py-[1px] text-[10px] rounded-[2px] font-sans">Employee</span>
            </div>
          </div>
          <div class="status aktif flex text-lg font-bold font-sans">Aktif</div>
        </div>

        <div class="user-card flex w-[97%] justify-between items-center border border-gray-300 rounded-[7px] p-3 mb-2 bg-white text-[15px] leading-tight">
          <div class="user-info">
            <h4 class="text-base font-bold text-[16px] font-sans">Shafira</h4>
            <p class="my-[2px] text-gray-600 font-sans">shafira@universitasmulia.ac.id</p>
            <div class="mt-1.5">
              <span class="inline-block bg-black text-white px-1 py-[1px] text-[10px] rounded-[2px] font-sans">Employee</span>
            </div>
          </div>
          <div class="status aktif flex text-lg font-bold font-sans">Aktif</div>
        </div>

        <div class="user-card flex w-[97%] justify-between items-center border border-gray-300 rounded-[7px] p-3 mb-2 bg-white text-[15px] leading-tight">
          <div class="user-info">
            <h5 class="text-base font-bold text-[16px] font-sans">Lebah Ganteng</h5>
            <p class="my-[2px] text-gray-600 font-sans">lebahganteng@universitasmulia.ac.id</p>
            <div class="mt-1.5">
              <span class="inline-block bg-black text-white px-1 py-[1px] text-[10px] rounded-[2px] font-sans">Employee</span>
            </div>
          </div>
          <div class="status suspended flex text-lg font-bold font-sans">Suspended</div>
        </div>
      </section>
      <button class="absolute bottom-10 right-6 bg-gray-300 hover:bg-gray-100 text-xl w-15 h-10 rounded flex items-center justify-center ">
        <IconPlus />
      </button>
    </section>

    

  );
}