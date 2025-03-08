import { Mail, MapPin, Send } from "lucide-react";
import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Entre em Contato
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Vamos Conversar!</h3>
            <p className="dark:text-gray-400 text-dark mb-8">
              Estou sempre aberto a novas oportunidades. Sinta-se à vontade para entrar em contato!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                 <a target="_blanck" href="https://www.google.com.br/maps/place/Itu,+SP/@-23.3251344,-47.4601737,11z/data=!3m1!4b1!4m6!3m5!1s0x94cf5b325a970985:0xee86064475a064!8m2!3d-23.2636895!4d-47.3011001!16s%2Fg%2F1pxymql39?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D0">
                 <MapPin className="text-blue-400" style={{cursor:"pointer"}} />
                 </a> 
                </div>
                <div>
                  <h4 className="font-semibold">Localização</h4>
                  <p className="dark:text-gray-400 text-gray-800">
                    Itu, SP - Brasil
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <a href="mailto:kayky.m.santana@gmail.com"><Mail className="text-blue-400" /></a>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="dark:text-gray-400 text-gray-800">
                    kayky.m.santana@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            method="post"
            action="https://api.staticforms.xyz/submit"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium dark:text-gray-400 text-dark mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 dark:bg-black/30 bg-white border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium dark:text-gray-400 text-dark mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 dark:bg-black/30 bg-white border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium dark:text-gray-400 text-dark mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 dark:bg-black/30 bg-white border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                required
              ></textarea>
              <input type="text" name="honeypot" style={{ display: "none" }} />
              <input
                type="hidden"
                readOnly
                name="accessKey"
                value="9ccd2d43-6725-4574-bd74-59544c7ddb6c"
              />
              <input
                type="hidden"
                readOnly
                name="subject"
                value="Contact us from - example.com"
              />
              <input type="hidden" name="replyTo" value="@" />
              <input
                type="hidden"
                readOnly
                name="redirectTo"
                value="https://kaykymatos.github.io/#contact"
              />

              <input
                type="text"
                name="$From"
                readOnly
                hidden
                value="kaykymatos.github.io"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r dark:from-blue-500 dark:to-purple-600 from-blue-500 to-purple-900 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
