import Image from "next/image";
import Profile from "../assets/profile.png";
import { SVGProps } from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function HomeSetion() {
  
  return (
    <section id="home" style={{marginBottom:'25em', backgroundColor:"transparent"}}>
        
      <div className=" gx-5 align-items-center mt-5">
        <div className="col-xxl-5">
          <div className="text-center text-xxl-start">
            <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
              <div className="text-uppercase">Desenvolvedor</div>
            </div>
            <h1 className="display-3 fw-bolder">
              <span className="text-gradient d-inline circled-text ">
                Construindo o futuro, uma aplicação de cada vez.
              </span>
            </h1>
          </div>
        </div>
        
      </div>
    </section>
  );
}
