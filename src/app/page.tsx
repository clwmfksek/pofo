import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Spline 3D Bar */}
      <div className="top-16 left-0 right-0 z-40 h-108 overflow-hidden">
        <iframe
          src="https://my.spline.design/social3dbar-bM0CHtANlIFgG5iZBs2ws95w/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ pointerEvents: "auto" }}
        />
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-neutral-800" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-yellow-400 font-medium mb-4 animate-fade-in opacity-0">
              PM / AX Engineer
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in opacity-0 animate-delay-100">
              신효환
            </h1>
            <p className="text-xl text-neutral-400 mb-8 animate-fade-in opacity-0 animate-delay-200">
              다양한 AI를 사용하여 많은 경험을 하는 것을 최우선으로 하고
              있습니다.
              <br />
              Claude, Cursor를 통한 바이브 코딩으로 웹사이트를 제작합니다.
            </p>
            <div className="flex gap-4 animate-fade-in opacity-0 animate-delay-300">
              <a
                href="mailto:clwmfksek@gmail.com"
                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition-colors flex items-center gap-2"
              >
                Contact Me
                <span>→</span>
              </a>
              <a
                href="#experience"
                className="border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                View Experience
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                Introduction
              </h3>
              <ul className="space-y-3 text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  다양한 AI를 사용하여 많은 경험을 하는 것을 최우선으로 하고
                  있습니다.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  최대한 많은 사람과 만나 인사이트를 확장시키려고 합니다.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  n8n이라는 자동화 툴에 관심이 많습니다.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  Claude, Cursor를 통한 바이브 코딩으로 웹사이트를 제작합니다.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                Education
              </h3>
              <div className="border border-neutral-800 rounded-2xl p-6">
                <p className="text-sm text-neutral-500 mb-2">
                  2023.03 ~ 2026.03
                </p>
                <h4 className="text-lg font-semibold mb-1">동국대학교</h4>
                <p className="text-neutral-400">
                  컴퓨터AI학부 (학사) 졸업 예정
                </p>
                <p className="text-neutral-500 mt-2">GPA: 3.15 / 4.5</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
          <div className="space-y-8">
            {/* CAPS */}
            <div className="border border-neutral-800 rounded-2xl p-8 hover:border-yellow-400/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    동국대학교 프로그래밍 동아리 CAPS
                  </h3>
                  <p className="text-yellow-400">회장</p>
                </div>
                <p className="text-neutral-500 mt-2 md:mt-0">
                  2025.01 ~ 2025.12
                </p>
              </div>
              <p className="text-neutral-400 mb-4">
                2025학년도 캡스 회장을 역임하였습니다.
              </p>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>• 전국 프로그래밍 연합 동아리 UCPC 가입</li>
                <li>• 제 2회 동국대학교 프로그래밍 대회 개최 at Baekjoon</li>
                <li>• 동아리 내 행사 성공적으로 개최</li>
              </ul>
              <div className="mt-4 inline-block bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-sm">
                동아리 활동 참여부원 250%p 증가
              </div>
            </div>

            {/* RegimenHub */}
            <div className="border border-neutral-800 rounded-2xl p-8 hover:border-yellow-400/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    RegimenHub 프로젝트 외주
                  </h3>
                  <p className="text-yellow-400">개발자</p>
                </div>
                <p className="text-neutral-500 mt-2 md:mt-0">
                  2025.08 ~ 2025.09
                </p>
              </div>
              <p className="text-neutral-400 mb-4">
                v0, Cursor를 이용해 웹사이트를 만들었습니다.
              </p>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>
                  • v0, Cursor를 이용하여 바이브코딩으로 세세한 요구사항을
                  맞춰나갔습니다.
                </li>
                <li>• GA5를 도입하여 유저 인터렉션을 검증했습니다.</li>
              </ul>
              <div className="mt-4 inline-block bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-sm">
                실제 유저 반응 정도 확인
              </div>
            </div>

            {/* KT AICC */}
            <div className="border border-neutral-800 rounded-2xl p-8 hover:border-yellow-400/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">KT AICC 일경험</h3>
                  <p className="text-yellow-400">기획자</p>
                </div>
                <p className="text-neutral-500 mt-2 md:mt-0">
                  2025.08 ~ 2025.09
                </p>
              </div>
              <p className="text-neutral-400 mb-4">
                자체 Qure 서비스를 디자인, 기획하여 수상하였습니다.
              </p>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>• 팀 구성과 프로토타입 개발을 맡았습니다.</li>
                <li>• 장표 제작을 진행하였습니다.</li>
                <li>• 기획 단계에서 리드하였습니다.</li>
              </ul>
              <div className="mt-4 inline-block bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-sm">
                기획, 디자인적 역량 향상
              </div>
            </div>

            {/* Lovable Campus Leader */}
            <div className="border border-neutral-800 rounded-2xl p-8 hover:border-yellow-400/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Lovable Campus Leader
                  </h3>
                  <p className="text-yellow-400">Campus Leader</p>
                </div>
                <p className="text-neutral-500 mt-2 md:mt-0">
                  2025.12 ~ 진행중
                </p>
              </div>
              <p className="text-neutral-400 mb-4">
                Lovable Campus Leader를 맡고 있습니다.
              </p>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>• Slack을 사용하여 다른 Campus Leader들과 활발한 소통</li>
                <li>• Campus Leader Link를 통해 가입 유도</li>
              </ul>
              <div className="mt-4 inline-block bg-green-400/10 text-green-400 px-3 py-1 rounded-full text-sm">
                진행중
              </div>
            </div>

            {/* CAPS 기업컨택 스터디 */}
            <div className="border border-neutral-800 rounded-2xl p-8 hover:border-yellow-400/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    CAPS 기업컨택 스터디
                  </h3>
                  <p className="text-yellow-400">스터디장</p>
                </div>
                <p className="text-neutral-500 mt-2 md:mt-0">
                  2025.07 ~ 2025.08
                </p>
              </div>
              <p className="text-neutral-400 mb-4">
                기업컨택 스터디를 진행했습니다.
              </p>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>• 약 8명의 스타트업 대표님들, 2명의 자대 교수님과 미팅</li>
                <li>• 이 외 여러 전문가들과 24건의 커피챗 진행</li>
                <li>• 질문지 작성 및 느낀 점 정리</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-24 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Awards</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-neutral-800 rounded-2xl p-8 hover:border-yellow-400/50 transition-colors bg-gradient-to-br from-yellow-400/5 to-transparent">
              <p className="text-neutral-500 text-sm mb-2">2025.09</p>
              <h3 className="text-xl font-semibold mb-2">KT AICC 우수상</h3>
              <p className="text-neutral-400">
                Qure 서비스를 통해 성공적 프로젝트 진행
              </p>
              <div className="mt-4 inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                우수상
              </div>
            </div>
            <div className="border border-neutral-800 rounded-2xl p-8 hover:border-yellow-400/50 transition-colors bg-gradient-to-br from-yellow-400/5 to-transparent">
              <p className="text-neutral-500 text-sm mb-2">2025.11</p>
              <h3 className="text-xl font-semibold mb-2">
                동국대학교 첨단융합대학배 해커톤
              </h3>
              <p className="text-neutral-400">
                약 25팀이 참가한 해커톤에서 수상
              </p>
              <div className="mt-4 inline-block bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                미래인재상
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Claude", level: "중" },
              { name: "n8n", level: "중" },
              { name: "Notion", level: "중" },
              { name: "Figma", level: "하" },
              { name: "Obsidian", level: "하" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="border border-neutral-800 rounded-2xl p-6 text-center hover:border-yellow-400/50 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm ${
                    skill.level === "중"
                      ? "bg-yellow-400/20 text-yellow-400"
                      : "bg-neutral-700 text-neutral-400"
                  }`}
                >
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            새로운 기회와 협업에 항상 열려있습니다. 편하게 연락주세요!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:clwmfksek@gmail.com"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-medium hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
            >
              clwmfksek@gmail.com
              <span>→</span>
            </a>
            <a
              href="tel:010-2140-8518"
              className="border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              010-2140-8518
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 text-center text-neutral-500">
          <p>© 2025 신효환. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
