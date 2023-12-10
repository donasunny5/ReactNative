import { todoList, addTask, clearAll, changeStatus } from "../TodoList";

describe("Todo list operations", ()=>{
    beforeEach(() => {
        clearAll();
        });
    it("Add function", ()=>{   
        addTask("Do homework")
        addTask("Walk the dog")     
        expect(todoList.length).toBe(2)
    })
    it("Delete function", ()=>{   
        clearAll()    
        expect(todoList.length).toBe(0)
    })
    it("changeStatus function", () => {
        const taskId = addTask("Do homework");
        expect(todoList[0].isComplete).toBe(false);
        changeStatus(taskId, true);
        expect(todoList[0].isComplete).toBe(true);
        changeStatus(taskId, false);
        expect(todoList[0].isComplete).toBe(false);
    });
})