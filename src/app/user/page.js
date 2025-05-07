import {IconUsers} from "@tabler/icons-react";
export default function User() {
  return (
    <div className="flex h- [100vh] bg-white">
      <section id="Navigation" className='collumn h-[100npmvh] pt-10 p-10 text-black font-serif '>
        <h1 className="text-black">Connect</h1>
        <div>
          <button className="bg-black iconUser">Users</button>
          <button>Hak Akses</button>
          <button>Logout</button>
        </div>
      </section>

      <section id="Content">
        <input placeholder="Cari User"></input>
        <div id="List Users"></div>
            <div class='user info'></div>
                <h2>Rahmat Saudi Al Fathir As</h2>
                <p>rahmatsaudi@universitasmulia.ac.id</p>
                <div>
                    <span>Admin</span>
                    <span>Employee</span>
                </div>
            <div class='status aktif'>Aktif</div>


      </section>
    </div>
  );
}
