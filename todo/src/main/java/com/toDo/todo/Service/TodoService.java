
package com.toDo.todo.Service;
import com.toDo.todo.Model.Task;
import com.toDo.todo.Repository.TaskRepo;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TodoService {
    private final TaskRepo repo;

    public TodoService(TaskRepo repo){
        this.repo = repo;
    }

    public List<Task> getAllTodoItems(){
        return repo.findAll();
    }
    public Task getTodoById(Long taskId){
        return repo.findById(taskId).orElse(new Task());
    }
    public void addTask(Task todo){
        repo.save(todo);
    }
    public void updateTask(Task todo){
        repo.save(todo);
    }
    public void deleteTask(Long taskId){
        repo.deleteById(taskId);
    }

    

}
