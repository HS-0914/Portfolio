import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-2xl text-center md:text-left"
      >
        <h1 className="text-3xl sm:text-5xl md:text-[57px] font-bold leading-tight mb-6">
          안녕하세요,
          <br />
          개발자 <span className="text-teal-500 hidden md:inline">손형수</span>
          <span className="text-teal-500 md:hidden">손형수👨‍💻</span>입니다
        </h1>
        <p className="text-sm sm:text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
          관심이 생기면 탐구하고, 이해를 위해 직접 실행에 옮깁니다. <br />
          복잡함을 줄이고, 누구나 이해할 수 있는 구조를 만드는 것이 진짜
          실력이라 믿습니다.
          <br />
          많은 사람들에게 도움이 되는 서비스를 만드는 개발자가 되기 위해
          노력합니다.
        </p>
        <div className="flex justify-center md:justify-start gap-4 sm:flex-row flex-col">
          <Button asChild size={"lg"} className="bg-teal-500 hover:bg-teal-600">
            <a href="#projects" className="text-[17px]">
              📁 프로젝트 보러가기
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href={"https://github.com/HS-0914"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] px-4 py-2 md:px-6 md:py-3 "
            >
              <img
                src="/Portfolio/github.svg"
                alt="GitHub"
                className="w-4 h-4"
              />
              GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="mailto:gudtn2238@gmail.com"
              className="text-[17px] px-4 py-2 md:px-6 md:py-3"
            >
              ✉️ 이메일 보내기
            </a>
          </Button>
        </div>
      </motion.div>

      {/* 이미지 또는 일러스트 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-12 md:mt-0 md:ml-16 w-64 h-64 bg-gray-100 dark:bg-gray-800 rounded-2xl items-center justify-center shadow-lg  hidden md:flex"
      >
        <span className="text-9xl">🤗</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
