import { useState } from "react";
import { useForm } from "react-hook-form";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      formData.append("access_key", apiKey);
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);
      formData.append("botcheck", data.botcheck || "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const res = await response.json();

      if (res.success) {
        setIsSuccess(true);
        setMessage("¡Mensaje enviado con éxito! Te responderé a la brevedad.");
        reset();
      } else {
        setIsSuccess(false);
        setMessage(res.message || "Algo salió mal. Por favor, inténtalo más tarde.");
      }
    } catch (error) {
      console.error("Error de red:", error);
      setIsSuccess(false);
      setMessage("Error de conexión. Verifica tu red.");
    }
  };

  return (
    <section id="contacto" className="scroll-mt-24 space-y-8">
      
      <div className="max-w-2xl">
        <span className="font-mono text-xs font-bold text-[#FF6B35] uppercase tracking-widest block mb-2">
          Comunicación Directa
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
          Contacto y Expediciones
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          ¿Interesado en colaboraciones de monitoreo de fauna, desarrollo de plataformas B2B de conservación o expediciones fotográficas en la selva profunda? Escríbeme.
        </p>
      </div>

      <div className="bg-[#0B1311] border border-white/10 rounded-xl p-8 max-w-3xl shadow-2xl backdrop-blur-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Campo trampa anti-bots (Honeypot gratuito de Web3Forms) */}
          <input
            type="checkbox"
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}
          />

          {/* Nombre */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-300 font-semibold mb-2">
              Nombre Completo
            </label>
            <input
              type="text"
              placeholder="Tu nombre"
              autoComplete="off"
              className={`w-full px-4 py-3 border-2 rounded-lg bg-white/5 text-white text-sm outline-none transition-colors duration-300 ${
                errors.name
                  ? "border-red-600 focus:border-red-600"
                  : "border-white/10 focus:border-[#FF6B35]"
              }`}
              {...register("name", {
                required: "El nombre completo es requerido",
                maxLength: 80,
              })}
            />
            {errors.name && (
              <div className="mt-1 text-red-400">
                <small>{String(errors.name.message)}</small>
              </div>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-300 font-semibold mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              placeholder="tu@correo.com"
              autoComplete="off"
              className={`w-full px-4 py-3 border-2 rounded-lg bg-white/5 text-white text-sm outline-none transition-colors duration-300 ${
                errors.email
                  ? "border-red-600 focus:border-red-600"
                  : "border-white/10 focus:border-[#FF6B35]"
              }`}
              {...register("email", {
                required: "Ingresa tu correo electrónico",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Por favor, ingresa un correo válido",
                },
              })}
            />
            {errors.email && (
              <div className="mt-1 text-red-400">
                <small>{String(errors.email.message)}</small>
              </div>
            )}
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-300 font-semibold mb-2">
              Mensaje o Propuesta
            </label>
            <textarea
              placeholder="Detalla tu consulta técnica o requerimiento de campo..."
              className={`w-full px-4 py-3 border-2 rounded-lg bg-white/5 text-white text-sm outline-none h-36 resize-none transition-colors duration-300 ${
                errors.message
                  ? "border-red-600 focus:border-red-600"
                  : "border-white/10 focus:border-[#FF6B35]"
              }`}
              {...register("message", {
                required: "Ingresa tu mensaje",
              })}
            />
            {errors.message && (
              <div className="mt-1 text-red-400">
                <small>{String(errors.message.message)}</small>
              </div>
            )}
          </div>

          {/* Botón de Envío */}
          <div className="flex justify-end border-t border-white/10 pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg font-medium text-sm transition-colors duration-300 shadow-xs bg-[#FF6B35] text-white hover:bg-[#ff8254] cursor-pointer disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <svg
                  className="w-5 h-5 mx-auto text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Enviar Mensaje"
              )}
            </button>
          </div>
        </form>

        {/* Mensajes de respuesta de éxito o error */}
        {isSubmitSuccessful && (
          <div className={`mt-4 text-xs font-mono text-center p-3 rounded-lg ${
            isSuccess ? "bg-emerald-950/50 text-emerald-300 border border-emerald-800/50" : "bg-red-950/50 text-red-300 border border-red-800/50"
          }`}>
            {message}
          </div>
        )}
      </div>

    </section>
  );
}

export default Contact;