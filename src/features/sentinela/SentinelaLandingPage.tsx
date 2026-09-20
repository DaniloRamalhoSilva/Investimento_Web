import {
  ArrowDown,
  ArrowRight,
  Bell,
  BookOpenText,
  Check,
  ChevronDown,
  CircleAlert,
  Clock3,
  FileSearch,
  FolderSearch2,
  Gauge,
  Link2,
  Menu,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";
import {
  type FormEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import phoneAnalysis from "@/assets/sentinela/phone-analysis.png";
import phoneNotification from "@/assets/sentinela/phone-notification.png";
import phoneOverview from "@/assets/sentinela/phone-overview.png";
import phonePortfolio from "@/assets/sentinela/phone-portfolio.png";
import lighthouse from "@/assets/sentinela/lighthouse.png";
import gridAtmosphere from "@/assets/sentinela/grid.png";
import signalAtmosphere from "@/assets/sentinela/signal.png";
import storyAtmosphere from "@/assets/sentinela/story.png";
import { trackEvent } from "@/features/sentinela/analytics";
import { joinWaitlist } from "@/features/sentinela/waitlist.service";

import "./SentinelaLandingPage.css";

type IconType = (props: { "aria-hidden"?: boolean }) => ReactNode;

const faqItems = [
  {
    question: "O Sentinela recomenda comprar ou vender investimentos?",
    answer:
      "Não. O Sentinela organiza informações e apresenta contexto para apoiar sua análise. A decisão de investimento continua sendo sua.",
  },
  {
    question: "Quais investimentos serão suportados?",
    answer:
      "A primeira versão será focada em Fundos Imobiliários. A visão do produto permite incorporar outros tipos de investimentos futuramente.",
  },
  {
    question: "O monitoramento acontece em tempo real?",
    answer:
      "A frequência de monitoramento poderá variar durante as primeiras versões. Nosso foco inicial é entregar informações relevantes de forma confiável, sem prometer monitoramento em tempo real antes que essa capacidade esteja disponível.",
  },
  {
    question: "De onde vêm as informações?",
    answer:
      "O Sentinela prioriza fontes confiáveis e oficiais, incluindo B3, CVM, Fundos.NET e fontes oficiais relacionadas aos ativos acompanhados.",
  },
  {
    question: "A inteligência artificial pode errar?",
    answer:
      "Sim. Tecnologias de inteligência artificial podem cometer erros. Por isso, o Sentinela mantém a análise conectada à fonte original sempre que possível, permitindo que você confira a informação.",
  },
  {
    question: "O Sentinela será gratuito?",
    answer:
      "Haverá uma opção gratuita limitada e planos adicionais para quem quiser acompanhar uma carteira maior ou utilizar recursos adicionais.",
  },
  {
    question: "Quando será lançado?",
    answer:
      "O Sentinela está sendo validado com um grupo inicial de usuários. Quem estiver na lista de espera será avisado conforme novos acessos forem disponibilizados.",
  },
];

const features = [
  {
    icon: Gauge,
    title: "Importância",
    text: "Indica o nível de relevância da informação.",
  },
  {
    icon: BookOpenText,
    title: "Resumo inteligente",
    text: "Um resumo claro, direto e objetivo.",
  },
  {
    icon: TrendingUp,
    title: "Possível impacto",
    text: "Ajuda a entender os possíveis efeitos para o ativo.",
  },
  {
    icon: CircleAlert,
    title: "Riscos",
    text: "Destaca os principais pontos de atenção identificados.",
  },
  {
    icon: Clock3,
    title: "Horizonte",
    text: "Contextualiza efeitos de curto, médio ou longo prazo.",
  },
  {
    icon: Link2,
    title: "Fonte original",
    text: "Leva você ao documento de origem sempre que possível.",
  },
];

function Brand() {
  return (
    <a
      className="sentinela-brand"
      href="#inicio"
      aria-label="Sentinela — início"
    >
      <span className="sentinela-brand__mark" aria-hidden="true">
        <Radar />
      </span>
      <span>Sentinela</span>
    </a>
  );
}

function PrimaryLink({
  children,
  event,
  href = "#lista-de-espera",
}: {
  children: ReactNode;
  event?: "hero_waitlist_click" | "final_cta_click";
  href?: string;
}) {
  return (
    <a
      className="sentinela-button sentinela-button--primary"
      href={href}
      onClick={() => event && trackEvent(event)}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" />
    </a>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: string;
}) {
  return (
    <header className="sentinela-section-title">
      {eyebrow && <p className="sentinela-eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: IconType;
  title: string;
  text: string;
}) {
  return (
    <article className="sentinela-info-card">
      <span className="sentinela-icon" aria-hidden="true">
        <Icon aria-hidden={true} />
      </span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    firstLinkRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sentinela-header">
      <div className="sentinela-container sentinela-header__inner">
        <Brand />
        <nav className="sentinela-header__nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#recursos">Recursos</a>
          <a href="#sobre">Sobre</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="sentinela-header__cta" href="#lista-de-espera">
          Entrar na lista
        </a>
        <button
          className="sentinela-menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="sentinela-mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {menuOpen && (
        <div className="sentinela-mobile-menu" id="sentinela-mobile-menu">
          <button
            className="sentinela-mobile-menu__backdrop"
            type="button"
            aria-label="Fechar menu"
            onClick={closeMenu}
          />
          <nav aria-label="Navegação mobile">
            <a ref={firstLinkRef} href="#inicio" onClick={closeMenu}>
              Início
            </a>
            <a href="#como-funciona" onClick={closeMenu}>
              Como funciona
            </a>
            <a href="#recursos" onClick={closeMenu}>
              Recursos
            </a>
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
            <a href="#faq" onClick={closeMenu}>
              FAQ
            </a>
            <a
              className="sentinela-button sentinela-button--primary"
              href="#lista-de-espera"
              onClick={closeMenu}
            >
              Entrar na lista <ArrowRight aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function WaitlistSurvey({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [funds, setFunds] = useState("");
  const [frequency, setFrequency] = useState("");
  const [priorities, setPriorities] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const choices = [
    "Alertas sobre informações importantes",
    "Resumo simples dos comunicados",
    "Classificação do possível impacto",
    "Principais riscos",
    "Histórico de acontecimentos por ativo",
    "Resumo diário da carteira",
    "Outro",
  ];

  function togglePriority(choice: string) {
    setPriorities((current) =>
      current.includes(choice)
        ? current.filter((item) => item !== choice)
        : current.length < 3
          ? [...current, choice]
          : current,
    );
  }

  function completeSurvey() {
    setDone(true);
    trackEvent("survey_completed", {
      funds,
      frequency,
      priorities: priorities.length,
    });
  }

  if (done) {
    return (
      <div className="sentinela-survey__done" role="status">
        <Check aria-hidden="true" />
        <div>
          <strong>Obrigado pela ajuda.</strong>
          <p>Suas respostas vão orientar as próximas decisões do produto.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sentinela-survey" aria-labelledby="survey-title">
      <div className="sentinela-survey__topline">
        <span>Pesquisa opcional</span>
        <span>{step + 1} de 3</span>
      </div>
      <h3 id="survey-title">
        {step === 0 && "Quantos FIIs você possui atualmente?"}
        {step === 1 && "Com que frequência você acompanha seus investimentos?"}
        {step === 2 && "O que mais faria o Sentinela valer a pena para você?"}
      </h3>
      {step === 0 && (
        <div className="sentinela-choice-grid">
          {["Ainda não invisto em FIIs", "1–3", "4–10", "11–20", "21+"].map(
            (item) => (
              <button
                className={funds === item ? "is-selected" : ""}
                type="button"
                key={item}
                onClick={() => setFunds(item)}
              >
                {item}
              </button>
            ),
          )}
        </div>
      )}
      {step === 1 && (
        <div className="sentinela-choice-grid">
          {[
            "Todos os dias",
            "Algumas vezes por semana",
            "Uma vez por semana",
            "Raramente",
            "Só quando acontece alguma coisa",
          ].map((item) => (
            <button
              className={frequency === item ? "is-selected" : ""}
              type="button"
              key={item}
              onClick={() => setFrequency(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      {step === 2 && (
        <div className="sentinela-choice-grid sentinela-choice-grid--wide">
          {choices.map((item) => (
            <button
              className={priorities.includes(item) ? "is-selected" : ""}
              type="button"
              key={item}
              onClick={() => togglePriority(item)}
              aria-pressed={priorities.includes(item)}
            >
              {item}
            </button>
          ))}
          <small>Escolha até 3 opções.</small>
        </div>
      )}
      <div className="sentinela-survey__actions">
        <button
          type="button"
          className="sentinela-text-button"
          onClick={onClose}
        >
          Agora não
        </button>
        {step < 2 ? (
          <button
            className="sentinela-button sentinela-button--primary"
            type="button"
            disabled={(step === 0 && !funds) || (step === 1 && !frequency)}
            onClick={() => setStep((value) => value + 1)}
          >
            Continuar <ArrowRight aria-hidden="true" />
          </button>
        ) : (
          <button
            className="sentinela-button sentinela-button--primary"
            type="button"
            disabled={!priorities.length}
            onClick={completeSurvey}
          >
            Enviar respostas <ArrowRight aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}

function WaitlistForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    whatsapp?: string;
  }>({});
  const [showSurvey, setShowSurvey] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "")
      .trim()
      .replace(/\s+/g, " ");
    const email = String(data.get("email") ?? "")
      .trim()
      .toLowerCase();
    const whatsapp = String(data.get("whatsapp") ?? "").trim();
    const whatsappDigits = whatsapp.replace(/\D/g, "");
    const nextErrors: {
      name?: string;
      email?: string;
      whatsapp?: string;
    } = {};

    if (name.length < 2) nextErrors.name = "Digite seu nome.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "Digite um e-mail válido.";
    if (whatsappDigits.length < 10 || whatsappDigits.length > 15)
      nextErrors.whatsapp = "Digite um WhatsApp válido com DDD.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("submitting");
    trackEvent("waitlist_submit_started");
    try {
      await joinWaitlist({ nome: name, email, whatsapp });
      setStatus("success");
      trackEvent("waitlist_submit_success");
    } catch {
      setStatus("error");
      trackEvent("waitlist_submit_error");
    }
  }

  if (status === "success") {
    return (
      <div className="sentinela-waitlist-success" role="status">
        <span className="sentinela-waitlist-success__icon" aria-hidden="true">
          <Check />
        </span>
        <div>
          <h3>Você está na lista 🎉</h3>
          <p>Avisaremos quando novos acessos forem liberados.</p>
        </div>
        {!showSurvey ? (
          <div className="sentinela-waitlist-success__survey">
            <p>
              <strong>Quer nos ajudar a construir o Sentinela?</strong>
              <br />
              São apenas 3 perguntas.
            </p>
            <button
              className="sentinela-button sentinela-button--secondary"
              type="button"
              onClick={() => {
                setShowSurvey(true);
                trackEvent("survey_started");
              }}
            >
              Responder agora
            </button>
          </div>
        ) : (
          <WaitlistSurvey onClose={() => setShowSurvey(false)} />
        )}
      </div>
    );
  }

  return (
    <form className="sentinela-waitlist-form" noValidate onSubmit={submit}>
      <div className="sentinela-field">
        <label htmlFor="sentinela-name">Nome</label>
        <input
          id="sentinela-name"
          name="name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "sentinela-name-error" : undefined}
          placeholder="Seu nome"
        />
        {errors.name && (
          <span id="sentinela-name-error" className="sentinela-field__error">
            {errors.name}
          </span>
        )}
      </div>
      <div className="sentinela-field">
        <label htmlFor="sentinela-email">E-mail</label>
        <input
          id="sentinela-email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "sentinela-email-error" : undefined}
          placeholder="voce@exemplo.com"
        />
        {errors.email && (
          <span id="sentinela-email-error" className="sentinela-field__error">
            {errors.email}
          </span>
        )}
      </div>
      <div className="sentinela-field sentinela-field--phone">
        <label htmlFor="sentinela-whatsapp">WhatsApp</label>
        <input
          id="sentinela-whatsapp"
          name="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          aria-invalid={Boolean(errors.whatsapp)}
          aria-describedby={
            errors.whatsapp ? "sentinela-whatsapp-error" : undefined
          }
          placeholder="(11) 99999-9999"
        />
        {errors.whatsapp && (
          <span
            id="sentinela-whatsapp-error"
            className="sentinela-field__error"
          >
            {errors.whatsapp}
          </span>
        )}
      </div>
      <button
        className="sentinela-button sentinela-button--primary sentinela-waitlist-form__submit"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting"
          ? "Entrando na lista..."
          : "Quero entrar na lista"}
        {status !== "submitting" && <ArrowRight aria-hidden="true" />}
      </button>
      {status === "error" && (
        <p className="sentinela-form-error" role="alert">
          Não foi possível concluir seu cadastro agora. Tente novamente em
          alguns instantes.
        </p>
      )}
    </form>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="sentinela-faq__list">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `sentinela-faq-answer-${index}`;
        return (
          <article className="sentinela-faq__item" key={item.question}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => {
                  setOpenIndex(isOpen ? null : index);
                  if (!isOpen)
                    trackEvent("faq_opened", { question: item.question });
                }}
              >
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" />
              </button>
            </h3>
            <div
              className="sentinela-faq__answer"
              id={answerId}
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function SentinelaLandingPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Sentinela — Monitoramento inteligente de investimentos";
    const summary =
      "Cadastre os investimentos que você acompanha e deixe o Sentinela ajudar a identificar informações que realmente merecem sua atenção. Primeira versão focada em Fundos Imobiliários.";
    const metadata = [
      {
        selector: 'meta[name="description"]',
        attribute: "name",
        key: "description",
        content: summary,
      },
      {
        selector: 'meta[name="theme-color"]',
        attribute: "name",
        key: "theme-color",
        content: "#061018",
      },
      {
        selector: 'meta[property="og:title"]',
        attribute: "property",
        key: "og:title",
        content: document.title,
      },
      {
        selector: 'meta[property="og:description"]',
        attribute: "property",
        key: "og:description",
        content: summary,
      },
      {
        selector: 'meta[name="twitter:card"]',
        attribute: "name",
        key: "twitter:card",
        content: "summary",
      },
      {
        selector: 'meta[name="twitter:title"]',
        attribute: "name",
        key: "twitter:title",
        content: document.title,
      },
      {
        selector: 'meta[name="twitter:description"]',
        attribute: "name",
        key: "twitter:description",
        content: summary,
      },
    ].map((item) => {
      const existing = document.querySelector<HTMLMetaElement>(item.selector);
      const element = existing ?? document.createElement("meta");
      const previousContent = element.content;
      if (!existing) {
        element.setAttribute(item.attribute, item.key);
        document.head.appendChild(element);
      }
      element.content = item.content;
      return { element, previousContent, created: !existing };
    });
    trackEvent("landing_view");
    return () => {
      document.title = previousTitle;
      metadata.forEach(({ element, previousContent, created }) => {
        if (created) element.remove();
        else element.content = previousContent;
      });
    };
  }, []);

  const problems = [
    {
      icon: FileSearch,
      title: "Informação demais",
      text: "Acompanhar diferentes fontes todos os dias consome tempo.",
    },
    {
      icon: FolderSearch2,
      title: "Documentos complexos",
      text: "Informações importantes podem estar escondidas em PDFs e comunicados extensos.",
    },
    {
      icon: Clock3,
      title: "Descoberta tardia",
      text: "Você pode descobrir algo importante apenas depois que o mercado já reagiu.",
    },
  ];

  const steps = [
    {
      icon: BookOpenText,
      title: "Cadastre seus investimentos",
      text: "Informe os FIIs que fazem parte da sua carteira.",
    },
    {
      icon: Search,
      title: "Nós acompanhamos as informações",
      text: "Procuramos novas informações em fontes confiáveis.",
    },
    {
      icon: Sparkles,
      title: "A inteligência filtra o que importa",
      text: "O conteúdo é analisado, resumido e contextualizado.",
    },
    {
      icon: Bell,
      title: "Você recebe o essencial",
      text: "O que merece atenção aparece de forma simples e direta.",
    },
  ];

  return (
    <div className="sentinela-page">
      <Header />
      <main>
        <section
          className="sentinela-hero"
          id="inicio"
          style={
            { "--sentinela-bg": `url(${lighthouse})` } as React.CSSProperties
          }
        >
          <div className="sentinela-container sentinela-hero__grid">
            <div className="sentinela-hero__content">
              <p className="sentinela-eyebrow">
                Monitoramento inteligente de investimentos
              </p>
              <h1>
                Você investe.
                <br />
                <span>O Sentinela vigia.</span>
              </h1>
              <p className="sentinela-hero__lead">
                Cadastre os ativos da sua carteira e deixe o Sentinela
                acompanhar informações que podem importar para seus
                investimentos.
              </p>
              <p className="sentinela-hero__promise">
                Menos notícias. Mais relevância.
              </p>
              <div className="sentinela-hero__actions">
                <PrimaryLink event="hero_waitlist_click">
                  Quero entrar na lista de espera
                </PrimaryLink>
                <a
                  className="sentinela-button sentinela-button--ghost"
                  href="#como-funciona"
                  onClick={() => trackEvent("how_it_works_click")}
                >
                  <ArrowDown aria-hidden="true" /> Ver como funciona
                </a>
              </div>
              <div className="sentinela-hero__microcopy">
                <ShieldCheck aria-hidden="true" />
                <p>
                  Primeira versão focada em Fundos Imobiliários.
                  <br />
                  Outros investimentos poderão ser adicionados futuramente.
                </p>
              </div>
            </div>
            <div
              className="sentinela-hero__visual"
              aria-label="Exemplo conceitual do aplicativo Sentinela"
            >
              <div className="sentinela-hero__halo" aria-hidden="true" />
              <img
                src={phoneOverview}
                alt="Tela conceitual do Sentinela mostrando ativos monitorados"
                width="183"
                height="293"
              />
            </div>
          </div>
        </section>

        <section className="sentinela-section sentinela-problem">
          <div className="sentinela-container">
            <SectionTitle
              title={
                <>
                  O problema não é falta de informação.
                  <br />
                  <span>É descobrir qual realmente importa.</span>
                </>
              }
              text="Todos os dias surgem comunicados, fatos relevantes e relatórios. A informação pode estar disponível — e ainda assim passar despercebida."
            />
            <div className="sentinela-problem__grid">
              {problems.map((item) => (
                <InfoCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section
          className="sentinela-signal"
          style={
            {
              "--sentinela-bg": `url(${signalAtmosphere})`,
            } as React.CSSProperties
          }
        >
          <div className="sentinela-container sentinela-signal__content">
            <p className="sentinela-signal__count">
              36 informações encontradas.
            </p>
            <h2>2 merecem sua atenção.</h2>
            <p>
              O Sentinela não foi criado para colocar mais notícias no seu dia.
              Ele ajuda a identificar, no meio de tudo que foi publicado, aquilo
              que pode realmente importar.
            </p>
            <blockquote>
              Você continua vivendo sua vida.
              <br />
              <span>O Sentinela continua observando.</span>
            </blockquote>
          </div>
        </section>

        <section className="sentinela-section sentinela-how" id="como-funciona">
          <div className="sentinela-container">
            <SectionTitle
              eyebrow="Como funciona"
              title={
                <>
                  Você cadastra. <span>O Sentinela acompanha.</span>
                </>
              }
              text="Em poucos passos, informação dispersa se transforma em contexto útil."
            />
            <div className="sentinela-how__grid">
              {steps.map((step, index) => (
                <article className="sentinela-step" key={step.title}>
                  <span className="sentinela-step__number">0{index + 1}</span>
                  <span className="sentinela-icon" aria-hidden="true">
                    <step.icon />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="sentinela-section sentinela-product"
          id="recursos"
          style={
            {
              "--sentinela-bg": `url(${gridAtmosphere})`,
            } as React.CSSProperties
          }
        >
          <div className="sentinela-container">
            <SectionTitle
              eyebrow="O app na prática"
              title={
                <>
                  Informação clara, <span>no momento certo.</span>
                </>
              }
              text="Uma visão simples da carteira, alertas do que merece atenção e contexto para você fazer sua própria análise."
            />
            <div className="sentinela-product__phones">
              <figure>
                <div>
                  <img
                    src={phonePortfolio}
                    alt="Tela conceitual da carteira monitorada"
                    width="155"
                    height="309"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <strong>1. Visão da carteira</strong>
                  <span>Acompanhe seus ativos e o status das informações.</span>
                </figcaption>
              </figure>
              <figure>
                <div>
                  <img
                    src={phoneNotification}
                    alt="Notificação conceitual sobre nova informação de CACR11"
                    width="155"
                    height="309"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <strong>2. Alerta relevante</strong>
                  <span>Saiba quando algo merece sua atenção.</span>
                </figcaption>
              </figure>
              <figure>
                <div>
                  <img
                    src={phoneAnalysis}
                    alt="Tela conceitual de análise com resumo e fonte original"
                    width="155"
                    height="301"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <strong>3. Análise completa</strong>
                  <span>Entenda o contexto e consulte a fonte original.</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="sentinela-section sentinela-features">
          <div className="sentinela-container">
            <SectionTitle
              eyebrow="Clareza para decidir"
              title="O que o Sentinela mostra"
              text="Cada informação vem com contexto para ajudar você a entender o que aconteceu."
            />
            <div className="sentinela-features__grid">
              {features.map((item) => (
                <InfoCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="sentinela-section sentinela-sources">
          <div className="sentinela-container sentinela-sources__grid">
            <SectionTitle
              title={
                <>
                  Inteligência artificial ajuda a interpretar.
                  <br />
                  <span>A fonte continua sendo a referência.</span>
                </>
              }
              text="O Sentinela usa inteligência artificial para ajudar a ler, organizar e destacar informações relevantes. Sempre que possível, a origem permanece disponível para consulta."
            />
            <div
              className="sentinela-sources__list"
              aria-label="Exemplos de fontes priorizadas"
            >
              {[
                ["B3", "Brasil, Bolsa, Balcão"],
                ["CVM", "Comissão de Valores Mobiliários"],
                ["Fundos.NET", "Documentos de fundos"],
                ["Fontes oficiais", "Gestoras e administradoras"],
              ].map(([name, label]) => (
                <div key={name}>
                  <strong>{name}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="sentinela-sources__note">
            Nada de resumo sem contexto. Nada de esconder a origem da
            informação.
          </p>
        </section>

        <section
          className="sentinela-story"
          id="sobre"
          style={
            {
              "--sentinela-bg": `url(${storyAtmosphere})`,
            } as React.CSSProperties
          }
        >
          <div className="sentinela-container sentinela-story__content">
            <p className="sentinela-eyebrow">Por que existimos</p>
            <h2>
              O Sentinela nasceu depois que uma informação chegou tarde demais.
            </h2>
            <p>
              Eu possuía um fundo imobiliário e uma informação importante sobre
              ele havia sido publicada. Eu simplesmente não vi.
            </p>
            <p>
              Quando descobri o que estava acontecendo, outros investidores já
              haviam tomado suas decisões e o mercado já tinha reagido.
            </p>
            <blockquote>
              E se existisse algo acompanhando meus investimentos mesmo quando
              eu não estivesse olhando?
            </blockquote>
            <strong>Foi dessa pergunta que nasceu o Sentinela.</strong>
          </div>
        </section>

        <section className="sentinela-section sentinela-comparison">
          <div className="sentinela-container">
            <SectionTitle
              title="Um produto diferente de mais um portal financeiro."
              text="Não se trata de consumir mais. Trata-se de encontrar sinal no meio do ruído."
            />
            <div className="sentinela-comparison__grid">
              <div>
                <h3>Mais informação</h3>
                <ul>
                  {[
                    "Dezenas de notícias",
                    "Informações genéricas",
                    "Excesso de conteúdo",
                    "Você procura o que importa",
                  ].map((item) => (
                    <li key={item}>
                      <X aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sentinela-comparison__sentinel">
                <h3>Sentinela</h3>
                <ul>
                  {[
                    "Sua carteira",
                    "Informação filtrada",
                    "Contexto simples",
                    "O que merece atenção em destaque",
                  ].map((item) => (
                    <li key={item}>
                      <Check aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                Menos barulho.
                <br />
                <span>Mais sinal.</span>
              </p>
            </div>
            <aside className="sentinela-free">
              <div>
                <span>Comece grátis.</span>
                <p>
                  Plano gratuito previsto para acompanhar uma carteira inicial
                  de até 3 FIIs.
                </p>
              </div>
              <ShieldCheck aria-hidden="true" />
            </aside>
          </div>
        </section>

        <section
          className="sentinela-section sentinela-waitlist"
          id="lista-de-espera"
        >
          <div className="sentinela-container sentinela-waitlist__grid">
            <div>
              <p className="sentinela-eyebrow">Acesso antecipado</p>
              <h2>
                Seja um dos primeiros a testar o <span>Sentinela.</span>
              </h2>
              <p>
                Estamos preparando os primeiros acessos. Entre na lista de
                espera e seja avisado quando novas vagas forem liberadas.
              </p>
              <div className="sentinela-waitlist__trust">
                <ShieldCheck aria-hidden="true" />
                <span>
                  Sem spam. Apenas novidades do desenvolvimento e dos primeiros
                  acessos.
                </span>
              </div>
            </div>
            <div className="sentinela-waitlist__panel">
              <WaitlistForm />
            </div>
          </div>
        </section>

        <section className="sentinela-section sentinela-faq" id="faq">
          <div className="sentinela-container sentinela-faq__grid">
            <SectionTitle
              eyebrow="Perguntas frequentes"
              title="Antes de entrar na lista"
              text="Respostas diretas sobre o que o Sentinela é — e o que ele não pretende ser."
            />
            <FAQ />
          </div>
        </section>

        <section className="sentinela-final-cta">
          <div className="sentinela-container">
            <p className="sentinela-eyebrow">
              Você não precisa acompanhar tudo.
            </p>
            <h2>
              Você investe.
              <br />
              <span>O Sentinela vigia.</span>
            </h2>
            <p>
              Entre na lista de espera e acompanhe a construção de uma nova
              forma de monitorar seus investimentos.
            </p>
            <PrimaryLink event="final_cta_click">
              Quero acesso antecipado
            </PrimaryLink>
          </div>
        </section>
      </main>

      <footer className="sentinela-footer">
        <div className="sentinela-container">
          <div className="sentinela-footer__top">
            <div>
              <Brand />
              <p>Monitoramento inteligente de investimentos.</p>
            </div>
            <nav aria-label="Links do rodapé">
              <a href="#como-funciona">Como funciona</a>
              <a href="#faq">FAQ</a>
              <span>Contato</span>
              <span>Privacidade</span>
              <span>Termos de uso</span>
            </nav>
          </div>
          <div className="sentinela-footer__bottom">
            <p>
              O Sentinela é uma ferramenta informativa e não constitui
              recomendação de investimento. Informações geradas ou resumidas por
              inteligência artificial podem conter imprecisões. Consulte as
              fontes originais e faça sua própria análise.
            </p>
            <span>© {new Date().getFullYear()} Sentinela</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
