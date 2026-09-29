import { useState } from "react";
import {
  Bell, HelpCircle, Globe2, Search, ShoppingCart, ChevronRight,
  UserRound, QrCode, Facebook, Instagram, Youtube, Truck,
  ShieldCheck, RotateCcw, TicketPercent, Gift
} from "lucide-react";

const categories = [
  ["👕", "Thời Trang Nam"], ["👗", "Thời Trang Nữ"], ["📱", "Điện Thoại & Phụ Kiện"],
  ["🍼", "Mẹ & Bé"], ["💻", "Thiết Bị Điện Tử"], ["🏠", "Nhà Cửa & Đời Sống"],
  ["🖥️", "Máy Tính & Laptop"], ["💄", "Sắc Đẹp"], ["📷", "Máy Ảnh & Máy Quay Phim"],
  ["❤️", "Sức Khỏe"], ["⌚", "Đồng Hồ"], ["👟", "Giày Dép Nữ"],
  ["👞", "Giày Dép Nam"], ["👜", "Túi Ví Nữ"], ["🍳", "Điện Gia Dụng"],
  ["💎", "Phụ Kiện & Trang Sức"], ["🏕️", "Thể Thao & Du Lịch"], ["🛒", "Bách Hóa Online"]
];

const products = [
  { img:"https://picsum.photos/seed/phone/500/500", name:"Điện thoại thông minh phiên bản mới, thiết kế hiện đại", price:"2.490.000", old:"3.200.000", discount:"22%", sold:"1,2k" },
  { img:"https://picsum.photos/seed/headphone/500/500", name:"Tai nghe Bluetooth không dây chống ồn, pin lâu", price:"159.000", old:"299.000", discount:"47%", sold:"3,8k" },
  { img:"https://picsum.photos/seed/shirt/500/500", name:"Áo thun nam nữ form rộng phong cách Hàn Quốc", price:"89.000", old:"149.000", discount:"40%", sold:"5,6k" },
  { img:"https://picsum.photos/seed/skincare/500/500", name:"Kem dưỡng da cấp ẩm chuyên sâu chính hãng", price:"179.000", old:"320.000", discount:"44%", sold:"2,1k" },
  { img:"https://picsum.photos/seed/shoes/500/500", name:"Giày sneaker thể thao nhẹ, êm chân, thời trang", price:"249.000", old:"499.000", discount:"50%", sold:"4,3k" },
  { img:"https://picsum.photos/seed/bag/500/500", name:"Túi đeo chéo nữ nhỏ gọn, nhiều ngăn tiện lợi", price:"129.000", old:"250.000", discount:"48%", sold:"1,9k" },
  { img:"https://picsum.photos/seed/watch/500/500", name:"Đồng hồ thời trang nam dây kim loại cao cấp", price:"399.000", old:"699.000", discount:"43%", sold:"870" },
  { img:"https://picsum.photos/seed/home/500/500", name:"Kệ để đồ đa năng cho phòng ngủ và bàn làm việc", price:"115.000", old:"189.000", discount:"39%", sold:"2,7k" },
  { img:"https://picsum.photos/seed/makeup/500/500", name:"Son môi lì lâu trôi, bảng màu tự nhiên", price:"99.000", old:"169.000", discount:"41%", sold:"6,2k" },
  { img:"https://picsum.photos/seed/laptop/500/500", name:"Chuột không dây văn phòng, kết nối nhanh", price:"75.000", old:"129.000", discount:"42%", sold:"8,1k" }
];

const flash = [
  { img:"https://picsum.photos/seed/flash1/400/400", price:"39.000", discount:"50%" },
  { img:"https://picsum.photos/seed/flash2/400/400", price:"59.000", discount:"62%" },
  { img:"https://picsum.photos/seed/flash3/400/400", price:"89.000", discount:"45%" },
  { img:"https://picsum.photos/seed/flash4/400/400", price:"129.000", discount:"70%" },
  { img:"https://picsum.photos/seed/flash5/400/400", price:"199.000", discount:"38%" },
  { img:"https://picsum.photos/seed/flash6/400/400", price:"29.000", discount:"75%" }
];

function TopBar() {
  return (
    <div className="bg-[#ee4d2d] text-white text-[13px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between py-1.5">
        <div className="flex gap-4">
          <span className="cursor-pointer">Kênh Người Bán</span>
          <span>Trở thành Người bán Shopee</span>
          <span>Kết nối</span>
          <Facebook size={14}/><Instagram size={14}/>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><QrCode size={14}/> Tải ứng dụng</span>
          <span className="flex items-center gap-1"><Bell size={14}/> Thông báo</span>
          <span className="flex items-center gap-1"><HelpCircle size={14}/> Hỗ trợ</span>
          <span className="flex items-center gap-1"><Globe2 size={14}/> Tiếng Việt⌄</span>
          <span>Đăng ký</span><span>|</span><span>Đăng nhập</span>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [query, setQuery] = useState("");
  return (
    <header className="bg-[#ee4d2d] text-white">
      <div className="mx-auto max-w-[1200px] pb-4">
        <div className="flex items-center gap-8">
          <div className="flex min-w-[175px] items-center gap-2 text-3xl font-bold tracking-tight">
            <div className="grid h-11 w-11 place-items-center rounded-lg border-2 border-white text-2xl">S</div>
            <span>ShopVN</span>
          </div>

          <div className="flex-1">
            <div className="flex h-10 overflow-hidden rounded-sm bg-white shadow-sm">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Tìm sản phẩm, thương hiệu và cửa hàng"
                className="flex-1 px-4 text-sm text-gray-700 outline-none"
              />
              <button className="m-1 flex w-14 items-center justify-center rounded-sm bg-[#fb5533] text-white hover:bg-[#e84326]">
                <Search size={21}/>
              </button>
            </div>
            <div className="mt-1.5 flex gap-5 text-[11px] opacity-95">
              <span>Áo thun nam</span><span>Giày sneaker</span><span>Tai nghe bluetooth</span>
              <span>Son môi</span><span>Điện thoại</span><span>Túi xách</span>
            </div>
          </div>

          <button className="relative p-3">
            <ShoppingCart size={28}/>
            <span className="absolute right-0 top-0 grid h-5 min-w-5 place-items-center rounded-full border border-[#ee4d2d] bg-white px-1 text-xs text-[#ee4d2d]">3</span>
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto mt-3 grid max-w-[1200px] grid-cols-[2fr_1fr] gap-2">
      <div className="relative h-[235px] overflow-hidden rounded-sm bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-8 text-white">
        <div className="absolute right-10 top-4 text-[110px] opacity-20">🛍️</div>
        <p className="mb-2 text-lg font-semibold">SIÊU SALE THÁNG 9</p>
        <h1 className="max-w-[520px] text-4xl font-black uppercase leading-tight">Săn deal cực sốc<br/>mua là mê</h1>
        <p className="mt-4 text-lg">Giảm đến <b className="text-3xl">90%</b></p>
        <button className="mt-4 rounded bg-white px-5 py-2 font-bold text-[#ee4d2d]">Mua ngay</button>
      </div>
      <div className="grid grid-rows-2 gap-2">
        <div className="flex items-center justify-between overflow-hidden rounded bg-orange-100 px-6">
          <div><p className="text-sm text-gray-600">Ưu đãi hôm nay</p><h3 className="text-xl font-bold text-orange-600">VOUCHER 50K</h3></div>
          <Gift size={54} className="text-orange-500"/>
        </div>
        <div className="flex items-center justify-between overflow-hidden rounded bg-blue-100 px-6">
          <div><p className="text-sm text-gray-600">Miễn phí vận chuyển</p><h3 className="text-xl font-bold text-blue-600">FREESHIP</h3></div>
          <Truck size={54} className="text-blue-500"/>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mx-auto mt-3 max-w-[1200px] bg-white">
      <div className="border-b px-5 py-4 text-base font-medium uppercase text-gray-700">Danh mục</div>
      <div className="grid grid-cols-9">
        {categories.map(([icon, name]) => (
          <button key={name} className="group flex h-[118px] flex-col items-center justify-center border-b border-r px-2 text-center hover:shadow-sm">
            <div className="mb-2 text-4xl transition-transform group-hover:scale-110">{icon}</div>
            <span className="line-clamp-2 text-[13px]">{name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function FlashSale() {
  return (
    <section className="mx-auto mt-5 max-w-[1200px] bg-white">
      <div className="flex h-14 items-center justify-between border-b px-5">
        <div className="flex items-center gap-5">
          <h2 className="text-xl font-medium uppercase text-[#ee4d2d]">⚡ FLASH SALE</h2>
          <div className="flex gap-1 text-xs">
            <b className="rounded bg-black px-2 py-1 text-white">02</b>:
            <b className="rounded bg-black px-2 py-1 text-white">15</b>:
            <b className="rounded bg-black px-2 py-1 text-white">48</b>
          </div>
        </div>
        <button className="flex items-center gap-1 text-sm text-gray-500">Xem tất cả <ChevronRight size={17}/></button>
      </div>
      <div className="grid grid-cols-6 gap-3 p-4">
        {flash.map((p, i) => (
          <div key={i} className="relative cursor-pointer">
            <div className="relative aspect-square overflow-hidden">
              <img src={p.img} className="h-full w-full object-cover" />
              <span className="absolute right-0 top-0 bg-yellow-400 px-1 text-[11px] font-bold text-orange-700">{p.discount}</span>
            </div>
            <div className="mt-2 text-center text-xl font-medium text-[#ee4d2d]">₫{p.price}</div>
            <div className="mx-3 mt-2 h-4 overflow-hidden rounded-full bg-orange-100">
              <div className="h-full w-[70%] rounded-full bg-[#ffb000] text-center text-[9px] text-white">ĐANG BÁN CHẠY</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    [<ShieldCheck/>, "Trả hàng 15 ngày"], [<ShieldCheck/>, "Chính hãng 100%"],
    [<Truck/>, "Giao miễn phí"], [<TicketPercent/>, "Ưu đãi đến 50%"]
  ];
  return (
    <div className="mx-auto mt-3 grid max-w-[1200px] grid-cols-4 bg-white py-4">
      {items.map(([icon, text]) => (
        <div key={text} className="flex items-center justify-center gap-3 border-r last:border-0">
          <span className="text-[#ee4d2d]">{icon}</span><span className="text-sm text-gray-700">{text}</span>
        </div>
      ))}
    </div>
  );
}

function ProductCard({p}) {
  return (
    <article className="group relative overflow-hidden bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-square overflow-hidden">
        <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105"/>
        <span className="absolute right-0 top-0 bg-yellow-300 px-1.5 py-1 text-[11px] font-bold text-orange-700">{p.discount} GIẢM</span>
        <span className="absolute bottom-0 left-0 bg-[#ee4d2d] px-2 py-1 text-[11px] font-medium text-white">Yêu thích</span>
      </div>
      <div className="p-2.5">
        <h3 className="line-clamp-2 min-h-[40px] text-[13px] leading-5 text-gray-800">{p.name}</h3>
        <div className="mt-2 flex items-end justify-between">
          <span className="text-lg text-[#ee4d2d]">₫{p.price}</span>
          <span className="text-[11px] text-gray-400">Đã bán {p.sold}</span>
        </div>
        <div className="mt-1 flex items-center gap-1 text-[11px]">
          <span className="text-yellow-500">★★★★★</span><span className="text-gray-300">|</span><span className="text-gray-400">Hà Nội</span>
        </div>
      </div>
    </article>
  );
}

function Suggested() {
  return (
    <section className="mx-auto mt-5 max-w-[1200px] pb-10">
      <div className="sticky top-0 z-10 flex h-14 items-center justify-between border-b-4 border-[#ee4d2d] bg-white px-5">
        <h2 className="text-xl font-medium uppercase text-[#ee4d2d]">Gợi ý hôm nay</h2>
        <button className="text-sm text-gray-500">Xem thêm</button>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-2.5">
        {products.map((p, i) => <ProductCard p={p} key={i}/>)}
      </div>
      <button className="mx-auto mt-6 block border border-gray-300 bg-white px-12 py-2 text-sm text-gray-600 hover:bg-gray-50">Xem thêm</button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-5 gap-8 py-10 text-sm text-gray-500">
        <div><h4 className="mb-4 font-bold uppercase text-gray-700">Chăm sóc khách hàng</h4><p className="mb-2">Trung Tâm Trợ Giúp</p><p className="mb-2">Shopee Blog</p><p className="mb-2">Hướng Dẫn Mua Hàng</p></div>
        <div><h4 className="mb-4 font-bold uppercase text-gray-700">Về ShopVN</h4><p className="mb-2">Giới Thiệu</p><p className="mb-2">Tuyển Dụng</p><p className="mb-2">Điều Khoản</p></div>
        <div><h4 className="mb-4 font-bold uppercase text-gray-700">Thanh toán</h4><div className="grid grid-cols-3 gap-2 text-center text-xs"><span className="rounded border p-2">VISA</span><span className="rounded border p-2">MOMO</span><span className="rounded border p-2">COD</span></div></div>
        <div><h4 className="mb-4 font-bold uppercase text-gray-700">Theo dõi chúng tôi</h4><p className="mb-2 flex gap-2"><Facebook size={17}/> Facebook</p><p className="mb-2 flex gap-2"><Instagram size={17}/> Instagram</p><p className="flex gap-2"><Youtube size={17}/> Youtube</p></div>
        <div><h4 className="mb-4 font-bold uppercase text-gray-700">Tải ứng dụng</h4><div className="flex gap-2"><div className="grid h-20 w-20 place-items-center border text-xs">QR CODE</div><div className="text-xs">App Store<br/><br/>Google Play</div></div></div>
      </div>
      <div className="border-t py-5 text-center text-xs text-gray-400">© 2026 ShopVN. Giao diện demo ReactJS + TailwindCSS.</div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <TopBar/>
      <Header/>
      <main>
        <Hero/>
        <Categories/>
        <FlashSale/>
        <Benefits/>
        <Suggested/>
      </main>
      <Footer/>
    </>
  );
}