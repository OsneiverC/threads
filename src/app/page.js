import { Buttonlogin } from "../components/buttonLogin"
import { useRouter } from "next/router.js"
export default function pageLogin() {
  
  return (
    <div className="bg-[url('https://static.cdninstagram.com/rsrc.php/yD/r/eIJhnL1FtGH.webp')] bg-contain bg-top bg-no-repeat  bg-[#101010] h-screen flex flex-col justify-center items-center gap-[30px]">
      <div>
        <div className="flex flex-col gap-5 text-center text-2xl">
          <h3 className="font-bold">Inicia sesión con tu cuenta de Google</h3>
          <input
            type="text"
            placeholder="Nombre de usuario, teléfono o correo electrónico"
            className="rounded-2xl p-5 bg-[#1e1e1e] w-[470px] h-[70px]"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="rounded-2xl p-5 bg-[#1e1e1e] "
          />
          <button className="bg-white text-gray-400 rounded-2xl p-5">
            Iniciar sesión
          </button>
          <a className="opacity-85">¿ Olvidaste tu contraseña ?</a>
        </div>
      </div>

      <div className="w-[470px] h-[20px] opacity-[0.5] relative">
        <hr />
        <span className="absolute bg-[#101010] text-2xl right-[44%] top-[-10px] px-5">
          {" "}
          O{" "}
        </span>
      </div>

    <Buttonlogin/>

      <ul className="flex opacity-[0.5] gap-5 absolute bottom-5">
        <li>© 2024</li>
        <li>Condiciones de Threads</li>
        <li>Política de privacidad</li>
        <li>Política de cookies</li>
        <li>Reportar un problema</li>
      </ul>

      <div className="flex flex-col items-center gap-3 absolute bottom-10 right-10">
        <p className="opacity-[0.5]">Escanea el código para descargar la app</p>
        <div className="bg-[#181818] p-5 border-2 border-gray-600 rounded-2xl hover:scale-110 ">
          <img
            src="https://borealtech.com/wp-content/uploads/2018/10/codigo-qr-1024x1024-1.jpg"
            className="w-[160px]"
          ></img>
        </div>
      </div>
    </div>
  );
}
