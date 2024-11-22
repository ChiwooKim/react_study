import useInput from "../hooks/useInput";

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다. -> 컴포넌트들을 호출해서 화면에 렌더링 할 때, 서로 다른 훅들의 호출 순서가 엉망이 되어 내부적인 오류 발생을 유발할 수 있다.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다. -> 함수의 이름 앞에 use라는 키워드를 사용하면 커스텀훅이라고 판단하여 오류를 발생시키지 않는다.

const HookExam = () => {
  const [input, onChange] = useInput();

  return <div>hookexam</div>;
};

export default HookExam;
