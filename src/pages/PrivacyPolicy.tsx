import { useEffect } from "react";
import { Link } from "wouter";
import logoImage from "@assets/logo_transparent.png";

const sections = [
  {
    title: "Coleta e Uso de Informações",
    content: [
      "O Aplicativo coleta informações quando você o baixa e usa. Essas informações podem incluir:",
      "• O endereço de Protocolo de Internet (IP) do seu dispositivo",
      "• As páginas do Aplicativo que você visita, a data e hora da sua visita e o tempo gasto nessas páginas",
      "• O tempo gasto no Aplicativo",
      "• O sistema operacional que você usa em seu dispositivo móvel",
      "O Aplicativo não coleta informações precisas sobre a localização do seu dispositivo móvel.",
      "O Aplicativo utiliza tecnologias de Inteligência Artificial (IA) para aprimorar a experiência do usuário e fornecer determinados recursos. Os componentes de IA podem processar dados do usuário para fornecer conteúdo personalizado, recomendações ou funcionalidades automatizadas. Todo o processamento de IA é realizado de acordo com esta política de privacidade e as leis aplicáveis. Se você tiver dúvidas sobre os recursos de IA ou o processamento de dados, entre em contato com o Fornecedor de Serviços.",
      "O Provedor de Serviços poderá usar as informações que você forneceu para entrar em contato com você ocasionalmente e fornecer informações importantes, avisos necessários e promoções de marketing.",
      "Para uma melhor experiência ao usar o Aplicativo, o Provedor de Serviços poderá solicitar que você nos forneça certas informações de identificação pessoal, incluindo, entre outras, arthur.carvalho88@gmail.com. As informações solicitadas pelo Provedor de Serviços serão retidas por ele e usadas conforme descrito nesta política de privacidade.",
    ],
  },
  {
    title: "Acesso de Terceiros",
    content: [
      "Apenas dados agregados e anonimizados são transmitidos periodicamente a serviços externos para auxiliar o Provedor de Serviços a aprimorar o Aplicativo e seus serviços. O Provedor de Serviços poderá compartilhar suas informações com terceiros das maneiras descritas nesta declaração de privacidade.",
      "O Provedor de Serviços poderá divulgar as Informações Fornecidas pelo Usuário e as Informações Coletadas Automaticamente:",
      "• Conforme exigido por lei, como para cumprir uma intimação ou processo legal semelhante;",
      "• Quando acreditar de boa-fé que a divulgação é necessária para proteger seus direitos, proteger sua segurança ou a segurança de terceiros, investigar fraudes ou responder a uma solicitação governamental;",
      "• Com seus provedores de serviços confiáveis que trabalham em seu nome, não têm uso independente das informações que divulgamos a eles e concordaram em aderir às regras estabelecidas nesta declaração de privacidade.",
    ],
  },
  {
    title: "Direito de Cancelamento",
    content: [
      "Você pode interromper facilmente toda a coleta de informações pelo Aplicativo desinstalando-o. Você pode usar os processos de desinstalação padrão disponíveis em seu dispositivo móvel ou por meio da loja de aplicativos ou rede móvel.",
    ],
  },
  {
    title: "Política de Retenção de Dados",
    content: [
      "O Provedor de Serviços reterá os dados fornecidos pelo usuário enquanto você usar o Aplicativo e por um período razoável após o término do uso. Se desejar que os dados fornecidos pelo usuário por meio do Aplicativo sejam excluídos, entre em contato com eles pelo e-mail suporte@cacperformancepro.com.br e eles responderão em um prazo razoável.",
    ],
  },
  {
    title: "Crianças",
    content: [
      "O Provedor de Serviços não usa o Aplicativo para solicitar dados ou fazer marketing para crianças menores de 13 anos.",
      "O Provedor de Serviços não coleta intencionalmente informações de identificação pessoal de crianças. O Provedor de Serviços recomenda que todas as crianças nunca enviem informações de identificação pessoal por meio do Aplicativo e/ou Serviços. O Provedor de Serviços recomenda que os pais e responsáveis legais monitorem o uso da Internet por seus filhos e ajudem a garantir o cumprimento desta Política, instruindo-os a nunca fornecer informações de identificação pessoal por meio do Aplicativo e/ou Serviços sem a devida autorização.",
      "Caso tenha motivos para acreditar que uma criança forneceu informações de identificação pessoal ao Provedor de Serviços por meio do Aplicativo e/ou Serviços, entre em contato com o Provedor de Serviços (suporte@cacperformancepro.com.br) para que as medidas necessárias sejam tomadas. Você também deve ter pelo menos 16 anos de idade para consentir com o processamento de suas informações de identificação pessoal em seu país (em alguns países, podemos permitir que seus pais ou responsáveis legais o façam em seu nome).",
    ],
  },
  {
    title: "Segurança",
    content: [
      "O Provedor de Serviços se preocupa em proteger a confidencialidade de suas informações. O Provedor de Serviços implementa medidas de segurança físicas, eletrônicas e processuais para proteger as informações que processa e mantém.",
    ],
  },
  {
    title: "Alterações",
    content: [
      "Esta Política de Privacidade pode ser atualizada periodicamente por qualquer motivo. O Provedor de Serviços notificará você sobre quaisquer alterações na Política de Privacidade atualizando esta página com a nova Política de Privacidade. Recomenda-se que você consulte esta Política de Privacidade regularmente para verificar quaisquer alterações, pois o uso contínuo será considerado como aprovação de todas as alterações.",
      "Esta política de privacidade entra em vigor em 23/04/2026.",
    ],
  },
  {
    title: "Seu Consentimento",
    content: [
      "Ao usar o Aplicativo, você concorda com o processamento de suas informações conforme estabelecido nesta Política de Privacidade agora e conforme alterada por nós.",
    ],
  },
  {
    title: "Contato",
    content: [
      "Se você tiver alguma dúvida sobre privacidade ao usar o Aplicativo ou tiver dúvidas sobre as práticas, entre em contato com o Provedor de Serviços por e-mail: suporte@cacperformancepro.com.br.",
    ],
  },
];

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0C1A33", color: "#FFFFFF" }}>
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#F97316] to-transparent opacity-80" />
        <div className="container mx-auto px-6 h-[124px] flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src={logoImage}
              alt="CAC Performance PRO Logo"
              className="h-[116px] w-[116px] object-contain cursor-pointer"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Voltar ao inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-2" style={{ color: "#F97316" }}>
          Politica de Privacidade
        </h1>
        <p className="text-white/50 text-sm mb-10">Vigente a partir de 23/04/2026</p>

        <p className="text-white/80 leading-relaxed mb-10">
          Esta politica de privacidade aplica-se ao aplicativo{" "}
          <span className="text-white font-semibold">CAC Performance PRO</span>{" "}
          (doravante denominado "Aplicativo") para dispositivos moveis, criado por{" "}
          <span className="text-white font-semibold">Arthur de Oliveira Carvalho</span>{" "}
          (doravante denominado "Fornecedor de Servicos") como um servico comercial.
          Este servico destina-se ao uso "TAL COMO ESTA".
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2
                className="text-xl font-semibold mb-4 pb-2 border-b border-white/10"
                style={{ color: "#F97316" }}
              >
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph, i) => (
                  <p key={i} className="text-white/75 leading-relaxed text-sm">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-sm text-white/40">
            © 2026 CAC Performance PRO. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
