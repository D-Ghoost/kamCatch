import { UserCircleIcon } from "@heroicons/react/24/solid";
import LayoutCenterItems from "../../Layout/LayoutCenterItems";

const Login = () =>{

    const validateInfo = (e) => {
        e.preventDefault();
        console.log("Validando información");
    }

    return (
        <LayoutCenterItems>
            <div className=" w-6/12 h-3/5 flex flex-col items-center bg-cyan-50 ">
                <UserCircleIcon className=" w-40 h-40 text-cyan-800 mt-4" />
                <h1 className=" mt-4 text-3xl font-medium text-black ">Bienvenido a KamCatch</h1>
                <form onSubmit={ validateInfo } className="mt-4" >
                        <input 
                            type="text" 
                            placeholder="Usuario" 
                            className=" w-full h-10 mt-4 border-2 hover:border-cyan-600 focus:outline-none focus:border-cyan-600 rounded-md mt-2 pl-3 italic " 
                            required
                        />
                        <input 
                            type="password" 
                            placeholder="Contraseña" 
                            className=" w-full h-10 mt-4 border-2 hover:border-cyan-600 focus:outline-none focus:border-cyan-600 rounded-md mt-2 pl-3 italic" 
                            required
                        />
                        <button 
                            type="submit" 
                            className=" w-full h-10 mt-4 bg-cyan-800 text-white rounded-md mt-2"
                        >
                            Iniciar Sesión
                        </button>
                </form>
                <hr className=" w-full h-2 mt-20 " />
                <div className=" flex justify-center items-center w-full h-12 ">
                    <h3 className=" italic text-sm ">Creado para &#123; Catch &#125;</h3>
                </div>
            </div>
        </LayoutCenterItems>
    );
}

export default Login;