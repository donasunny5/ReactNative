import { act, renderHook} from "@testing-library/react-native";
import useTaskStatus from "../useTaskStatus";

describe("useTaskStatus tests", () => {
  it('The custom hook can set the initial value of the todoCompletionValue state variable', () => {
    const initialValue = false;
    const { result } = renderHook(() => useTaskStatus(initialValue));
    expect(result.current.todoCompletionValue).toBe(initialValue);
  });
  it('The toggle() function updates the state variable', () => {
    const { result } = renderHook(() => useTaskStatus(false));
    expect(result.current.todoCompletionValue).toBe(false);
    act(() => {
      result.current.toggle();
    });
    expect(result.current.todoCompletionValue).toBe(true);
    act(() => {
      result.current.toggle();
    });
    expect(result.current.todoCompletionValue).toBe(false);
  });
})
