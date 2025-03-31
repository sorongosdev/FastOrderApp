# 🐧 학교 앞 픽업/먹고가기 주문 앱, 패패오더
![패패오더](https://github.com/user-attachments/assets/3b3fdcd1-55f3-4c8f-b6b1-8e7f1e7d042e)

## 📖 1. 프로젝트 소개
- 패패오더는 미리 주문하고 예약하는 기능으로 공강시간을 지키고싶은 대학생과 사장님을 연결해주는 주문 앱입니다.
- 지도에서 주문 가능한 가게를 음식 카테고리 별로 볼 수 있습니다.
- 자주 주문하는 메뉴를 메인 화면에서 원터치로 주문이 가능합니다.
- 사장님용 포스 앱을 통해 사장님이 주문 정보를 빠르게 받아볼 수 있습니다.

## 👤 2. 역할

### 🐚 도소라
- 페이지: 지도 메인, 주문내역, 찜 목록, 마이페이지
- 기능
  - 메인 네이버 지도 API 연동
  - 메인 검색 기능 구현
  - 바텀 시트 제스처, 칩그룹 카테고리 필터링, 가게 상태에 따른 마커 표출
  - 마이페이지 내 정보 보기, 포인트 충전하기
  - FCM 푸시 알림 연동 및 구현
  - 주문내역 불러오기, 찜 기능 구현

## 🛠️ 3. 개발 환경

### 🔍 1) 프레임워크 및 언어
- Front-end: React Native(0.78.0), TypeScript(2.0.4)
- Back-end: Django (x.x.x)

### 🔧 2) 개발 도구
- Android Studio: 2024.2.2
- Xcode: 15.2
- Mac OS

### 📱 3) 테스트 환경
- iOS 시뮬레이터: iPhone (iOS x.x.x) `EDIT HERE`
- iOS 실제 기기: iPhone11 (iOS 18.1.1) 
- Android 에뮬레이터: API 레벨 xx (Android x.x) `EDIT HERE`
- Android 실제 기기: API 레벨 29 (Android 10.0)

### 📚 4) 주요 라이브러리 및 API
- react-native-naver-map: 1.5.10
- Firebase Cloud Messaging (FCM): 21.4.0
- react-native-async-storage: 2.0.0

### 🔖 5) 버전 및 이슈 관리
- Git: 2.39.3

### 👥 6) 협업 툴
- 커뮤니케이션: Discord
- 문서 관리: Notion

### ☁️ 7) 서비스 배포 환경
- 백엔드 서버: 자체 서버

### 🎨 8) 디자인
- Figma

## ▶️ 4. 프로젝트 실행 방법

### ⬇️ 1) 필수 설치 사항

#### 기본 환경
- Node.js (23.10.0)
- npm (v8.0.0 이상) 또는 yarn (v1.22.0 이상)
- JDK (Java Development Kit) 17
- Android Studio (최신 버전)
  - Android SDK
  - Android SDK Platform
  - Android Virtual Device
- Xcode 15.0 이상 (iOS 개발용, macOS 필요)
- CocoaPods 1.12.0 이상 (iOS 의존성 관리, macOS 필요)
- Watchman (파일 시스템 변경 감지 도구)

#### 필수 의존성 패키지
- react v18.3.1
- react-native v0.75.4
- @react-navigation/native v6.1.18
- @react-navigation/stack v6.4.1
- @react-navigation/bottom-tabs v6.6.1
- @react-native-firebase/app v21.4.0 (푸시 알림용)
- @react-native-firebase/messaging v21.4.0 (푸시 알림용)
- @mj-studio/react-native-naver-map v1.5.10 (네이버 지도)
- @react-native-async-storage/async-storage v2.0.0 (로컬 저장소)
- react-native-gesture-handler v2.20.0
- react-native-reanimated v3.15.5
- react-native-safe-area-context v4.11.0
- react-native-screens v3.34.0
- react-native-svg v15.7.1
- react-native-vector-icons v10.2.0
- react-native-webview v13.12.3
- axios v1.7.7 (네트워크 요청)
- TypeScript 5.0.4 (타입 안정성)

### ⿻ 2) 프로젝트 클론 및 설정
- 프로젝트 클론
```bash
git clone https://github.com/FastOrderApp/FastOrderApp.git
```

- node.js 설치 (brew를 통한 설치)
```bash
brew install node
```

- react native cli 설치
```bash
npm install -g react-native-cli
```

- 의존성 설치
```bash
cd frontend
npm install
```

### 🌐 3) 앱 빌드

#### iOS

- iOS 의존성 불러오기
```bash
pod install
```

- 파이어베이스 관련 파일 GoogleService-Info.plist 루트 경로에 추가

- /usr/local/bin 디렉토리 생성


① iOS 실제 기기
```bash
brew install ios-deploy # 실제 기기에 설치
npx react-native start
i
```

② iOS 시뮬레이터
```bash
npx react-native run-ios
```

### Android

- 자바 설치 및 환경변수 지정

```bash
brew install openjdk@17
```

- 경로 확인
```bash
# 경로 확인 (Apple Silicon Mac인 경우)
sudo ln -sfn /opt/homebrew/opt/openjdk@11/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk

# Intel Mac인 경우
sudo ln -sfn /usr/local/opt/openjdk@11/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
```

- Java 관련 환경 변수 지정
```bash
# 실행 파일 경로 확인 (Apple Silicon Mac)
echo 'export JAVA_HOME=/opt/homebrew/opt/openjdk@17' >> ~/.zshrc
echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.zshrc

# 또는 Intel Mac인 경우
echo 'export JAVA_HOME=/usr/local/opt/openjdk@17' >> ~/.zshrc
echo 'export PATH=$JAVA_HOME/bin:$PATH' >> ~/.zshrc

# 터미널 로드
source ~/.zshrc
```
- adb 설치
```bash
brew install android-platform-tools
```

- 안드로이드 SDK 관련 환경변수 설정
```zsh
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulators
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

- 안드로이드 파이어베이스 관련 파일 `frontend\android\app\google-services.json` 경로에 추가 (google-services.json)

③ 안드로이드 에뮬레이터
```bash
npx react-native run-android
```


## 🌿 5. 브랜치 전략
- 작업자의 이름으로 브랜치 생성(sora, jongwon, ...)

## 📁 6. 프로젝트 구조
```
src/
├─ assets/       # 아이콘, 이미지 리소스
├─ components/   # 공통 UI 컴포넌트 (NaverMap, BottomSheet 등)
├─ consts/       # 상수 정의
├─ navigation/   # 네비게이션 설정
├─ pages/        # 주요 화면 (Main, Login, Store 등)
└─ styles/       # 컴포넌트별 스타일 정의
```

## 📅 7. 개발 기간
2024.09.xx ~ 2024.12.xx

## 📄 8. 손님용 앱 화면별 기능

### <<회원가입>>

| 회원가입 |
| :-----: | 
| <img width="426" alt="스크린샷 2025-03-16 오후 3 53 41" src="https://github.com/user-attachments/assets/a82a6c44-d209-4db2-b0d8-5e7a09ecbf9d" width="300"/> |

### <<로그인>>

| 로그인 |
| :-----: |
| <img width="426" alt="스크린샷 2025-03-16 오후 3 56 35" src="https://github.com/user-attachments/assets/3f0cb03f-d96f-4d61-b800-1425cb9a8fcb" width="300"/> |

### <<메인>>
- 네이버맵과 연동된 학교 앞 지도를 볼 수 있습니다.
- 식당 카테고리별로 필터링 해서 볼 수 있습니다.
- 상단의 검색창을 통해 찾는 가게를 검색할 수 있습니다.
- 바텀 시트에서는 최근 주문내역을 기본을 보여줍니다.
- 이 바텀시트의 주문내역에서 원터치 주문이 가능합니다.
- 지도의 마커를 누르면 가게 정보를 볼 수 있습니다.

| 메인 기본 화면 | 필터링한 화면 | 바텀 시트 주문 내역 |
| :-----: | :-----: | :-----: |
| ![image](https://github.com/user-attachments/assets/64b555e0-8b5b-48bd-b5bd-5316fd2e458f) | ![image](https://github.com/user-attachments/assets/dc7109e2-16cf-444b-bf8c-55e894855ef7) | ![image](https://github.com/user-attachments/assets/18bf3049-7f12-4512-93a8-44ca206398f3) |

### <<주문내역>>
- 주문한 내역을 최신 순으로 볼 수 있습니다.
- 가게를 찜할 수 있습니다.

| 주문내역 화면 |
| :-----: |
| <img src="https://github.com/user-attachments/assets/00de7c28-4a51-4979-911e-d7667a448eba" width="300"> |

### <<찜 목록>>
- 가게별로 찜한 목록을 볼 수 있습니다.
- 편집 버튼을 눌러 찜한 음식점, 또는 메뉴를 삭제할 수 있습니다.

| 찜 목록 화면 |
| :-----: |
| <img src="https://github.com/user-attachments/assets/b253fed1-a70c-4fc6-861d-ed3c4eb9fdfb" width="300"> |

### <<마이페이지>>
- 포인트를 충전할 수 있습니다.
- 가지고 있는 쿠폰을 볼 수 있습니다.

| 마이페이지 화면 |
| :-----: |
| <img src="https://github.com/user-attachments/assets/613321ff-0c10-4c54-b773-7e5c52a1fcdd" width="300"> |

## 📄 9. 사장님용 포스앱 기능

### <<로그인>>

- 가게는 우리 앱과 협업을 하면, 가게 아이디와 비밀번호를 부여받습니다.
- 이렇게 부여받은 아이디와 비밀번호로 로그인할 수 있습니다.
 
| 로그인 |
| :-----: |
| ![포스 앱 로그인](https://github.com/user-attachments/assets/cf8da7fa-3bb0-41f6-b3c5-d7c4d4e004fa) |

### <<영업 상태 관리>>

- 영업 상태를 ON으로 설정하면 플로팅 버튼이 검은색으로 표시되고, 팝업창으로 주문 알림을 받을 수 있습니다.
- 영업 상태를 OFF로 설정하면 플로팅 버튼이 빨간색으로 표시되고, 주문 앱에서 주문 불가 상태가 됩니다.

| 영업 ON | 영업 OFF |
| :-----: | :-----: |
| ![영업중, 신규 주문 팝업](https://github.com/user-attachments/assets/7132a719-d5b6-4745-a3fa-e9fe64d29512) | ![영업 종료](https://github.com/user-attachments/assets/9e3b98c1-2b1d-45ac-8e2d-c2e38d247c23) |

### <<매장 식사 주문내역>>

- 주문 앱에서 주문한 정보가 주문 처리 상태에 따라 다른 탭에 표시됩니다.
- 포스앱은 스크롤이 동작하지 않기 때문에, 화살표 모양으로 페이징을 했습니다.

| 매장 식사 - 접수 대기 | 매장 식사 - 제조 중 | 매장 식사 - 주문 조회 |
| :-----: | :-----: | :-----: |
| ![매장식사 접수대기](https://github.com/user-attachments/assets/c8770086-2e7a-42f4-94ae-9e229fa242b8) | ![매장식사 제조중](https://github.com/user-attachments/assets/57cb1040-4fdc-4aa6-a789-feb4b67edb75) | ![매장식사 지난 주문 조회](https://github.com/user-attachments/assets/191e3e33-8d7c-4581-adc5-e629a68ff390) |

### <<픽업 주문내역>>

- 매장 식사와 구분을 위해 픽업은 다른 창에 표시됩니다.
- 매장 식사 주문내역과 동일하게 주문 처리 상태에 따라 접수 대기, 제조 중, 주문 조회 탭에 표시됩니다.

| 픽업 - 접수 대기 | 픽업 - 제조 중 | 픽업 - 주문 조회 |
| :-----: | :-----: | :-----: |
| ![픽업 접수대기](https://github.com/user-attachments/assets/909d5c93-fe6e-4fb8-9c11-5c477b94ada3) | ![픽업 제조중](https://github.com/user-attachments/assets/21e3386d-c767-45cf-b1d4-184e14b08490) | ![픽업 지난 주문 조회](https://github.com/user-attachments/assets/4d9d1570-e453-4970-8112-e7ff5624e27e) |

### <<사장님 편의 기능>>

- 패패오더를 통해 주문한 매출에 대해 일별, 주별, 월별 매출을 손쉽게 확인 가능합니다.
- 주문이 들어올 때 발생하는 알림 사운드를 직접 설정할 수 있습니다.

| 매출 기록 | 설정 |
| :-----: | :-----: |
| ![매출 기록](https://github.com/user-attachments/assets/eedffa76-1717-4e8d-904f-67b337d80c48) | ![설정](https://github.com/user-attachments/assets/ce4da2f9-21e5-4930-bdd5-e1dfaf38e804) |

## 💥 10. 트러블 슈팅
### 1) 알림 오면 화면 깨우지 못하는 문제
- 안드로이드에서 알림을 수신하면 소리는 나지만, 화면을 깨우지 못합니다.
- 네이티브단의 설정이 필요합니다.
