export const company = {
  name: 'KADOKA',
  fullName: 'KADOKA Krzysztof Kamiński',
  owner: 'Krzysztof Sławomir Kamiński',
  tagline: 'TWÓJ ZIELONY OGRÓD',
  address: 'ul. Spacerowa 18, 43-180 Orzesze, woj. śląskie',
  nip: '635-187-05-57',
  regon: '528303157',
  pkd: '8130Z — Działalność usługowa związana z zagospodarowaniem terenów zieleni',
  started: '12.04.2024',
  phone: '730 563 298',
  phoneHref: 'tel:+48730563298',
  email: 'kadoka.oferta@gmail.com',
  emailHref: 'mailto:kadoka.oferta@gmail.com',
  platforms: [
    { name: 'Oferteo.pl', href: 'https://www.oferteo.pl' },
    { name: 'Fixly.pl', href: 'https://fixly.pl' },
    { name: 'ALEO.com', href: 'https://aleo.com' },
  ],
}

export const services = [
  {
    title: 'Zakładanie trawników',
    desc: 'Równe, gęste trawniki — także przy ścieżkach z kostki granitowej i brukowej.',
  },
  {
    title: 'Rabaty i nasadzenia',
    desc: 'Obramowania z grysem, ozdobne trawy i krzewy komponowane przy tarasach.',
  },
  {
    title: 'Żywopłoty i cięcie',
    desc: 'Formowanie i przycinanie żywopłotów, w tym tui — czysto i w terminie.',
  },
  {
    title: 'Pielęgnacja całoroczna',
    desc: 'Opieka nad ogrodem przez cały rok oraz przygotowanie zieleni do zimy.',
  },
  {
    title: 'Kosiarki automatyczne',
    desc: 'Dobór, instalacja i konfiguracja systemów automatycznego koszenia.',
  },
  {
    title: 'Doradztwo ogrodnicze',
    desc: 'Wsparcie na każdym etapie — od pomysłu po utrzymanie efektu.',
  },
]

export const portfolio = [
  {
    title: 'Obramowania rabat z grysem',
    image:
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Trawy i krzewy przy tarasie',
    image:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Przycinanie żywopłotu z tui',
    image:
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Trawniki przy kostce granitowej',
    image:
      'https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Instalacja kosiarki automatycznej',
    image:
      'https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&w=1200&q=80',
  },
]

export const reviews = [
  {
    initial: 'K',
    text: 'Już 3 razy korzystałem z usług firmy Kadoka, za każdym razem wszystko było wykonane zgodnie z ustaleniami i co najważniejsze — w terminie, także mogę śmiało polecić tę firmę',
  },
  {
    initial: 'A',
    text: 'Wszystko przebiegło szybko i sprawnie. Firma godna polecenia',
  },
  {
    initial: 'M',
    text: 'Profesjonalne i kompleksowe podejście do klienta. Doradztwo na każdym etapie. Polecam',
  },
  {
    initial: 'K',
    text: 'Przygotowanie ogrodu do zimy oraz opieka całoroczna na najwyższym poziomie',
  },
  {
    initial: 'P',
    text: 'Usługa wykonana w umówionym terminie, wszystko ok',
  },
]

export const registry = [
  { label: 'Pełna nazwa', value: company.fullName },
  { label: 'Właściciel', value: company.owner },
  { label: 'Adres', value: company.address },
  { label: 'NIP', value: company.nip },
  { label: 'REGON', value: company.regon },
  { label: 'PKD', value: company.pkd },
  { label: 'Start działalności', value: company.started },
]
