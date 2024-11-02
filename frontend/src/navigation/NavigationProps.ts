/** 다른 화면으로 이동하는 기능을 정의함
 * navigation은 객체 속성,
 * navigate는 메서드 */
export interface NavigationProp {
  navigation: {
    navigate: (screen: string) => void;
    goBack : () => void;
  };
}