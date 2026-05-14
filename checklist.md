# (주)와이디인 홈페이지 — 작업 체크리스트

진행 시 체크박스를 채워 가며 사용한다. 새 작업이 생기면 해당 Phase에 추가한다.

## Phase 1. 정보 수집

- [x] 업체로부터 전화번호 수령 (휴대폰 010-9303-9400, 유선 051-895-5505)
- [x] 팩스 번호 수령 (051-895-5504)
- [x] 이메일 주소 수령 (yd9303@naver.com)
- [x] 정확한 도로명 주소 확인 (부산광역시 부산진구 가야대로408번길 27, 개금동)
- [ ] 업체로부터 카카오톡 채널 URL 수령 또는 채널 미보유 확정
- [ ] 회사 한 줄 슬로건 결정
- [ ] 회사 소개 문구(3~5줄) 작성 및 검수
- [ ] 사업 영역 카테고리 확정 (실제 시공 범위 기준)
- [ ] 전기공사업 면허번호 확인
- [ ] 사업자등록증 스캔 이미지 수령 (선택)
- [ ] 시공 사진 1~5장 수령 또는 placeholder 결정
- [ ] 로고 보유 여부 확인 (없으면 텍스트 로고)
- [ ] 도메인 보유 여부 확인

## Phase 2. 설계

- [ ] 섹션별 와이어프레임 텍스트 스케치
- [ ] 컬러 팔레트 확정 (메인·강조·중립)
- [ ] 폰트 선정 (한글 본문·헤드라인)
- [ ] 카피라이팅 초안 (Hero·About·Services·Contact)
- [ ] 아이콘/일러스트 소스 결정 (Heroicons, Lucide 등)

## Phase 3. 구현

### 초기 세팅
- [ ] `npm create vite@latest` 로 React + TS 템플릿 초기화
- [ ] Tailwind CSS 설치 및 설정 (확정 시)
- [ ] 디렉터리 구조 정리 (`src/sections`, `src/components`, `src/assets`)
- [ ] ESLint·Prettier 기본 설정 확인
- [ ] favicon 및 메타 태그 작성

### 컴포넌트
- [ ] `Header` (로고 + 앵커 메뉴 + 모바일 햄버거)
- [ ] `Hero` 섹션
- [ ] `About` 섹션
- [ ] `Services` 섹션
- [ ] `Portfolio` 섹션 (자료 부족 시 placeholder)
- [ ] `Certifications` 섹션
- [ ] `Contact` 섹션 (전화·카톡·지도)
- [ ] `Footer`
- [ ] 전체 부드러운 스크롤 이동
- [ ] 모바일 반응형 점검 (375px / 768px / 1280px)
- [ ] 다크모드 대응 여부 결정 (기본은 미적용)

### 품질 점검
- [ ] semantic HTML 적용 (`<section>`, `<header>`, `<nav>` 등)
- [ ] 이미지 alt 텍스트
- [ ] Lighthouse 점수 확인 (Performance·Accessibility·SEO 90+ 목표)
- [ ] 빌드 산출물 크기 확인

## Phase 4. 배포 및 후속

- [x] GitHub repo 생성 및 push (https://github.com/jeonwoochul0515-cell/ydin)
- [x] Cloudflare Pages 배포 (https://ydin-7sa.pages.dev)
- [x] HTTPS 확인 (Cloudflare 기본 제공)
- [ ] 도메인 연결 (DNS 설정) — 사용자 도메인 보유 시
- [ ] OG 태그 미리보기 검증
- [ ] 네이버 서치어드바이저 등록
- [ ] 구글 서치콘솔 등록
- [ ] 카카오톡 채널 URL 수령 후 Hero·Contact 링크 추가
- [ ] 시공 사진 수령 후 Portfolio 카드 이미지로 교체
- [ ] 모바일·데스크톱 실기기 점검
- [ ] 후속 안내문서 작성 (네이버 플레이스 등록, ECIC 등록 등)
