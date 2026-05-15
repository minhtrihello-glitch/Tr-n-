import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Instagram, Mail, Phone, ExternalLink, ChevronDown, Play, Layout, Camera, Palette } from 'lucide-react';

// Cấu hình hiệu ứng xuất hiện khi cuộn trang
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
};

function App() {
  return (
    <div className="bg-light text-dark font-sans selection:bg-brand selection:text-white">
      
      {/* 1. THANH MENU (NAVIGATION) */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-6 py-5 bg-white/70 backdrop-blur-lg border-b border-gray-100">
        <div className="text-xl font-display font-bold tracking-tighter italic">CREATIVE.PORTFOLIO</div>
        <div className="hidden md:flex gap-8 uppercase text-[10px] font-bold tracking-[0.2em]">
          {['home', 'work', 'about', 'contact'].map(item => (
            <Link key={item} to={item} smooth={true} className="cursor-pointer hover:text-brand transition-all">
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* 2. PHẦN ĐẦU TRANG (HERO SECTION) */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 relative bg-[#fdfcfb]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <span className="uppercase tracking-[0.4em] text-[10px] mb-6 block text-brand font-bold">Media Creator | Beauty Specialist</span>
          <h1 className="font-display text-5xl md:text-8xl mb-8 leading-tight">
            Nâng Tầm <br/> <span className="italic font-light">Thương Hiệu</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed mb-10 font-light">
            Biến những ý tưởng thô sơ thành những trải nghiệm thị giác đẳng cấp thông qua hình ảnh và video chuyên nghiệp.
          </p>
          <Link to="work" smooth={true} className="border border-dark text-dark px-10 py-4 rounded-full hover:bg-dark hover:text-white transition-all cursor-pointer inline-flex items-center gap-2 text-xs uppercase tracking-widest">
            Khám phá dự án <ChevronDown size={14} />
          </Link>
        </motion.div>
        
        {/* Vòng tròn trang trí nhẹ nhàng kiểu Canva */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/5 rounded-full blur-3xl -z-0"></div>
      </section>

      {/* 3. DANH SÁCH DỰ ÁN (WORK SECTION) */}
      <section id="work" className="py-24 px-6 md:px-20 bg-white">
        <motion.div {...fadeInUp} className="mb-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Dự Án Nổi Bật</h2>
          <p className="text-gray-400 uppercase tracking-widest text-[10px]">Selected Works 2023 - 2024</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Dự án 1 */}
          <motion.div {...fadeInUp} className="group cursor-pointer">
            <div className="overflow-hidden bg-gray-100 aspect-[16/10] relative mb-6">
              <img 
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=1000" 
                alt="Spa Project" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white p-4 rounded-full"><Play size={20} fill="currentColor"/></div>
              </div>
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider">Beauty Center Branding</h3>
            <p className="text-gray-400 text-xs mt-2 italic uppercase">Cinematography / Editing</p>
          </motion.div>

          {/* Dự án 2 */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="group cursor-pointer">
            <div className="overflow-hidden bg-gray-100 aspect-[16/10] relative mb-6">
              <img 
                src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1000" 
                alt="Product Project" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white p-4 rounded-full"><ExternalLink size={20}/></div>
              </div>
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider">Skincare Collection</h3>
            <p className="text-gray-400 text-xs mt-2 italic uppercase">Product Photography</p>
          </motion.div>
        </div>
      </section>

      {/* 4. DỊCH VỤ (SERVICES) */}
      <section className="py-24 bg-[#1a1a1a] text-white px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Camera className="text-brand" size={32} />
            <h4 className="text-xl font-display">Photography</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Chụp ảnh sản phẩm, không gian Spa và chân dung nghệ thuật với ánh sáng tinh tế.</p>
          </div>
          <div className="space-y-4">
            <Play className="text-brand" size={32} />
            <h4 className="text-xl font-display">Video Production</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Sản xuất Video Viral TikTok, Clip giới thiệu dịch vụ chuẩn màu sắc điện ảnh.</p>
          </div>
          <div className="space-y-4">
            <Palette className="text-brand" size={32} />
            <h4 className="text-xl font-display">Graphic Design</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Thiết kế bộ nhận diện thương hiệu, Menu và ấn phẩm truyền thông chuyên biệt ngành Beauty.</p>
          </div>
        </div>
      </section>

      {/* 5. LIÊN HỆ (CONTACT SECTION) */}
      <section id="contact" className="py-24 bg-white px-6 text-center">
        <motion.div {...fadeInUp}>
          <h2 className="font-display text-4xl md:text-6xl mb-12">Hãy cùng tạo nên <br/> điều kỳ diệu</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 items-center mb-16">
            <a href="mailto:contact@yourname.com" className="group">
              <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-2">Gửi Email</p>
              <p className="text-xl font-light group-hover:text-brand transition-colors">hello@yourname.com</p>
            </a>
            <a href="tel:0900000000" className="group">
              <p className="text-gray-400 text-[10px] uppercase tracking-widest mb-2">Điện thoại</p>
              <p className="text-xl font-light group-hover:text-brand transition-colors">090 123 4567</p>
            </a>
          </div>
          
          <div className="flex justify-center gap-8">
            <Instagram className="cursor-pointer hover:text-brand transition-all hover:-translate-y-1" size={24} />
            <div className="w-6 h-6 border border-dark rounded-full flex items-center justify-center text-[8px] font-bold cursor-pointer hover:bg-dark hover:text-white transition-all hover:-translate-y-1">ZALO</div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-[10px] tracking-[0.3em] text-gray-400 uppercase border-t border-gray-50">
        © {new Date().getFullYear()} Designed by Canva • Coded by Expert AI
      </footer>
    </div>
  );
}

export default App;
