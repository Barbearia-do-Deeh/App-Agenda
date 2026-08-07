// ============================================================
// CONFIG DO NEGÓCIO — única fonte de verdade.
// Pra clonar o app pra outra barbearia, edite SÓ este arquivo
// (mais o logo e as imagens de produtos) e o app inteiro passa
// a refletir a nova marca automaticamente.
// ============================================================

const NEGOCIO = {
  nome: "Barbearia do Deeh",
  nomePrefixo: "BARBEARIA",      // parte branca do título
  nomeDestaque: "DO DEEH",       // parte dourada do título
  cidade: "Indaiatuba · SP",
  slogan: "Seu horário garantido, sem complicação.",

  logoCliente: "logo-v2.png",
  logoAdmin: "logo.png",

  endereco: "Rua Seraphin Gilberto Candelo, 2063 – Jd. Morada do Sol",
  enderecoResumo: "Jd. Morada do Sol",
  enderecoCompleto: "Rua Seraphin Gilberto Candelo, 2063 — Jd. Morada do Sol, Indaiatuba/SP",
  enderecoMapsQuery: "Rua+Seraphin+Gilberto+Candelo%2C+2063+-+Jd.+Morada+do+Sol%2C+Indaiatuba+-+SP",

  whatsapp: "5519993900880",           // formato internacional, só dígitos
  whatsappDisplay: "(19) 99390-0880",

  instagram: [
    { label: "Instagram", handle: "@barbeariadodeeh", url: "https://instagram.com/barbeariadodeeh" },
    { label: "Pessoal", handle: "@davidlucasdias", url: "https://instagram.com/davidlucasdias" }
  ],

  googleReviewUrl: "https://share.google/zfVJVDrPgBTdu0j6u",

  pixKey: "19993900880",
  pixKeyDisplay: "(19) 99390-0880",

  // Horário de funcionamento: 0=Dom ... 6=Sáb. Dia ausente = fechado.
  horarioFuncionamento: {
    2: { open: 9, close: 19 }, // Terça
    3: { open: 9, close: 19 }, // Quarta
    4: { open: 9, close: 19 }, // Quinta
    5: { open: 9, close: 19 }, // Sexta
    6: { open: 8, close: 17 }, // Sábado
  },

  // Serviços que aparecem na tela de agendamento (Serviços)
  servicos: [
    { name: "Corte", price: 50, duration: 60 },
    { name: "Barba", price: 50, duration: 60 },
    { name: "Sobrancelha", price: 15, duration: 0 },
    { name: "Pezinho", price: 15, duration: 15 },
    { name: "Corte Kids", price: 45, duration: 60 },
  ],

  // Atalhos exibidos na Home ("Serviços rápidos") — pode combinar serviços (ex: Corte + Barba)
  servicosRapidosHome: [
    { name: "Corte", price: 50 },
    { name: "Barba", price: 50 },
    { name: "Corte + Barba", price: 95 },
    { name: "Corte Kids", price: 45 },
  ],

  // Planos mensais (Home carousel + tela Planos)
  planos: [
    { id: "essencial", nome: "Essencial", preco: 160, descricao: "4 cortes ou 4 barbas por mês.", destaque: false },
    { id: "classico", nome: "Clássico", preco: 260, descricao: "4 barbas + 2 cortes + 2 pezinhos de brinde.", destaque: true, badge: "MAIS ESCOLHIDO" },
    { id: "empresario", nome: "Empresário", preco: 340, descricao: "4 cortes + 4 barbas + sobrancelha de brinde.", destaque: false },
  ],

  apiBase: "https://backend-v2-five-topaz.vercel.app/api",
};
