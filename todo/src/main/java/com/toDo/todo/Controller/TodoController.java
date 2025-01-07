package com.toDo.todo.Controller;
import com.toDo.todo.Model.Task;
import com.toDo.todo.Service.TodoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class TodoController {
    private final TodoService service;

    public TodoController(TodoService service) {
        this.service = service;
    }
    @GetMapping("/task")
    @CrossOrigin(origins = "http://127.0.0.1:5500/")
    public List<Task> getAllTodoItems(){
        return service.getAllTodoItems();
    }
    @GetMapping("/task/{taskId}")
    public Task getTodoById(@PathVariable Long taskId){
        return service.getTodoById(taskId);
    }
    @PostMapping("/task")
    public void addTask(@RequestBody Task task){
        service.addTask(task);
    }
    @PutMapping("/task")
    public void updateTask(@RequestBody Task task){
        service.updateTask(task);
    }
    @DeleteMapping("task/{taskId}")
    public void deleteTask(@PathVariable Long taskId){
        service.deleteTask(taskId);
    }

}