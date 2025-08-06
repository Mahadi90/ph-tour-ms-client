import Logo from "@/assets/icons/Logo"
import signupImg  from '../assets/images/travel-register.jpg'
import { SignUpForm } from "@/modules/authentications/registration-form"


export default function Registration() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
        <div className="relative hidden lg:block">
        <img
          src={signupImg}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover "
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
         <a href="#" className="flex items-center gap-2 font-medium">
            <div className=" flex  items-center justify-center">
              <Logo/>
            </div>
            PH tour
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignUpForm/>
          </div>
        </div>
      </div>
    </div>
  )
}
