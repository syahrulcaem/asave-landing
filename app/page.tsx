import Image from "next/image"
import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BarChart3,
  ChevronRight,
  CreditCard,
  DollarSign,
  Download,
  PieChart,
  Smartphone,
  Wallet,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-mono">
      <header className="sticky top-0 z-50 border-b-4 border-black bg-white px-4 py-3 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* Logo Asave di navbar */}
            <div className="relative h-10 w-10 overflow-hidden">
              <Image 
                src="/asave-logo.png"
                alt="Logo Asave"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-black tracking-tight">ASAVE</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-bold hover:underline">
              FITUR
            </Link>
            <Link href="#charts" className="text-sm font-bold hover:underline">
              GRAFIK
            </Link>
            <Link href="#pricing" className="text-sm font-bold hover:underline">
              HARGA
            </Link>
            <Link href="#download" className="text-sm font-bold hover:underline">
              UNDUH
            </Link>
          </nav>
          <Button 
            className="hidden md:flex bg-[#5b77f5] hover:bg-[#4a66e4] text-white font-bold rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            asChild
          >
            <Link 
              href="https://drive.google.com/file/d/1-WoFdWLWP47HpWXm61aRv8m0PDOpnMAL/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              UNDUH SEKARANG
            </Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden rounded-none border-2 border-black">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#f9f9f9] px-4 py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight md:text-6xl">
                  LEBIH HEMAT <br />
                  <span className="text-[#5b77f5]">KURANGI PENGELUARAN</span>
                </h1>
                <p className="text-xl text-[#333333]">
                  Aplikasi penganggaran bergaya brutalis yang membantu Anda melacak pengeluaran, menghemat uang, dan mencapai tujuan keuangan Anda.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button 
                  className="bg-[#5b77f5] hover:bg-[#4a66e4] text-white font-bold rounded-none border-4 border-black px-8 py-6 text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1"
                  asChild
                >
                  <Link 
                    href="https://drive.google.com/file/d/1-WoFdWLWP47HpWXm61aRv8m0PDOpnMAL/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UNDUH SEKARANG <Download className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-none border-4 border-black bg-[#f0f0f0] px-8 py-6 text-lg font-bold shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1"
                  asChild
                >
                  <Link href="#features">
                    PELAJARI LEBIH LANJUT <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              {/* Bagian 10.000+ pengguna puas telah dihapus */}
            </div>
            {/* Hero Section - Bagian tampilan smartphone */}
            <div className="relative flex items-center justify-center">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-none border-4 border-black bg-[#e5cfcf]"></div>
              <div className="absolute -right-4 -bottom-4 h-full w-full rounded-none border-4 border-black bg-[#cfe5d3]"></div>
              <div className="relative h-[600px] w-full max-w-[300px] rounded-none border-4 border-black bg-white p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src="/app-screenshot.png"
                  alt="Screenshot Aplikasi Asave"
                  width={300}
                  height={600}
                  className="h-full w-full rounded-none border-2 border-black object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <Button variant="link" href="#features" className="animate-bounce text-black">
              <ArrowDown className="h-10 w-10" />
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white px-4 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-black md:text-5xl">FITUR UNGGULAN</h2>
              <p className="mx-auto max-w-2xl text-lg text-[#444444]">
                Semua yang Anda butuhkan untuk mengendalikan keuangan Anda dalam satu aplikasi sederhana.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "PELACAKAN PENGELUARAN",
                  description: "Lacak semua pengeluaran Anda dengan mudah di satu tempat dengan kategori khusus.",
                  icon: <CreditCard className="h-10 w-10" />,
                  color: "#e5cfcf",
                },
                {
                  title: "PERENCANAAN ANGGARAN",
                  description: "Tetapkan anggaran bulanan dan dapatkan peringatan saat Anda mendekati batas.",
                  icon: <Wallet className="h-10 w-10" />,
                  color: "#d0cfe5",
                },
                {
                  title: "TARGET MENABUNG",
                  description: "Buat target tabungan dan lacak kemajuan Anda dari waktu ke waktu.",
                  icon: <DollarSign className="h-10 w-10" />,
                  color: "#cfe5d3",
                },
                {
                  title: "LAPORAN VISUAL",
                  description: "Lihat ke mana uang Anda mengalir dengan grafik dan diagram yang indah.",
                  icon: <PieChart className="h-10 w-10" />,
                  color: "#f2e5cf",
                },
                {
                  title: "PENGINGAT TAGIHAN",
                  description: "Jangan pernah melewatkan pembayaran dengan pengingat tagihan otomatis.",
                  icon: <BarChart3 className="h-10 w-10" />,
                  color: "#e5d8cf",
                },
                {
                  title: "UTAMAKAN MOBILE",
                  description: "Akses keuangan Anda di mana saja, kapan saja di smartphone Anda.",
                  icon: <Smartphone className="h-10 w-10" />,
                  color: "#cfe0e5",
                },
              ].map((feature, i) => (
                <Card
                  key={i}
                  className="group overflow-hidden rounded-none border-4 border-black bg-[#f7f7f7] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-2"
                >
                  <div
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-none border-4 border-black"
                    style={{ backgroundColor: feature.color }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-black">{feature.title}</h3>
                  <p className="text-[#444444]">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section id="charts" className="bg-[#f5f5f5] px-4 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-black md:text-5xl">VISUALISASIKAN KEUANGAN ANDA</h2>
              <p className="mx-auto max-w-2xl text-lg text-[#444444]">
                Grafik yang indah membantu Anda memahami kebiasaan pengeluaran Anda dalam sekejap.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-none border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="mb-4 text-xl font-black">PENGELUARAN MINGGUAN</h3>
                <div className="aspect-[4/3] rounded-none border-2 border-black bg-[#f9f9f9] p-4">
                  {/* Mengganti div dengan gambar screenshot pengeluaran mingguan */}
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src="/pengeluaran-mingguan.png"
                      alt="Grafik pengeluaran mingguan"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-none border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="mb-4 text-xl font-black">PENGELUARAN PER KATEGORI</h3>
                <div className="aspect-[4/3] rounded-none border-2 border-black bg-[#f9f9f9] p-4">
                  {/* Screenshot kategori pengeluaran */}
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src="/pengeluaran-kategori.png"
                      alt="Diagram pengeluaran per kategori"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Income/Expense Section */}
        <section className="bg-white px-4 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-black md:text-5xl">LACAK PENDAPATAN & PENGELUARAN</h2>
              <p className="mx-auto max-w-2xl text-lg text-[#444444]">
                Pantau dari mana uang Anda berasal dan ke mana mengalirnya.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-none border-4 border-black bg-[#f7f7f7] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-none border-4 border-black bg-[#4CAF50]">
                    <ArrowDown className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black">PENDAPATAN</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Gaji", amount: "Rp 52.500.000", date: "1 Mei" },
                    { name: "Freelance", amount: "Rp 12.750.000", date: "10 Mei" },
                    { name: "Investasi", amount: "Rp 1.882.500", date: "15 Mei" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-none border-2 border-black bg-white p-4"
                    >
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm text-[#444444]">{item.date}</p>
                      </div>
                      <p className="font-mono text-xl font-bold text-[#4CAF50]">{item.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-none border-4 border-black bg-[#f7f7f7] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-none border-4 border-black bg-[#F44336]">
                    <ArrowUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black">PENGELUARAN</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Sewa", amount: "Rp 18.000.000", date: "5 Mei", category: "#e5cfcf" },
                    { name: "Belanja", amount: "Rp 5.261.250", date: "12 Mei", category: "#d0cfe5" },
                    { name: "Utilitas", amount: "Rp 2.179.500", date: "18 Mei", category: "#cfe5d3" },
                    { name: "Hiburan", amount: "Rp 1.289.850", date: "22 Mei", category: "#f2e5cf" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-none border-2 border-black bg-white p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="h-4 w-4 rounded-none border-2 border-black"
                          style={{ backgroundColor: item.category }}
                        ></div>
                        <div>
                          <p className="font-bold">{item.name}</p>
                          <p className="text-sm text-[#444444]">{item.date}</p>
                        </div>
                      </div>
                      <p className="font-mono text-xl font-bold text-[#F44336]">{item.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tip Card Section */}
        <section className="bg-[#f0f4ff] px-4 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "TABUNG OTOMATIS",
                  description: "Atur transfer otomatis ke rekening tabungan Anda setiap hari gajian.",
                },
                {
                  title: "LACAK PENGELUARAN HARIAN",
                  description: "Catat pengeluaran Anda setiap hari untuk menyadari kebiasaan belanja Anda.",
                },
                {
                  title: "TETAPKAN TARGET REALISTIS",
                  description: "Mulai dengan target tabungan kecil yang dapat dicapai dan kembangkan dari sana.",
                },
              ].map((tip, i) => (
                <div
                  key={i}
                  className="rounded-none border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="mb-4 inline-block rounded-none border-2 border-black bg-[#5b77f5] px-3 py-1 text-sm font-bold text-white">
                    TIPS #{i + 1}
                  </div>
                  <h3 className="mb-2 text-xl font-black">{tip.title}</h3>
                  <p className="text-[#444444]">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="bg-[#5b77f5] px-4 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-none border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:p-12">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-4xl font-black md:text-5xl">UNDUH ASAVE SEKARANG</h2>
                  <p className="mb-6 text-lg text-[#444444]">
                    Aplikasi Asave telah tersedia untuk diunduh. Pindai QR code atau klik tombol unduh untuk mendapatkan aplikasi secara langsung.
                  </p>
                  <div className="flex flex-col gap-4">
                    <Button 
                      className="w-full rounded-none border-4 border-black bg-[#5b77f5] px-8 py-6 text-lg font-bold text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:bg-[#4a66e4]"
                      asChild
                    >
                      <Link 
                        href="https://drive.google.com/file/d/1-WoFdWLWP47HpWXm61aRv8m0PDOpnMAL/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        UNDUH SEKARANG <Download className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <p className="text-center text-sm text-[#666666]">
                      Tersedia untuk Android
                    </p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="absolute -left-4 -top-4 h-full w-full rounded-none border-4 border-black bg-[#cfe0e5]"></div>
                  <div className="absolute -right-4 -bottom-4 h-full w-full rounded-none border-4 border-black bg-[#f2e5cf]"></div>
                  <div className="relative flex h-[300px] w-full max-w-[280px] items-center justify-center rounded-none border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <div className="text-center p-6">
                      <Image 
                        src="/qr-code.png" 
                        alt="QR Code untuk unduh Asave"
                        width={180}
                        height={180}
                        className="mx-auto mb-4 border-4 border-black"
                      />
                      <p className="font-black text-xl mb-2">PINDAI QR CODE</p>
                      <p className="text-sm text-[#444444]">
                        untuk mengunduh aplikasi Asave
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t-4 border-black bg-[#f5f5f5] px-4 py-8 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2">
                {/* Logo Asave di footer */}
                <div className="relative h-8 w-8 overflow-hidden">
                  <Image 
                    src="/asave-logo.png"
                    alt="Logo Asave"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-black tracking-tight">ASAVE</span>
              </Link>
              <p className="mt-4 text-sm text-[#444444]">
                Aplikasi penganggaran brutalis yang membantu Anda menghemat lebih banyak dan mengurangi pengeluaran.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-black">PRODUK</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Fitur
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Harga
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Unduh
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-black">PERUSAHAAN</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Karir
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-black">HUKUM</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:underline">
                    Kebijakan Privasi
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Syarat Layanan
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Kebijakan Cookie
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t-2 border-black pt-8 sm:flex-row">
            <p className="text-xs text-[#444444]">© {new Date().getFullYear()} Asave. Hak cipta dilindungi undang-undang.</p>
            <div className="flex gap-4">
              <Link href="#" className="rounded-none border-2 border-black p-2">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="rounded-none border-2 border-black p-2">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="rounded-none border-2 border-black p-2">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
